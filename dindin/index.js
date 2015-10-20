var Hapi = require('hapi');
var Good = require('good');
var Sqlite3 = require('sqlite3');

var db = new Sqlite3.Database('./dindin.sqlite');

var server = new Hapi.Server();
server.connection({ port: 1974 });

server.route([{
	method: 'GET',
	path: '/api/recipes',
	handler: function(request, reply) {
		db.all('SELECT * FROM recipes', function(err, results) {
			if (err) {
				throw err;
			}
			
			reply(results);
		});
	}
}]);

// Register Good
server.register({
    register: Good,
    options: {
        reporters: [{
            reporter: require('good-console'),
            events: {
                response: '*',
                log: '*'
            }
        }]
    }
}, function (err) {
    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});
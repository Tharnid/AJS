// var myViewModel = {
// 	jewels: ko.observableArray([
// 		{ name: "White Bracelet",
// 		  src: "images/bracelet_1_big_1.jpg" },
// 		{ name: "Tear Earring",
// 		  src: "images/earring_1_big_1.jpg" },
// 		{ name: "Gold Necklace", 
// 		  src: "images/necklace_1_big_1.jpg"},
// 		{ name: "Marriage Ring", 
// 	      src: "images/ring_2_big_1.jpg" }
// 	])
// };

var myViewModel = {
	categories: ko.observableArray([])
};

$.getJSON("product.json", function(data) {
	myViewModel.categories(data.categories);
});

ko.applyBindings(myViewModel);
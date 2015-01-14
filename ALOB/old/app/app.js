(function () {
    "use strict";
    var app = angular.module("productManagement",
        ["common.services", 
        "ui.router", 
        "productResourceMock"]);

    app.config(["$stateProvider",
    			function($stateProvider) {
    				$stateProvider
    					// Products
    					.state("productsList", {
    						url: "/products",
    						templateUrl: "app/products/productListView.html",
    						controller: "ProductListCtrl as vm"
    						})	
    			}]

    );

}());
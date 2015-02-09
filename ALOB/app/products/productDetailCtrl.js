(function () {
    "use strict";

    angular
        .module("productManagement")
        .controller("ProductDetailCtrl",
                    ["product",
                     ProductDetailCtrl]); // registration adding product to min safe array

    function ProductDetailCtrl(product) {
        var vm = this;

        vm.product = product;

        vm.title = "Product Detail: " + vm.product.productName;

        if (vm.product.tags) {
            vm.product.tagList = vm.product.tags.toString();
        }
    }
}());

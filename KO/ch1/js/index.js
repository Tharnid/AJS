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
    allCategories: ko.observableArray([]),
    selectedProduct: ko.observable(),
    selectedCategory: ko.observable(),
    selectedName: ko.observable(''),
    shouldShow: function(item) {
        return new RegExp(myViewModel.selectedName(), "gi").test(item.title);
    },
    selectProduct: function(product) {
        myViewModel.selectedProduct.current = product;
    },
    showProduct: function(product) {
        myViewModel.selectedProduct.current = myViewModel.selectedProduct();
        myViewModel.selectedProduct(product);
    },
    hideProduct: function() {
        myViewModel.selectedProduct(myViewModel.selectedProduct.current);
    },
};

myViewModel.categories = ko.computed(function() {
    var results = myViewModel.allCategories(),
            filterByCategory = myViewModel.selectedCategory();
    if (filterByCategory) {
        results = ko.utils.arrayFilter(results, function(category) {
			return category.name === filterByCategory;
		});
    }
    return results;
});
myViewModel.categoryName = ko.computed(function() {
    var results = ko.utils.arrayMap(myViewModel.allCategories(), function(category) {
        return category.name;
    });
    return results;
});

$.getJSON('product.json', function(data) {
    myViewModel.allCategories(data.categories);
});

// $.getJSON("product.json", function(data) {
// 	myViewModel.categories(data.categories);
// });



ko.applyBindings(myViewModel);
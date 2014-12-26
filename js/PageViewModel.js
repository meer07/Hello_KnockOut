var initialData = [
	{ name: "Well-Travelled Kitten", sales: 352, price: 75.95 },
    { name: "Speedy Coyote", sales: 89, price: 190.00 },
    { name: "Furious Lizard", sales: 152, price: 25.00 },
    { name: "Indifferent Monkey", sales: 1, price: 99.95 },
    { name: "Brooding Dragon", sales: 0, price: 6350 },
    { name: "Ingenious Tadpole", sales: 39450, price: 0.35 },
    { name: "Optimistic Snail", sales: 420, price: 1.50 }
];

var PageGridModel = function(items){
	this.items = ko.observableArray(items);

	this.addItem = function(){
		this.items.push({name: "新書", sales: 0, price:100});
	};

	this.sortByName = function(){
		this.items.sort(function(a,b){
			return a.name < b.name ? -1 : 1;
		});
	};

	this.jumpToFirstPage = function(){
		this.gridViewModel.currentPageIndex(0);
	};

	this.gridViewModel = new ko.simpleGrid.viewModel({
		data: this.items,
		columns:[
			{ headerText: "タイトル", rowText: "name" },
			{ headerText: "販売実績(冊)", rowText: "sales" },
			{ headerText: "価格", rowText: function(item){ return "$" + item.price.toFixed(2);} }
			],
		pageSize: 4
	});
};
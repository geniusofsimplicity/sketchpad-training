var $container

$(document).ready(function(){
	$container = $("#container");
	var size = 16;
	createGridV3($container, size);

	$(document).on("mouseenter", ".div_cell", function(){
		$(this).addClass("div_cell_hovered");
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		$(this).css("background-color", "rgb("+
			r + "," + g + "," + b + ")");
	});

	$("button").on("click", function(){
		console.log(size);
		size = prompt("Enter new size, please: ");
		console.log(size);
		console.log($(".div_cell_hovered").length);
		$(".div_cell").remove();
		createGridV3($container, size);
	});
});



function createGridV1($parent, size){
	var cell_length = 960 / size - 2 + "px";
	for (var i = 0; i < size*size ; i++) {
		createDiv($parent, cell_length);
	};
};

function createGridV2($parent, size){
	var cell_length = 960 / size - 2 + "px";
	var $table = $parent.append($("<table style='width:100%'></table>"));
	console.log($table.length);
	for (var i = 0; i < size ; i++) {
		var $current_row = $table.append("<tr></tr>");
		for (var j = 0; j < size ; j++) {
			createDiv($current_row, cell_length);
		};
	};
};

function createGridV3($parent, size){
	var cell_length = 960 / size - 2 + "px";
	console.log($container.length);
	$container.css({"display":"inline-block","align":"middle"});
	for (var i = 0; i < size*size ; i++) {
		createDiv($parent, cell_length);
	};
};

function createDiv($parent, cell_length){
	$parent.append($("<div class='div_cell' style='width: " + cell_length + ";height:" + cell_length + "'></div>"));

};

function createTiles(jsonObj){
	var items = jsonObj.items;

	var tileBox = document.getElementById('tile-box');
	

	for(var i = 0; i < items.length; i++){
		var cont = document.createElement('div');
		cont.className = "row";
		var title = document.createElement('h2');
		title.className = "text-center";
		title.innerHTML = items[i].name;
		cont.appendChild(title);
		cont.appendChild(document.createElement('hr'));
		var cat = createCategory(items[i]);
		cont.appendChild(cat);
		tileBox.appendChild(cont);
	}

	
}

// returns one category object to be appended to the DOM
function createCategory(itemObj){
	var categoryDiv = document.createElement('div');
	categoryDiv.className = itemObj.name;

	var first = createInnerCategory(itemObj.first);
	var second = createInnerCategory(itemObj.second);
	var viewMore = document.createElement('div');
	viewMore.className = "col-md-2";
	var moreItemContent = document.createElement('div');
	moreItemContent.className = "item-content";
	var linkBtn = document.createElement('a');
	linkBtn.className = "btn btn-primary text-center";
	linkBtn.href = "#";
	linkBtn.type = "button";
	linkBtn.innerHTML = "View more";
	
	viewMore.appendChild(moreItemContent);
	viewMore.appendChild(linkBtn);

	categoryDiv.appendChild(first);
	categoryDiv.appendChild(second);
	categoryDiv.appendChild(viewMore);
	return categoryDiv;
}

function createInnerCategory(catObj){
	var col = document.createElement('div');
	col.className = "col-md-5";
	
	var link = document.createElement('a');
	link.className = "item";
	link.href = "#";

	var itemContent = document.createElement('div');
	itemContent.className = "item-content";

	var image = document.createElement('img');
	image.className = "item-img clear";
	image.src = catObj.itemUrl;

	var detail = document.createElement('div');
	detail.className = "item-detail";

	var titleText = document.createElement('h3');
	titleText.innerHTML = catObj.title;

	var buyNow = document.createElement('p');
	buyNow.innerHTML = "Buy Now: " + catObj.itemPrice; // TODO: format price

	detail.appendChild(titleText);
	detail.appendChild(buyNow);
	itemContent.appendChild(image);
	itemContent.appendChild(detail);
	link.appendChild(itemContent);
	col.appendChild(link);
	return col;
}

var jObj = $.getJSON("test.json", function(json){
	createTiles(json);
});
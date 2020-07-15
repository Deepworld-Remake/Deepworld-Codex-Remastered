var itemData;

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		var obj = this.responseText;
		itemData = JSON.parse(obj);
		console.log(itemData);

		itemData.forEach((e) => {
			var newElement = document.createElement("div");
			newElement.setAttribute("class", "sectionData");
			newElement.innerHTML = `<span class="sectionDataName">${e.ui}</span><br><br><a href="./itemData?itemId=${e.id}" class="sectionDataLink">${e.ui} Information</a><br><img src="./Sprites/${e.sprite}" alt="" class="sectionDataSprite">`;
			document.querySelector(".itemData").appendChild(newElement);
		});
	}
};
xhttp.open("GET", "./Config/ItemConfig.json", true);
xhttp.send();

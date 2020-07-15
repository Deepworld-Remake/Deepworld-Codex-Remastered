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
			console.log(e.sprite);
			var tempCss;
			if (e.width) {
				tempCss = "width:50px !important;height:auto !important;";
			}
			newElement.innerHTML = `<span class="sectionDataName">${e.ui}</span><br><br><a href="./itemData?itemId=${e.id}" class="sectionDataLink">${e.ui}</a><br><img style="${tempCss}" src="./Sprites/${e.sprite}.png" alt="" class="sectionDataSprite">`;
			document.querySelector(".itemData").appendChild(newElement);
		});
	}
};
xhttp.open("GET", "./Config/ItemConfig.json", true);
xhttp.send();

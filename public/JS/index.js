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
			var tempCss;
			var tempWidth,
				tempHeight;
			let img = new Image();
			img.onload = function () {
				tempWidth = img.width;
				tempHeight = img.height;
				// if (tempWidth > tempHeight) {
				// 	tempCss = "width:50px !important;height:auto !important;";
				// } else if (tempHeight > tempWidth) {
				// 	tempCss = "width:auto !important;height:50px !important;";
				// } else if (tempHeight == tempWidth) {
				// 	tempCss = "width:50px !important;height:50px !important;";
				// }
				img.setAttribute("class", "sectionDataSprite");
				img.setAttribute("style", tempCss);
				newElement.innerHTML = `<span class="sectionDataName">${e.ui}</span><br><br><a href="./itemData?itemId=${e.id}" class="sectionDataLink">${e.ui}</a><br>`;
				document.querySelector(".itemData").appendChild(newElement);
				document.querySelector(".itemData").appendChild(img);
			};
			img.src = "./Sprites/" + e.sprite + ".png";
		});
	}
};

xhttp.open("GET", "./Config/ItemConfig.json", true);
xhttp.send();
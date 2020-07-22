var itemData;

loadImage = async img => {
    return new Promise((resolve, reject) => {
        img.onload = async () => {
            resolve(true);
        };
    });
};

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		var obj = this.responseText;
		itemData = JSON.parse(obj);
		console.log(itemData);

		itemData.forEach(async (e) => {
			var newElement = document.createElement("div");
			newElement.setAttribute("class", "sectionData");
			var tempCss;
			let img = new Image();
			img.src = "./Sprites/" + e.sprite + ".png";
			await loadImage(img);
			tempCss = `width: ${50 * (e.dim[0] || 1)}px;height: ${50 * (e.dim[1] || 1)}px;`;
			img.setAttribute("class", "sectionDataSprite");
			img.setAttribute("style", tempCss);
			newElement.innerHTML = `<span class="sectionDataName">${e.ui}</span><br><br><a href="./itemData?itemId=${e.id}" class="sectionDataLink">${e.ui}</a><br>`;
			document.querySelector(".itemData").appendChild(newElement);
			document.querySelector(".itemData").appendChild(img);
		});
	}
};

xhttp.open("GET", "./Config/ItemConfig.json", true);
xhttp.send();
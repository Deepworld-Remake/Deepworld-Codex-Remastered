var nameUnfiltered = tempVars("dataName");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var itemData;

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var obj = this.responseText;
        itemData = JSON.parse(obj);
        itemData.forEach((e) => {
            var name = e.ui;
            console.log(e);
            console.log(e.ui);
            var nameFiltered = name.replace(/\s+/g, "");;
            if (nameFiltered == nameUnfiltered) {
                Action.storeValue(e.ui, 1, "ItemNameFull", cache);
                Action.storeValue("https://dwre-codex.web.app/Sprites/" + e.sprite, 1, "ItemSpriteURL", cache);
            }
        });
    }
};

xhttp.open("GET", "https://dwre-codex.web.app/Config/ItemConfig.json", true);
xhttp.send();
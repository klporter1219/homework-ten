import * as MODEL from "../model/model.js";

function init() {
    $(".links a").click(function (e) {
        let btnID = this.id;
        let contentID = btnID + "Content";

        MODEL.getPageContent(contentID);
    });

    $(".learn").click(function (e) {
        console.log('clicked');
        let btnID = this.id;
        let contentID = btnID + "Content";

        MODEL.getPageContent(contentID);
    });
}

$(document).ready(function () {
    init();
    MODEL.getPageContent("homeContent");
});
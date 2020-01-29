let info = $(".info-number").last();
console.log(info);
info.hide();
$(document).ready(() => {
    console.log("Dom ready");
    let info = $(".info-number").last();
    console.log(info);
    info.hide();
});
$(window).on('load', function () {
    let testing = document.getElementsByTagName("H5");
    console.log("PageReady");
    console.log(testing);
    console.log(testing[0]);
    GetStuff();
});

function GetStuff() {
    let testing = document.getElementsByTagName("H5");
    if (!testing.length > 0) {
        setTimeout(GetStuff, 1000);
    } else {
        let trophy = $("#rank-number");
        console.log("TESTING::", testing);
        trophy[0].innerText = testing[0].innerText;
        testing[1].innerText = "-Andres was here";
        testing[1].outerText = "-Andres was here";

        // console.log("t", trophy);
        // console.log(trophy);
        // trophy[0].innerText = "Yoo";
        let info = $(".info-number").last();
        info.show();

    }
    // let testing = document.getElementsByTagName("H5");
    // testing.array.forEach(element => {
    //     console.log(element.innerText);
    // });
    console.log("getstuff");
}
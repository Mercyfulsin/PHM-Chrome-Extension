$(window).on('load', function () {
    let testing = document.getElementsByTagName("H5");
    console.log("AllRank");
    GrabInfo();
});

function GrabInfo() {
    let testing = document.getElementsByTagName("H5");
    if (!testing.length > 0) {
        setTimeout(GrabInfo, 1000);
    } else {
        $.ajax({
            method: "GET",
            url: "https://my.phmlink.com/get-billing-activity"
        }).done(function (msg) {
            createHtml(msg);
        });
    }
}

function createHtml(arr) {
    let menu = $(".side-menu");
    arr.forEach(item => {
        // i class class="fa fa-list"
        // span class class="fa fa-chevron-down"
        let newLi = $(`<li><a><i ></i>${item.full_name}(${item.rank}) || ${item.activity_count}<span></span></a></li>`);
        menu.append(newLi);
    });
}
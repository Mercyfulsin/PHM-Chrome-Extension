$(window).on('load', function () {
    let testing = document.getElementsByTagName("H5");
    console.log("PageReady");
    console.log(testing);
    console.log(testing[0]);
    OpenStuff();
});

function OpenStuff() {
    let testing = document.getElementsByTagName("H5");
    if (!testing.length > 0) {
        setTimeout(OpenStuff, 1000);
    } else {
        $('.smartable-select-visible').click(function () {
            console.log("Yo im here");
            $.each($('a'), function (index, value) {
                if (this.innerText == "Review") {
                    console.log("This is an a");
                    console.log($(this));
                    var url = $(this).attr('href');
                    var newTab = window.open(url, '_blank');
                    if (!newTab || newTab.closed || typeof newTab.closed == 'undefined') {
                        alert('Your browser is blocking the popups.')
                    }
                }
            });
        });

    }
}
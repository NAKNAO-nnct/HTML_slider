$(function () {
    $(document).keydown(function (event) {
        // クリックされたキーコードを取得する
        var keyCode = event.keyCode;
        // F5 の場合は falseをリターン
        // if (keyCode == 40) {
        //     nextPage();
        // }
        if (keyCode == 38) {
            clearPage();
        }
        // else{
        //     nextPage(keyCode);
        // }
    });
});

// var page = ["page1", "page2-1", "page2-2", "page2-3"];

var page = ["#page1", "#page2", "#page3", "#page4", "#page5", "#page6", "#page7", "#page8"];
function nextPage(num){
    // if (num != 0) {
    //     $("#" + page[num - 1]).addClass("nonono");
    // }
    clearPage();
    setTimeout(function(){
        $(page[num]).removeClass('nonono');
    }, 500);
}

function clearPage(){
    for (var i=0; i<7; i++){
        $(page[i]).addClass('nonono');
    }
}
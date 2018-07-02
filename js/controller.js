// $(function () {
//     $(document).keydown(function (event) {
//         // クリックされたキーコードを取得する
//         var keyCode = event.keyCode;
//         // F5 の場合は falseをリターン
//         if (keyCode == 40) {
//             nextPage();
//         }
//     });
// });

// var page = ["page1", "page2-1", "page2-2", "page2-3"];
// // var i = 0;
// function nextPage(){
//     // query
//     var url = decodeURI(location.href);
//     var getPage = url.split("#");
//     var page_index = 0;
//     if (getPage[1] != undefined){
//         page_index = page.indexOf(getPage);
//         console.log(page_index);
//     }
//     console.log(getPage[1]);
//     $(page[page_index]).addClass("nonono");
//     $(page[page_index + 1]).removeClass("nonono");
//     location.href =  "#" + getPage[page_index + 1];

// }
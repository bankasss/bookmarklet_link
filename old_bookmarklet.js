var url = location.href;
if (url.slice(8, 13) == "booth") {
    var title = document.getElementsByClassName("u-tpg-title1")[0].innerText;
    var shop = document.getElementsByClassName("u-text-ellipsis")[0].innerText;
    navigator.clipboard.writeText(title + "　" + "-" + "　" + shop + "\n" + url);

}else{
    var title = document.getElementsByClassName("item-name")[0].innerText;
    var shop = document.getElementsByClassName("shop-name-label")[0].innerText;
    navigator.clipboard.writeText(title + "　" + "-" + "　" + shop + "\n" + url);
}
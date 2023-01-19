(function(func) {
  var scr = document.createElement("script");
  scr.src = "//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js";
  scr.onload = function() {
      func(jQuery.noConflict(true));
  };
  document.body.appendChild(scr);
})(function($) {
  var url = location.href;
  var flag = 1;

  if (url.indexOf("booth.pm") > 0) {
    var item_num = url.slice(-7);
    var url = "https://booth.pm/ja/items/" + item_num;
   
    if ($("h1").hasClass("bind-item-name")) {
      var title = $(".bind-item-name").eq(0).text();
    } else if ($("h2").hasClass("u-tpg-title1")) {
      var title = $(".u-tpg-title1").eq(0).text();
    } else {
      alert('タイトルを取得できませんでした');
      flag = 0;
    }

    if ($("img").hasClass("header-image")) {
      var shop = $('.header-image').eq(0).attr("alt");
    } else if($("img").hasClass("at-item-summary")) {
      var shop = $('.at-item-summary').eq(0).attr("alt");
    } else if($("span").hasClass("shop-name-label")){
      var shop = $('.shop-name-label').eq(0).text();
    } else {
      alert('ショップ名を取得できませんでした');
      flag = 0;
    }
  } else if (url.indexOf("fanbox.cc") > 0) {
    var ogp = $("meta[property='og:title']").attr('content').split("｜");
    var title = ogp[0];
    var shop = ogp[1];
  } else {
    alert('このURLは使えません');
    flag = 0;
  }

  if (flag == 1) {
    var text = title + "｜" + shop +  "\r" + url;
    var $textarea = $('<textarea class="copy_txt"></textarea>');
    $textarea.text(text);
    $("body").append($textarea);
    $textarea.select();
    document.execCommand('copy');
    $textarea.remove();
    alert ("コピーしました！\r" + text);
  }
});
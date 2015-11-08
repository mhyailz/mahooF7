/**
 *
 * author : mahoo
 * time : 2015-11-07
 *
 **/

$(document).on('refresh', '.pull-to-refresh-content',function(e) {
    // 模拟2s的加载过程
    setTimeout(function() {
        var cardNumber = $(e.target).find('.card').length + 1;
        var cardHTML = '<div class="card">' +
                          '<div class="card-header">card'+cardNumber+'</div>' +
                          '<div class="card-content">' +
                            '<div class="card-content-inner">' +
                                '这里是第' + cardNumber + '个card，下拉刷新会出现第' + (cardNumber + 1) + '个card。' + '<a href="#router2">' + '链接' + '</a>'
                            '</div>' +
                          '</div>' +
                      '</div>';

        $(e.target).find('.card-container').prepend(cardHTML);
        // 加载完毕需要重置
        $.pullToRefreshDone('.pull-to-refresh-content');
    }, 2000);
});


$.initPullToRefresh('.content');

$(function() {
  $(".swiper-container").swiper();
});


function appGoBack(){
    window.app.appGoBack();
}
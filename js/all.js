$(document).ready(function() {
    // 滑鼠移入效果
    $('tr').mouseover(function(event) {
        /* Act on the event */
        // 判斷mouseover時候是第幾列
        var trIndex = $(this).index();
        // 當大於第一列的時候要改上其他font顏色
        if (trIndex > 0) {
            $(this).children('.lightGColor').css('color', 'pink');
            $(this).children('.none').css('color', 'white');
        }
    });
    // 滑鼠移出效果
    $('tr').mouseout(function(event) {
        /* Act on the event */
        // 判斷mouseover時候是第幾列
        var trIndex = $(this).index();
        // 當大於第一列的時候要改上其他font顏色
        if (trIndex > 0) {
            $(this).children('.lightGColor').css('color', '');
            $(this).children('.none').css('color', '');
        }
    });

    // gototop效果
    $('.gototop a').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        $('html body').animate({
            scrollTop: 0
        }, 600);

    });

    // 觸發下拉選單
    $('.product').click(function(event) {
        /* Act on the event */
        event.preventDefault();

        $('.product').toggleClass('menu-product');

        // 發現如果不將下拉選單做定位，會造成下拉選單一出現會推擠到下面的div
        // 並且需要將z-index讓他有比較大的數值，否則會被蓋住
        $('.product_open').css({
            'position': 'absolute',
            'z-index': 1000
        });

        // 下拉menu的li的style
        $('.product_open').find('li').css({
            'margin': '10px 0px',
            'background-color': 'white',
            'padding': '8px 0px',
        });

        $('.product_open').slideToggle();
    });

    // lightbox設定
    lightbox.option({
        // 縮放速度
        'resizeDuration': 500,
        // 設定輪播
        'wrapAround': true,

    })
});


// slider設定
$(window).on('load', function() {
    $('#slider').nivoSlider();
});

function ok() {
    alert("送出成功");
}
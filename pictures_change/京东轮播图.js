var i=0

// 定义当按钮悬浮在小按钮上时显示对应按钮的图片
$('.buttoms li').mouseover(function(){
    $(this).addClass('red').siblings().removeClass('red')
    // 找到按钮对应的序号
    var $icon_index=$(this).index();
    i=$icon_index
    $('.photos li').eq($icon_index).removeClass('hide').siblings().addClass('hide');
})

// 实现自动轮播

function foo(){
    // 判断当轮播到最后一个图片或按钮时返回第一个图片和按钮
    if (i==7) {
        i=-1
    }
    i++;
    $('.buttoms li').eq(i).addClass('red').siblings().removeClass('red');

    $('.photos li').eq(i).removeClass('hide').siblings().addClass('hide');
}

var ID=setInterval(foo,1000)

// 悬浮终止定时器，第一个函数为鼠标进入时执行，第二个为鼠标移除时执行
$('.box').hover(function(){
    // 终止定时器
    clearInterval(ID)
},function(){
    ID=setInterval(foo,1000);
});



// 实现手动轮播，当点击向右轮播按钮时，实现自动轮播一次，当点击向左按钮时实现反方向的自动轮播一次

$('.right').click(function(){
    foo()
});
// 实现放方向轮播函数
function bar(){
    if (i==0) {
        i=8
    }
    i--;
    $('.buttoms li').eq(i).addClass('red').siblings().removeClass('red');

    $('.photos li').eq(i).removeClass('hide').siblings().addClass('hide');
}

$('.left').click(function(){
    bar()
})

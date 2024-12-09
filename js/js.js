$(document).ready(function(){

    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();

        if(scrollTop != 0){
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');
        }
    })

    $('#home').mousemove(function(e){
        const width = $('#home').width();
        const height = $('#home').height();

        const pageX = e.pageX
        const pageY = e.pageY

        const moveX = (pageX - width / 2) / width;
        const moveY = (pageY - height / 2) / height;

        const backMoveX = -moveX * 30;
        const backMoveY = -moveY * 10;

        $('#home .bg').css({transform: `translate(${backMoveX}px, ${backMoveY}px)`})

    });

    $('#portfolio .tab_li').eq(0).children('.bar').stop().animate({'width': '100%'},300);

    $('#portfolio .slide_area .tab').css({'opacity': '0'});
    $('#portfolio .slide_area .tab').eq(0).css({'opacity': '1'});

    $('#portfolio .tab_li').click(function(){
        var idx = $(this).index();

        $('#portfolio .slide_area .tab').stop().animate({'opacity': '0'},300);
        $('#portfolio .slide_area .tab').eq(idx).stop().animate({'opacity': '1'},300);

        $('#portfolio .tab_li .bar').stop().animate({'width': '0'},300)
        $('#portfolio .tab_li').eq(idx).children('.bar').stop().animate({'width': '100%'},300);

    });

    $('.back_btn').click(function(){
        history.go(-1);
    });
});
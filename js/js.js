$(document).ready(function(){

    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();

        if(scrollTop != 0){
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');
        }
    });


    var contentArr = [];

    var length = $('.index section').length;

    for(i = 0; i < length; i++) {
        contentArr.push($('.index section').eq(i).offset().top);
    }

    $(window).resize(function(){
        var length = $('.index section').length;
        contentArr.splice(0);

        for(i = 0; i < length; i++) {
            contentArr.push($('.index section').eq(i).offset().top);
        }

        console.log(contentArr)
    });

    $('.nav_li').click(function(){
        var idx = $(this).index();
        if(idx == '1') {
            $('body, html').stop().animate({scrollTop: contentArr[idx] - 300}, 500);
        }else{
            $('body, html').stop().animate({scrollTop: contentArr[idx]}, 500);
        }
    });

    $('.view_btn').click(function(){
        $('body, html').stop().animate({scrollTop: contentArr[1] - 300}, 500);
    });

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

    $('#skills .s_box').mouseenter(function(){
        $(this).children('.bar').stop().animate({'width': '100%'},100);

        var icon = $(this).find('.icon_wrap').children('.icon');
        icon.eq(0).stop().animate({'top': '0'},100,function(){
            icon.eq(1).stop().animate({'top': '0'},100,function(){
                icon.eq(2).stop().animate({'top': '0'},100);
            })
        });
    });
    $('#skills .s_box').mouseleave(function(){
        $(this).children('.bar').stop().animate({'width': '0%'},100);

        var icon = $(this).find('.icon_wrap').children('.icon');
        icon.eq(0).stop().animate({'top': '150px'},100,function(){
            icon.eq(1).stop().animate({'top': '150px'},100,function(){
                icon.eq(2).stop().animate({'top': '150px'},100);
            })
        });
    });
});
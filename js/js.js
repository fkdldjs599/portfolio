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

        // console.log(contentArr)
    });


    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        var careerTop = $('.career_wrap').offset().top;
        var block = $('.career_wrap .block');

        
        if(scrollTop < contentArr[2] && scrollTop >= contentArr[1] - 300) {
            $('.intro_wrap .profile_img img').css({'animation': 'show_ani 500ms 100ms forwards'});
            $('.intro_wrap .profile_txt').css({'animation': 'show_ani 500ms 500ms forwards'});

        }else{
            $('.intro_wrap .profile_img img').css({'animation': 'none'});
            $('.intro_wrap .profile_txt').css({'animation': 'none'});
        }

        if(scrollTop >= careerTop - 800) {
            block.eq(0).css({'animation': 'show_ani 500ms 900ms forwards'});
            block.eq(1).css({'animation': 'show_ani 500ms 1200ms forwards'});
            block.eq(2).css({'animation': 'show_ani 500ms 1500ms forwards'});
            block.eq(3).css({'animation': 'show_ani 500ms 1800ms forwards'});

            block.eq(4).css({'animation': 'show_ani 500ms 900ms forwards'});
            block.eq(5).css({'animation': 'show_ani 500ms 1200ms forwards'});
            block.eq(6).css({'animation': 'show_ani 500ms 1500ms forwards'});
            block.eq(7).css({'animation': 'show_ani 500ms 1800ms forwards'});
        }else{
            block.css({'animation': 'none'});
        }

        if(scrollTop >= contentArr[2] - 500 && scrollTop < contentArr[3] ){
            $('#skills .s_box .black_bg').css({'width': '100%'});
        }else{
            $('#skills .s_box .black_bg').css({'width': '0'});
        }

        if(scrollTop <= contentArr[4] - 100 && scrollTop >= contentArr[3] - 300) {
            $('.p_img_area .word_img').css({'animation': 'port_ani 1200ms 50ms forwards'});
        }else{
            $('.p_img_area .word_img').css({'animation': 'none'});
        }

        if(scrollTop >= contentArr[4] - 100) {
            $('.contact_box').css({'animation': 'show_ani 500ms 100ms forwards'});
        }else{
            $('.contact_box').css({'animation': 'none'});
        }

        // $('#home .bg').css({'position': 'fixed'});
        // $('#home .inner').css({'position': 'fixed'});

        // if(scrollTop >= 2000) {
        //     $('#home .bg').css({'position': 'absolute'});
        //     $('#home .inner').css({'position': 'inherit'});
        // }else if(scrollTop >= 1500) {
        //     $('#home .bg').css({'background-size': '120%'});
        // }else if(scrollTop >= 1000) {
        //     $('#home .bg').css({'background-size': '100%'});
        // }else if(scrollTop >= 500) {
        //     $('#home .bg').css({'background-size': '80%'});
        // }else {
        //     $('#home .bg').css({'background-size': '70%'});
        // }

// 키워드
        var textscrollTop = $('.textcontents').offset().top;
        var scrolling = (contentArr[2] - 1200 - textscrollTop) / 15
        var lastfix = contentArr[2] - $(window).innerHeight();

        if(textscrollTop <= scrollTop && scrollTop <= lastfix) {
            $('.textcontents .bg').css({'opacity': '0'});
            $('.textcontents .txt_wrap').addClass('fixed');
            $('.textcontents .txt_wrap').css({'top': '50%'});

            if(scrollTop >= textscrollTop + scrolling * 11) {
                $('.textcontents .box_top .top').css({'opacity': '1'});
                $('.textcontents .box_bot .keyword').css({'opacity': '1'});

                $('.graph').css({'width': '100%'},500);

            }else if(scrollTop >= textscrollTop + scrolling * 6) {
                $('.textcontents .box_top .top').eq(0).css({'opacity': '1'});
                $('.textcontents .box_top .top').eq(1).css({'opacity': '1'});

                $('.textcontents .box_bot .keyword').eq(0).css({'opacity': '1'});
                $('.textcontents .box_bot .keyword').eq(1).css({'opacity': '1'});

                $('.graph').css({'width': '66%'},500);

            }else if(scrollTop >= textscrollTop + scrolling * 1) {
                $('.textcontents .box_top .top').eq(0).css({'opacity': '1'});
                $('.textcontents .box_bot .keyword').eq(0).css({'opacity': '1'});
                $('.graph').css({'width': '33%'},500);
            }else {
                $('.textcontents .box_top .top').css({'opacity': "0"});
                $('.textcontents .box_bot .keyword').css({'opacity': "0"});
                $('.graph').css({'width': '0%'},500);
            }
        }else if(lastfix < scrollTop < contentArr[2]){
            $('.textcontents .txt_wrap').removeClass('fixed');
            $('.textcontents').css({'padding-top': '250vh'});
        }else{
            $('.textcontents .txt_wrap').removeClass('fixed');
            $('.textcontents').css({'padding-top': '50vh'});
        }
    });

    $('.nav_li').click(function(){
        var idx = $(this).index();

        $('body, html').stop().animate({scrollTop: contentArr[idx]}, 500);
    });

    $('.view_btn').click(function(){
        $('body, html').stop().animate({scrollTop: contentArr[1]}, 700);
    });

    $('#home').mousemove(function(e){
        const width = $('#home').width();
        const height = $('#home').height();

        const pageX = e.pageX
        const pageY = e.pageY

        const moveX = (pageX - width) / width;
        const moveY = (pageY - height) / height;

        const backMoveX = -moveX * 30;
        const backMoveY = -moveY * 10;

        $('#home .bg').css({transform: `translate(${backMoveX}px, ${backMoveY}px)`});

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
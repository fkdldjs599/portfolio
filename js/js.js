$(document).ready(function(){
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
});
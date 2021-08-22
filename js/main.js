$(function(){
    $('.stories').masonry({
        itemSelector: '.storyBox',
        columnWidth: 326,
        gutter:12,
        horizontalOrder: true
    });
    $('.wdcaret').on('click', function(){
        event.preventDefault()
        if($(this).parent().find('.subMenu').is(":visible")){
            $(this).parent().find('.subMenu').slideUp();
        }else{
            $('.subMenu').slideUp();
            $(this).parent().find('.subMenu').slideDown();
        }

    })
    $('.sorter').on('click', function(){
        $(this).parent().find('.options').fadeIn();
    })
    $('.sortBy .options span').on('click',function(){
        var sort =  $(this).data("option");
        $(this).parents('.sortBy').find('.selected').text(sort);
        $(this).parent().fadeOut();
    })
});

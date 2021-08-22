$(function(){
    // masonry
    $('.stories').masonry({
        itemSelector: '.storyBox',
        columnWidth: 326,
        gutter:12,
        horizontalOrder: true
    });

    // submenu
    $('.wdcaret').on('click', function(){
        event.preventDefault()
        if($(this).parent().find('.subMenu').is(":visible")){
            $(this).parent().find('.subMenu').slideUp();
        }else{
            $('.subMenu').slideUp();
            $(this).parent().find('.subMenu').slideDown();
        }

    })


    // read more
    $('.showMore').on('click', function(e){
        e.preventDefault();
        if( $(this).parent().find('p').hasClass('showmore')){
            $(this).parent().find('p').removeClass('showmore')
            $(this).text("Show more...");
        }else{
             $(this).parent().find('p').addClass('showmore');
            $(this).text("Show less...");
        }
    })


    // sort options
    
    $('.sorter').on('click', function(){
        $(this).parent().find('.options').fadeIn();
    })
    $('.sortBy .options span').on('click',function(){
        var sort =  $(this).data("option");
        $(this).parents('.sortBy').find('.selected').text(sort);
        $(this).parent().fadeOut();
    })
});

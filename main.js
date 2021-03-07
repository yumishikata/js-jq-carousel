$('.next i').click(function() {
    if( $('img.active').hasClass("last")) {
        $('img.first').addClass("active");
        $('img.last').removeClass("active");
    } else {
    $('img.active').next().addClass("active");
    $('img.active').prev().removeClass("active");
    } 
    if( $('.fa-circle.active').hasClass("last")) {
        $('.fa-circle.first').addClass("active");
        $('.fa-circle.last').removeClass("active");
    } else {
    $('.fa-circle.active').next().addClass("active");
    $('.fa-circle.active').prev().removeClass("active");
    }
});

$('.prev i').click(function() {
    if( $('img.active').hasClass("first")) {
        $('img.last').addClass("active");
        $('img.first').removeClass("active");
    } else {
    $('img.active').prev().addClass("active");
    $('img.active').next().removeClass("active");
    }
    if( $('.fa-circle.active').hasClass("first")) {
        $('.fa-circle.last').addClass("active");
        $('.fa-circle.first').removeClass("active");
    } else {
    $('.fa-circle.active').prev().addClass("active");
    $('.fa-circle.active').next().removeClass("active");
    }
});

$('.fa-circle.uno').click(function() {
    $('.fa-circle').removeClass("active");
    $(this).addClass("active");
    $('img').removeClass("active");
    $('img.uno').addClass("active");
});
$('.fa-circle.due').click(function() {
    $('.fa-circle').removeClass("active");
    $(this).addClass("active");
    $('img').removeClass("active");
    $('img.due').addClass("active");
});
$('.fa-circle.tre').click(function() {
    $('.fa-circle').removeClass("active");
    $(this).addClass("active");
    $('img').removeClass("active");
    $('img.tre').addClass("active");
});
$('.fa-circle.quattro').click(function() {
    $('.fa-circle').removeClass("active");
    $(this).addClass("active");
    $('img').removeClass("active");
    $('img.quattro').addClass("active");
});
$(window).on("scroll touchmove", function () {
    $("header").toggleClass("small", $(document).scrollTop() > 0);
});

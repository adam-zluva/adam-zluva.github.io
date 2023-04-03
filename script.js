$(document).ready(function()
{
    let animateClass = "animate";
    $(".section-button").hover(
    function()
    {
        $(this).addClass(animateClass);
    }, function()
    {
        $(this).removeClass(animateClass);
    });
    $(".section-button").click(
    function()
    {
        $(this).removeClass(animateClass);
    })

    let text_selector = "p, h1, h2, h3";

    $(text_selector).fadeOut(1, function()
    {
        $(text_selector).fadeIn(500);
    });
});
$(document).ready(function () {
    function updateTOC() {
        var outline = HTML5Outline(document.body);
        var toc = outline.asHTML(true);
        $("#toc").html(toc);
    }

    $(window).scroll(function () {
        var offsetTop = $(window).scrollTop() + 280 + "px";
        $("#tocSwitcher").animate({top: offsetTop}, {duration: 100, queue: false});
        $("#toc").animate({top: offsetTop}, {duration: 500, queue: false});
    });

    $("body").append('<div id="tocSwitcher" class="float" onclick="$(\'#toc\').toggle(500);"></div>');
    $("body").append('<div id="toc" class="float"></div>');
    updateTOC();

    $("#toc a").click(function () {
        var rel = $(this).attr("href");
        var pos = $(rel).offset().top;//获取该点到头部的距离
        $("html,body").animate({scrollTop: pos}, 800);
    })
});
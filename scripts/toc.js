$(document).ready(function () {
    function updateTOC() {
        var outline = HTML5Outline(document.body);
        var toc = outline.asHTML(true);
        $("#toc").html(toc);
    }

    $("body").attr("id", "top");
    $("body").append('<div id="side-tools"><div id="tocSwitcher" class="float"></div><div id="toc" class="float"></div><p class="float" id="back-top"><a href="#top"><span></span>回到顶部</a></p></div>');
    updateTOC();
    
    if(typeof(CollapsibleLists) != "undefined") {
        $("#toc > ol > li > ol").each(function(index) {
            CollapsibleLists.applyTo(this);
        });
    }

    $("#tocSwitcher").mouseenter(function() {    
        $("#toc").show();
    });
    
    $("#toc").mouseleave(function() {
        $("#toc").hide();
    });

    $("#toc a").click(function (event) {
        event.preventDefault();
        var rel = $(this).attr("href");
        var pos = $(rel).offset().top;//获取该点到头部的距离
        $("html,body").animate({scrollTop: pos}, 800);
    });

    $("#back-top").hide();

    $(function() {
        $(window).scroll(function() {
            if($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            }
            else {
                $('#back-top').fadeOut();
            }
        });

        $('#back-top a').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});

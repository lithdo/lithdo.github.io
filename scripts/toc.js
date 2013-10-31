$(document).ready(  function(){
function updateTOC() {
    var toc = '';
    var old_level = 0;
    $('h1,h2,h3,h4').each(function(i, h) {
		h.id = 'title' + i;
	    level = parseInt(h.tagName.substring(1));
	    if (level < old_level) {
		toc += '</ol>';
	    } else if (level > old_level) {
		toc += '<ol>';
	    }
	    toc += '<li><a href=#' + h.id + '>' + h.innerHTML + '</a>';
	    old_level = level;
	});
    while (level > 1) {
		toc += '</ol>';
		level -= 1;
    }

    $("#toc").html(toc);
}

$(window).scroll(function (){
	var offsetTop = $(window).scrollTop() + 280 +"px";
	$("#tocSwitcher").animate({top : offsetTop},{duration:100 , queue:false});
	$("#toc").animate({top : offsetTop},{duration:500 , queue:false});
});

updateTOC();

$("#toc a").click(function(){
	var rel=$(this).attr("href");
	var pos=$(rel).offset().top;//获取该点到头部的距离
	$("html,body").animate({scrollTop:pos}, 800);
})

});
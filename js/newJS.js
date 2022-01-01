
//top scroll
top_btn = $("#scroll-top");
 $(window).scroll(function ()
 {
     $(this).scrollTop()>=100 ? top_btn.show():top_btn.hide();

 });
 top_btn.click(function (){$("html,body").animate({scrollTop : 0} ,600)})
 /*----------hide Fetuers -------*/


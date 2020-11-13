
function link(dest){

}
function tv(){

}
$(function(){
	$('#media').click(function(){
    console.log("hi");
		e1 = $('#all');
        e1.addClass('animate');
        $("canvas").css("opacity", "0")
        e1.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
            window.location.href = "media.html";
        });
	});
});
$(function(){
	$('#meet').click(function(){
    console.log("hey");
		e1 = $('body');
        e1.addClass('transition');
        $("body").css("background-color", "white")
        e1.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
          window.location.href = "meet.html";
            $("body").css("opacity", "0");
            el.removeClass("transition");

            return false;
        });
	});
});
window.onclick = e => {
    console.log(e.target);  // to get the element
    console.log(e.target.tagName);  // to get the element tag name alone
}

window.addEventListener("load", function()
{
	App.init();
}, false);

window.addEventListener("resize", function()
{
	App.resize();
}, false);

window.addEventListener("keydown", function(event)
{
	// console.log(event);
	// if (event.keyCode == 27)
	// 	Ui.popout();
}, false);

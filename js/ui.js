var Ui =
{
	loaded: false,

	main_div: null,
	left_aside: null,
		add_image_div: null,
		add_image_btn: null,
	right_aside: null,
	main_footer: null,

	init: function()
	{
		this.main_div = document.getElementById("main_div");
		this.left_aside = document.getElementById("left_aside");
			this.add_image_div = document.querySelector("#left_aside > .add_image_div");
			this.add_image_btn = document.querySelector("#left_aside > .add_image_div > input");
		this.right_aside = document.getElementById("right_aside");
		this.main_footer = document.getElementById("main_footer");

		this.add_image_div.style.opacity = 1;
		this.add_image_btn.disabled = false;
		this.attach_events();
		this.loaded = true;
	},

	attach_events: function()
	{
		window.addEventListener("mousemove", function(event)
		{
			if (SpriteManager.dragging === true)
			{
				console.log('a');
			}
		}, true);
		this.main_div.addEventListener("mouseup", function()
		{
			console.log("up");
			SpriteManager.dragging = false;
		}, false);
	}
}

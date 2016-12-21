var Import =
{
	popup: null,
	started: false,

	start: function()
	{
		if (this.started)
			return ;
		Ui.popup("import.html", this.init);
	},

	cancel: function()
	{
		// console.log(this.popup);
		Ui.popout(this.popup);
		this.popup = null;
		this.started = false;
	},

	init: function(new_popup)
	{
		var self = Import;
		self.popup = new_popup;
		self.started = true;
	},

	select_file: function(file)
	{
		if (!file || file.type != "image/png")
			console.log("Error.");
		document.querySelector("#import_popup > .content > .browse_div > p").innerHTML = file.name;
		console.log(file);
	}
}

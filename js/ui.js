var Ui =
{
	template_parts: ["header.html", "hierarchy.html", "main.html", "inspector.html", "timeline.html"],
	template_loaded: 0,

	active_popup: false,

	init: function()
	{
		this.load_editor();
	},

	load_editor: function()
	{
		var self = this;
		var app_loader = document.getElementById("app_loader");

		setTimeout(function()
		{
			app_loader.style.opacity = 1;
			setTimeout(function()
			{
				self.load_template();
			}, 250);
		}, 250);
	},

	load_template: function()
	{
		if (this.template_loaded < this.template_parts.length)
			this.insert_template(document.body, this.template_parts[this.template_loaded]);
		else
		{
			var self = this;
			var app_loader = document.getElementById("app_loader");

			setTimeout(function()
			{
				app_loader.style.opacity = 0;
				setTimeout(function()
				{
					app_loader.parentNode.removeChild(app_loader);
					var parts = document.querySelectorAll(".template");
					for (var i = 0; i < parts.length; ++i)
						parts[i].style.opacity = 1;
				}, 250);
			}, 250);
		}
	},

	insert_template: function(parent, filename)
	{
		var self = this;

		var xhr = new XMLHttpRequest();
		xhr.open("GET", "html/template/" + filename, true);
		xhr.onreadystatechange = function()
		{
			if (this.readyState !== 4) return ;
			if (this.status !== 200) return ;
			parent.innerHTML += this.responseText;
			document.querySelector("#app_loader .progress").style.width = ++self.template_loaded * 20 + "%";
			setTimeout(function(){self.load_template()}, 50);
		};
		xhr.send();
	},

	popup: function(filename, callback)
	{
		if (this.active_popup)
			return ;
		var self = this;
		this.active_popup = true;
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "html/popups/" + filename, true);
		xhr.onreadystatechange = function()
		{
			if (this.readyState !== 4 || this.status !== 200)
				return ;
			document.body.innerHTML += this.responseText;
			var new_popup = document.querySelector(".popup");
			setTimeout(function()
			{
				new_popup.style.opacity = 1;
			}, 50);
			callback(new_popup);
		};
		xhr.send();
	},

	popout: function(popup)
	{
		if (!popup)
			return ;
		var self = this;
		popup.style.opacity = 0;
		setTimeout(function()
		{
			popup.parentNode.removeChild(popup);
			self.active_popup = false;
		}, 250);
	}
}

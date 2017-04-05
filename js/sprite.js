var SpriteManager =
{
	sprites: [],
	selected: null,
	dragging: false,

	create_sprites: function(input_files)
	{
		for (var i = 0; i < input_files.length; ++i)
		{
			var new_sprite = new Sprite();
			new_sprite.init(input_files[i]);
			new_sprite.id = this.sprites.length;
			this.sprites.push(new_sprite);
		}
	}
}

var Sprite = function()
{
	this.id = null;
	this.selected = false;
	this.name = null;
	this.dom_img = null;
	this.dom_chip = null;
}

Sprite.prototype.init_dom_img = function(file)
{
	var self = this;
	var file_reader = new FileReader();

	this.dom_img = document.createElement("img");
	file_reader.onload = function()
	{
		self.dom_img.src = file_reader.result;
	}
	this.name = file.name;
	file_reader.readAsDataURL(file);
	Ui.main_div.appendChild(this.dom_img);
}

Sprite.prototype.init_dom_chip = function()
{
	this.dom_chip = document.createElement("article");
	this.dom_chip.className = "chip";
	this.dom_chip.innerHTML = this.name;

	Ui.left_aside.appendChild(this.dom_chip);
}

Sprite.prototype.attach_events = function()
{
	var self = this;

	this.dom_img.addEventListener("mousedown", function(event)
	{
		self.select();
		SpriteManager.dragging = true;
	}, false);

	this.dom_chip.addEventListener("click", function()
	{
		self.select();
	}, false);
}

Sprite.prototype.init = function(file)
{
	this.init_dom_img(file);
	this.init_dom_chip();
	this.attach_events();
}

Sprite.prototype.select = function()
{
	if (SpriteManager.selected)
	{
		SpriteManager.selected.dom_img.classList.remove("selected");
		SpriteManager.selected.dom_chip.classList.remove("selected");
		SpriteManager.selected = null;
	}
	SpriteManager.selected = this;
	this.dom_img.classList.add("selected");
	this.dom_chip.classList.add("selected");
}

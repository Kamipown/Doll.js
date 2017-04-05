var app = angular.module("app", []);

// var App =
// {
// 	init: function()
// 	{
// 		// Ui.init();
// 	},

// 	load_images: function(input_files)
// 	{
// 		for (var i = 0; i < input_files.length; ++i)
// 		{
// 			var new_sprite = new Sprite();
// 			new_sprite.init(input_files[i]);
// 		}
// 	}
// }

app.controller('app_ctrl', function($scope)
{
	$scope.doll_parts =
	[
		{"id": 0, "name": "head"},
		{"id": 1, "name": "chest"},
		{"id": 2, "name": "left_arm"}
	];
	
	$scope.selected_doll = null;
});

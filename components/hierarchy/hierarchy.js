app.controller('hierarchy_ctrl', function($scope)
{
	$scope.loaded = function()
	{
		document.querySelector("#hierarchy > .add_btn").addEventListener("change", function(event)
		{
			$scope.add(event.target.files);
		})
	}

	$scope.add = function(files)
	{
		console.log(files);
	}
});

app.controller('hierarchy_ctrl', function($scope)
{
	// $scope.test = $scope.$parent.app_test;

	$scope.loaded = function()
	{
		document.querySelector("#hierarchy > .add_btn").addEventListener("change", function(event)
		{
			$scope.add(event.target.files);
		})
	}

	$scope.add = function(files)
	{
		// console.log(files);

		for (let i = 0; i < files.length; ++i)
		{
			let file_reader = new FileReader();

			file_reader.onload = function()
			{
				let obj =
				{
					"id": i,
					"name": files[i].name,
					"src": file_reader.result,
					"selected": false
				}
				$scope.$parent.$apply(function()
				{
					$scope.$parent.doll_parts.push(obj);
				});
			}
			file_reader.readAsDataURL(files[i]);
		}
	}

	$scope.select = function($event, doll_part) //rm $event
	{
		// console.log($event.currentTarget);
		// console.log(doll_part);
		if ($scope.$parent.selected_doll)
		{
			$scope.$parent.selected_doll.selected = false;
			$scope.$parent.selected_doll = null;
		}
		$scope.$parent.selected_doll = doll_part;
		doll_part.selected = true;
		// console.log($scope.$parent.selected_doll);
	}
});

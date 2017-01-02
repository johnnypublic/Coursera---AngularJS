(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

function LunchCheckController ($scope) {
  $scope.items= "";
  $scope.Result = "",

  $scope.LunchCheck = function () {
  	if ($scope.items == ""){
  		$scope.Result = "Please enter data first"
  	}	else if ($scope.items.split(",").length <=3){
 	 	$scope.Result = "Enjoy!"
  	}  	else {
  	$scope.Result = "Too Much!"
  	}
  };
 
};

})();

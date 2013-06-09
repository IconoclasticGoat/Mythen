mythen.directive('basics', ['$rootScope', 'charService', function($rootScope, charService){
	return{
	    templateUrl: 'templates/basics.html',
	    replace: true,  
	    transclude: false,
	    restrict: 'E',
	    scope: true,
	    controller: function($scope, $element, $attrs) {
	    	$scope.editName = false;

	    	$scope.doneEditing = function(){
	    		$scope.editName = false;

	    		charService.saveCharacters();
	    	};
	    }
	}
}]);
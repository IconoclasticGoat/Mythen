mythen.directive('classes', ['$rootScope', 'charService', function($rootScope, charService){
	return{
	    templateUrl: 'templates/classes.html',
	    replace: true,  
	    transclude: false,
	    restrict: 'E',
	    scope: true,
	    controller: function($scope, $element, $attrs) {
	    	
	    }
	}
}]);
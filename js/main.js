mythen.directive('main', ['$rootScope', 'charService', function($rootScope, charService){
  return{
    templateUrl: 'templates/main.html',
    replace: true,  
    transclude: true,
    restrict: 'E',
    scope: true,
    controller: function($scope, $element, $attrs) {

      charService.loadCharacters();

      $rootScope.character = charService.currentChar;

      $scope.$watch(function(){return charService.currentChar;}, function(data){
        $rootScope.character = charService.currentChar;
      });

    },
    link: function($scope, $element, $attrs) {

    }
  };	
}]);

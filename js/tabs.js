mythen.directive('tabs', ['$rootScope', 'charService', function($rootScope, charService) {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: function($scope, $element) {
      var panes = $scope.panes = [];

      $rootScope.$watch(function(){return $rootScope.character;}, function(newValue, oldValue){
        $scope.showTabs = $rootScope.character != null;
      });

      $scope.backToList = function(){
        charService.currentChar = null;
      }

      $scope.select = function(pane) {
        angular.forEach(panes, function(pane) {
          pane.selected = false;
        });
        pane.selected = true;
      };

      this.addPane = function(pane) {
          panes.push(pane);
      };
    },
    templateUrl: 'templates/tabs.html',
    replace: true
  };
}]);
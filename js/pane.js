mythen.directive('pane', function() {
    return {
      require: '^tabs',
      restrict: 'E',
      transclude: true,
      scope: { title: '@' },
      link: function(scope, element, attrs, tabsCtrl) {
        scope.id = element[0].id;

        tabsCtrl.addPane(scope);
      },
      templateUrl: "templates/pane.html",
      replace: true
    };
  })
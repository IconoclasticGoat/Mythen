mythen.directive('charlist', ['$rootScope', 'charService', function($rootScope, charService){
  return{
    templateUrl: 'templates/charlist.html',
    replace: true,  
    transclude: false,
    restrict: 'E',
    scope: true,
    controller: function($scope, $element, $attrs) {

      $scope.characters = charService.characters;

      $rootScope.$watch(function(){return $rootScope.character;}, function(newValue, oldValue){
        $scope.showList = $rootScope.character == null;
      });

      $scope.newCharacter = function(){
        var newChar = {
          name : "Mythen",
          alignment: "CN",
          race : "Half-Elf",
          classes : [{
            className: "Sorcerer",
            levels: 1
          }]
        };

        charService.characters.push(newChar);
        charService.saveCharacters();
      };

      $scope.selectCharacter = function(character){
        if(characterToDelete != null){
          return;
        }
        charService.currentChar = character;

        //$rootScope.characterSelected = true;
        
        setTimeout(function(){
          $('#basicsPaneLink').trigger('click');
        }, 50);
      };

      var mouseDown = false;
      var characterToDelete = null;
      var deleteVar = null;
      $scope.onMouseDown = function(character){
        mouseDown = true;
        deleteVar = setTimeout(function(){
          if(mouseDown){
            //Long click, so prompt them to delete character.
            characterToDelete = character;

            $("#deleteConfirm").modal('show');
            deleteVar = null;
          }
        }, 1000);
      };

      $scope.deleteCharacter = function(){
        if(characterToDelete != null){
          charService.deleteCharacter(characterToDelete);
          charService.saveCharacters();
          characterToDelete = null;
        }
        $scope.hideConfirmModal();
      };

      $scope.hideConfirmModal = function(){
        $("#deleteConfirm").modal('hide');
      }

      $scope.onMouseUp = function(character){
        mouseDown = false;
        if(deleteVar){
          clearTimeout(deleteVar);
        }
      };

      charService.loadCharacters();

    },
    link: function($scope, $element, $attrs) {

    }
  };	
}]);

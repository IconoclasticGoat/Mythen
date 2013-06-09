mythen.directive('charlist', ['$rootScope', 'charService', function($rootScope, charService){
  return{
    templateUrl: 'templates/charlist.html',
    replace: true,  
    transclude: false,
    restrict: 'E',
    scope: true,
    controller: function($scope, $element, $attrs) {

      $scope.characters = charService.characters;

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
        
        setTimeout(function(){
          $('#basicsPaneLink').trigger('click');
        }, 50);
      };

      var mouseDown = false;
      var characterToDelete = null;
      $scope.onMouseDown = function(character){
        mouseDown = true;
        setTimeout(function(){
          if(mouseDown){
            //Long click, so prompt them to delete character.
            characterToDelete = character;

            $("#deleteConfirm").modal('show');
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
      };

      charService.loadCharacters();

    },
    link: function($scope, $element, $attrs) {

    }
  };	
}]);

mythen.service('charService', ['$rootScope', function($rootScope){
	var charService = {
		characters: [],
		currentChar: null,

		saveCharacters: function() {
			if (charService.storage !== undefined) charService.storage.save({
				key: "characters",
				value: charService.characters,
			}, function(record) {
				// console.log(record);
			});
		},

		loadCharacters: function(){
			if (charService.storage !== undefined) charService.storage.get("characters", function(data) {
				if (data !== null) {
					charService.characters.length = 0;
					for(var c in data.value){
						charService.characters.push(data.value[c]);
					}
				} else {
					console.log('Could not load characters');
				}
			});
		},

		deleteCharacter: function(doomedChar){
			charService.characters.splice(charService.characters.indexOf(doomedChar), 1);
		}
	};
	
	return charService;
}]);

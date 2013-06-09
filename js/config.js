mythen = angular.module('mythen', ['ng']).config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(false).hashPrefix('!');

	var main = {
		template: '<main></main>',
		title: 'Main',
		controller: function() {}
	};

	$routeProvider.when('/', main);

}]).run([ '$rootScope', 'charService', function($rootScope, charService) {
	charService.storage = new Lawnchair({
		name: 'mythen',
		adapter: 'dom'
	}, function() {
		//console.log('Lawnchair successful');
	});
}]);

mythen = angular.module('mythen', ['ng']).config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(false).hashPrefix('!');

	var main = {
		template: '<main></main>',
		title: 'Main',
		controller: function() {}
	};

	var tabs = {
		template: '<tabs></tabs>',
		title: 'Tabs',
		controller: function() {}
	};

	$routeProvider.when('/', main);
	//$routeProvider.when('/main', main);
	$routeProvider.when('/tabs', tabs);

}]).run([ '$rootScope', 'charService', function($rootScope, charService) {
	charService.storage = new Lawnchair({
		name: 'mythen',
		adapter: 'dom'
	}, function() {
		//console.log('Lawnchair successful');
	});
}]);

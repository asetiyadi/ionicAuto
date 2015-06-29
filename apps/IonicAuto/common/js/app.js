var ionicAuto = angular.module('IonicAuto', ['ui.router','ionic']);

ionicAuto.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
	.state('/', {
		url: '/',
		views: {
			'content': {
				templateUrl: 'views/main.html',
				controller: 'MainController'
			}
		}
	})
}])

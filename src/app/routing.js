const url = '';
const abstract = true;

function routing ( $stateProvider, $urlRouterProvider ) {
  $stateProvider.state('eggly', { url, abstract });
	$urlRouterProvider.otherwise('/');
};

routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default routing;
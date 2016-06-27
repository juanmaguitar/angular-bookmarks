import template from './create.tpl.html';
const controller = 'createController';
const controllerAs = '$ctrl';

function routing ($stateProvider) {
  $stateProvider.state('eggly.bookmarks.create', {
    url: '/bookmarks/create',
    views: { '@eggly.bookmarks': { controller, template, controllerAs } }
  });
}

routing.$inject = ['$stateProvider'];

export default routing;

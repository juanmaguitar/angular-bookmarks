import template from './create.tpl.html';
const controller = 'createController';

function routing ($stateProvider) {
  $stateProvider.state('eggly.categories.bookmarks.create', {
    url: '/bookmarks/create',
    views: { '@eggly.categories.bookmarks': { controller, template } }
  });
}

routing.$inject = ['$stateProvider'];

export default routing;
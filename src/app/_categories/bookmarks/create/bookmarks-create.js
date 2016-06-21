angular.module('categories.bookmarks.create', [
  'eggly.models.bookmarks'
])
  .config(function ($stateProvider) {
    $stateProvider
      .state('eggly.categories.bookmarks.create', {
        url: '/bookmarks/create',
        views: {
          '@eggly.categories.bookmarks': {
            templateUrl: 'app/categories/bookmarks/create/create.bookmark.tmpl.html',
            controller: 'CreateBookMarkCtrl',
          }
        }
      })
    ;
  })

  .controller('CreateBookMarkCtrl', )
;

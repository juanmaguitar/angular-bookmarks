class BookmarksCtrl {
	constructor( $scope, $stateParams, bookmarksSrv, categoriesSrv )	{

		categories.setCurrentCategory();

    if ($stateParams.category) {
      categories.getCategoryByName($stateParams.category)
      	.then( (category) => categories.setCurrentCategory(category) )
    }

    bookmarks.getBookmarks()
      .then( (result) => this.bookmarks = result );

    this.getCurrentCategory = categories.getCurrentCategory;
    this.getCurrentCategoryName = categories.getCurrentCategoryName;
    this.isSelectedBookmark = (bookmarkId) => $stateParams.bookmarkId == bookmarkId;
    this.deleteBookmark = bookmarks.deleteBookmark;
	}
}

BookmarksCtrl.$inject = ['$scope', '$stateParams', 'bookmarksService', 'categoriesService'];

export default BookmarksCtrl;

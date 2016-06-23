class BookmarksCtrl {
	constructor( $stateParams, bookmarksSrv, categoriesSrv )	{

    const setCategory =  (category) => categoriesSrv.setCurrentCategory(category);
    const getBookmarksCategory =  (category) => bookmarksSrv.getBookmarksForCategory(category);
    const scopeBookmarks = (bookmarks) => this.bookmarks = bookmarks;
    const currentCategory = $stateParams.category || "";

    if (currentCategory) {
      categoriesSrv.getCategoryByName( $stateParams.category )
      	.then( setCategory )
        .then( getBookmarksCategory.bind(null,currentCategory) )
        .then( scopeBookmarks )
    }
    else {
      bookmarksSrv.getBookmarks().then( scopeBookmarks )
    }

    this.getCurrentCategory = categoriesSrv.getCurrentCategory;
    this.getCurrentCategoryName = categoriesSrv.getCurrentCategoryName;
    this.isSelectedBookmark = (bookmarkId) => $stateParams.bookmarkId == bookmarkId;
    this.deleteBookmark = bookmarksSrv.deleteBookmark;

	}
}

BookmarksCtrl.$inject = [ '$stateParams', 'bookmarksService', 'categoriesService'];

export default BookmarksCtrl;

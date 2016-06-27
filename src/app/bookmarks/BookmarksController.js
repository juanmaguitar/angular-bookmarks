class BookmarksCtrl {
	constructor( $stateParams, bookmarksSrv, categoriesSrv, bookmarks )	{

		const currentCategoryName = $stateParams.category || '';

  	categoriesSrv.getCategoryByName(currentCategoryName)
			.then(categoriesSrv.setCurrentCategory)

		this.bookmarks = bookmarks;

    this.getCurrentCategory = categoriesSrv.getCurrentCategory;
    this.getCurrentCategoryName = categoriesSrv.getCurrentCategoryName;
    this.isSelectedBookmark = (bookmarkId) => $stateParams.bookmarkId == bookmarkId;
    this.deleteBookmark = bookmarksSrv.deleteBookmark;

	}
}

BookmarksCtrl.$inject = [ '$stateParams', 'bookmarksService', 'categoriesService', 'bookmarks'];

export default BookmarksCtrl;

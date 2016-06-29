class BookmarksCtrl {
	constructor( $stateParams, bookmarksSrv, categoriesSrv, bookmarks )	{

		this._bookmarksSrv = bookmarksSrv;
		this._categoriesSrv = categoriesSrv;
		this._$stateParams = $stateParams;

		this.bookmarks = bookmarks;

		console.log ( bookmarks === bookmarksSrv._bookmarks)

		const currentCategoryName = $stateParams.category || '';
		const setCurrentCategory = categoriesSrv.setCurrentCategory.bind(categoriesSrv);

  	categoriesSrv.getCategoryByName(currentCategoryName)
			.then( setCurrentCategory )

	}

	getCurrentCategory() {
		return this._categoriesSrv.getCurrentCategory();
	}

	getCurrentCategoryName() {
		return this._categoriesSrv.getCurrentCategoryName();
	}

	isSelectedBookmark(bookmarkId) {
		return this._$stateParams.bookmarkId == bookmarkId;
	}

  deleteBookmark(bookmark) {
		this.bookmarks = this._bookmarksSrv.deleteBookmark(bookmark);
  }

}

BookmarksCtrl.$inject = [ '$stateParams', 'bookmarksService', 'categoriesService', 'bookmarks'];

export default BookmarksCtrl;

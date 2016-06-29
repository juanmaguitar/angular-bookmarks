class BookmarksCtrl {

	constructor( $rootScope, $stateParams, bookmarksSrv, categoriesSrv )	{

		const currentCategoryName = $stateParams.category || '';
		const setCurrentCategory = categoriesSrv.setCurrentCategory;
		const applyBookmarks = (bookmarks) => this.bookmarks = bookmarks;
		const isSelectedBookmark = (bookmarkId) => $stateParams.bookmarkId == bookmarkId;

		$rootScope.$on('bookmarksChange', (e, data) => this.bookmarks = data );

		bookmarksSrv.getBookmarks()
			.then( applyBookmarks )

  	categoriesSrv.getCategoryByName( currentCategoryName )
			.then( setCurrentCategory )

		this.isSelectedBookmark = isSelectedBookmark;

		this.getCurrentCategory = categoriesSrv.getCurrentCategory;
		this.getCurrentCategoryName = categoriesSrv.getCurrentCategoryName;
		this.deleteBookmark = bookmarksSrv.deleteBookmark;

	}

}

BookmarksCtrl.$inject = [ '$rootScope', '$stateParams', 'bookmarksService', 'categoriesService' ];

export default BookmarksCtrl;

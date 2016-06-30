class BookmarksCtrl {

	constructor( $rootScope, $stateParams, bookmarksSrv, categoriesSrv )	{

		var $ctrl = this;

		$ctrl.isSelectedBookmark = isSelectedBookmark;
		$ctrl.getCurrentCategory = categoriesSrv.getCurrentCategory;
		$ctrl.getCurrentCategoryName = categoriesSrv.getCurrentCategoryName;
		$ctrl.deleteBookmark = bookmarksSrv.deleteBookmark;

		setCategory();
		loadRemoteBookmarks();
		listenToChanges();

		function loadRemoteBookmarks() {
			const applyBookmarks = (bookmarks) => $ctrl.bookmarks = bookmarks;
			bookmarksSrv
				.getBookmarks()
				.then( applyBookmarks );
		}

		function listenToChanges() {
			$rootScope.$on('bookmarksChange', (e, data) => $ctrl.bookmarks = data );
		}

		function setCategory() {
			const currentCategoryName = $stateParams.category || '';
			const setCurrentCategory = categoriesSrv.setCurrentCategory;
			categoriesSrv.getCategoryByName( currentCategoryName )
				.then( setCurrentCategory )
		}

		function isSelectedBookmark(bookmarkId) {
			return $stateParams.bookmarkId == bookmarkId;
		}

	}

}

BookmarksCtrl.$inject = [ '$rootScope', '$stateParams', 'bookmarksService', 'categoriesService' ];

export default BookmarksCtrl;

class BookmarksModel {

	constructor($http, $q, $rootScope) {

		var model = this;
		var urlFetch ='data/bookmarks.json';

		var bookmarks = null;

		model.getBookmarks = getBookmarks;
		model.createBookmark = createBookmark;
		model.updateBookmark = updateBookmark;
		model.deleteBookmark = deleteBookmark;
		model.getBookmarkById = getBookmarkById;
		model.getBookmarksForCategory = getBookmarksForCategory;

		function notifyChanges() {
			$rootScope.$broadcast('bookmarksChange', bookmarks);
		}

		function getBookmarks() {
			const extract = (result) => result.data;
			function cacheBookmarks(result) {
				bookmarks = extract(result);
				return bookmarks;
			}

			// return always a promise
			if (bookmarks) {
				return $q.when(bookmarks);
			}
			else {
				return $http.get( urlFetch )
					.then( cacheBookmarks );
			}
		}

		function createBookmark(bookmark) {
			const id = bookmarks.length;
			const newBookmark = Object.assign( {id}, bookmark )
			bookmarks.push( newBookmark );
			notifyChanges();
		}

		function updateBookmark(bookmark) {
			const hasId = (b) => b.id == bookmark.id;
			let index = bookmarks.findIndex(hasId);
			bookmarks[index] = bookmark;
			notifyChanges();
		}

		function deleteBookmark(bookmark) {
			bookmarks = bookmarks.filter( (b) => b.id !== bookmark.id );
			notifyChanges();
		}

		function getBookmarkById(bookmarkId) {
			const byId = (bookmark) => bookmark.id == parseInt(bookmarkId, 10);
			const getById = (bookmarks) => bookmarks.find( byId );
			return this.getBookmarks().then( getById );
		}

		function getBookmarksForCategory(category) {
			const byCategory = (o) => (o.category == category);
			const filterByCategory = (bookmarks) => bookmarks.filter( byCategory );
			return this.getBookmarks().then( filterByCategory );
		}

	}

}

BookmarksModel.$inject = ['$http', '$q', '$rootScope'];

export default BookmarksModel;

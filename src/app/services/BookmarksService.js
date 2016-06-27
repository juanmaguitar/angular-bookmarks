class BookmarksSrv {

	constructor ($http, $q) {
		this.urlFetch ='data/bookmarks.json';
		this.$http = $http;
		this.$q = $q;
	}

	getBookmarks() {

		const extract = (result) => result.data;
		const cacheBookmarks = (result) => {
			this.bookmarks = extract(result);
			return this.bookmarks;
		}

		// return always a promise
		if (this.bookmarks) {
			return this.$q.when(this.bookmarks);
		}
		else {
			return this.$http.get( this.urlFetch )
				.then(cacheBookmarks);
		}
	};

	createBookmark(bookmark) {
		const id = this.bookmarks.length;
		const newBookmark = Object.assign( {id}, bookmark )
		this.bookmarks.push( newBookmark );
	};

	updateBookmark(bookmark) {
		const hasId = (b) => b.id == bookmark.id;
		let index = this.bookmarks.findIndex(hasId);
		this.bookmarks[index] = bookmark;
	};

	deleteBookmark(bookmark) {
		this.bookmarks = this.bookmarks.filter( (b) => b.id !== bookmark.id )
	};

	getBookmarkById(bookmarkId) {
		const byId = (bookmark) => bookmark.id == parseInt(bookmarkId, 10);
		const getById = (bookmarks) => this.bookmarks.find( byId );
		return this.getBookmarks()
							.then( getById );
	};

	getBookmarksForCategory(category) {
		const byCategory = (o) => (o.category == category);
		const filterByCategory = (bookmarks) => bookmarks.filter( byCategory );
		return this.getBookmarks()
							.then( filterByCategory );
	};

}

BookmarksSrv.$inject = ['$http', '$q'];

export default BookmarksSrv;

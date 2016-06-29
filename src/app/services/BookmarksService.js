class BookmarksSrv {

	constructor ($http, $q) {
		this._urlFetch ='data/bookmarks.json';
		this._$http = $http;
		this._$q = $q;

		this._bookmarks = null;
	}

	// get bookmarks() {
	// 	console.log ("getting bookmarks");
	// 	return this._bookmarks;
	// }

	getBookmarks() {

		const extract = (result) => result.data;
		const cacheBookmarks = (result) => {
			this._bookmarks = extract(result);
			return this._bookmarks;
		}

		// return always a promise
		if (this._bookmarks) {
			return this._$q.when(this._bookmarks);
		}
		else {
			return this._$http.get( this._urlFetch )
				.then( cacheBookmarks.bind(this) );
		}
	}

	createBookmark(bookmark) {
		const id = this._bookmarks.length;
		const newBookmark = Object.assign( {id}, bookmark )
		this._bookmarks.push( newBookmark );
	}

	updateBookmark(bookmark) {
		const hasId = (b) => b.id == bookmark.id;
		let index = this._bookmarks.findIndex(hasId);
		this._bookmarks[index] = bookmark;
	}

	deleteBookmark(bookmark) {
		this._bookmarks = this._bookmarks.filter( (b) => b.id !== bookmark.id )
		console.log ( this._bookmarks.length )
	}

	getBookmarkById(bookmarkId) {
		const byId = (bookmark) => bookmark.id == parseInt(bookmarkId, 10);
		const getById = (bookmarks) => this._bookmarks.find( byId );
		return this.getBookmarks()
							.then( getById );
	}

	getBookmarksForCategory(category) {
		const byCategory = (o) => (o.category == category);
		const filterByCategory = (bookmarks) => bookmarks.filter( byCategory );
		return this.getBookmarks()
							.then( filterByCategory );
	}

}

BookmarksSrv.$inject = ['$http', '$q'];

export default BookmarksSrv;

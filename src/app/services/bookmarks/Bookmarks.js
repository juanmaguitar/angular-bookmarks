class Bookmarks {

  constructor ($http, $q) {
  	this.urlFetch ='data/bookmarks.json';
  	this.$http = $http;
  	this.$q = $q;
  	this.bookmarks = [];
	}

	getBookmarks() {

		const extract = (result) => result.data;
		const cacheBookmarks = (result) => {
			let bookmarks = extract(result);
      return bookmarks;
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

	getBookmarkById(bookmarkId) {
		var deferred = $q.defer();
		const hasId = (bookmark) => bookmark.id === parseInt(bookmarkId, 10);
		const findBookmark = () => _.find(bookmarks, hasId)
		var bookmarkFound = findBookmark(bookmarkId);

    if (this.bookmarks) {
      deferred.resolve( bookmarkFound )
    } else {
      this.getBookmarks()
      	.then( () => deferred.resolve( bookmarkFound ) )
    }
    return deferred.promise;
  };

  createBookmark(bookmark) {
  	const id = this.bookmarks.length;
    this.bookmarks.push( {id} );
  };

  updateBookmark(bookmark) {
    let index = _.findIndex(this.bookmarks, function (b) {
      return b.id == bookmark.id
    });
    this.bookmarks[index] = bookmark;
  };

  deleteBookmark(bookmark) {
    _.remove(this.bookmarks, function (b) {
      return b.id == bookmark.id;
    });
  };

	getBookmarksForCategory = function (category) {
	  _.filter(bookmarks, function (b) {
	    return b.category == category;
	  });
	};

}

Bookmarks.$inject = ['$http', '$q'];

export default Bookmarks;
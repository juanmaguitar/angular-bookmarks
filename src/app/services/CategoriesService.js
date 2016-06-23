class CategoriesSrv {

  constructor ($http, $q) {
  	this.urlFetch = 'data/categories.json';
  	this.$http = $http;
  	this.$q = $q;

		const getCurrentCategory = () => {
			return this.currentCategory;
		};

		const getCategories = () => {
			const cacheCategories = (result) => { 
				const extract = (result) => result.data;
				this.categories = extract(result);
				return this.categories;
			}

			if (this.categories) {
				return this.$q.when( this.categories )
			}
			else {
				return this.$http.get( this.urlFetch ).then( cacheCategories );
			}
		};

		const getCurrentCategoryName = () => {
			return this.currentCategory ? this.currentCategory.name : '';
		};

		const setCurrentCategory = (category) => {
	    this.currentCategory = category;
	    return this.currentCategory;
	  };

		const createCategory = (category) => {
	    category.id = this.categories.length;
	    this.categories.push(category);
	  };

		const deleteCategory = (category) => {
	    _.remove(this.categories, function (c) {
	      return c.id == category.id;
	    });
	  };

		const getCategoryByName = (categoryName) => {
			const hasName = (category) => category.name == categoryName;
			const findCategory = () => _.find(this.categories, hasName)
			const categoryFound = findCategory();
			let deferred = this.$q.defer();

			if (this.categories) {
			  deferred.resolve( categoryFound );
			} else {
			  this.getCategories()
					.then( () => deferred.resolve( categoryFound ) )
			}

			return deferred.promise;

		};

		this.getCurrentCategory = getCurrentCategory;
		this.getCategories = getCategories;
		this.getCurrentCategoryName = getCurrentCategoryName;
		this.setCurrentCategory = setCurrentCategory;
		this.createCategory = createCategory;
		this.deleteCategory = deleteCategory;
		this.getCategoryByName = getCategoryByName;


	}









	// getBookmarkById(bookmarkId) {
	// 	var deferred = $q.defer();
	// 	const hasId = (bookmark) => bookmark.id === parseInt(bookmarkId, 10);
	// 	const findBookmark = (bookmarkId) => _.find(bookmarks, hasId)
	// 	var bookmarkFound = findBookmark(bookmarkId);

 //    if (this.bookmarks) {
 //      deferred.resolve( bookmarkFound )
 //    } else {
 //      this.getBookmarks()
 //      	.then( () => deferred.resolve( bookmarkFound ) )
 //    }
 //    return deferred.promise;
 //  };



}

CategoriesSrv.$inject = ['$http', '$q'];

export default CategoriesSrv;

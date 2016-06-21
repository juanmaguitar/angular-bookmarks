class Categories {

  constructor ($http, $q) {
  	this.urlFetch = 'data/categories.json';
  	this.$http = $http;
  	this.$q = $q;
  	this.categories = [];
		this.currentCategory;
	}

	getCategories() {

		function cacheCategories(result) { 
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

	getCurrentCategory() {
		return this.currentCategory;
	};

	getCurrentCategoryName() {
		return this.currentCategory ? this.currentCategory.name : '';
	};

	setCurrentCategory(category) {
    this.currentCategory = category;
    return this.currentCategory;
  };

	createCategory (category) {
    category.id = this.categories.length;
    this.categories.push(category);
  };

	deleteCategory(category) {
    _.remove(this.categories, function (c) {
      return c.id == category.id;
    });
  };

	getBookmarkById(bookmarkId) {
		var deferred = $q.defer();
		const hasId = (bookmark) => bookmark.id === parseInt(bookmarkId, 10);
		const findBookmark = (bookmarkId) => _.find(bookmarks, hasId)
		var bookmarkFound = findBookmark(bookmarkId);

    if (this.bookmarks) {
      deferred.resolve( bookmarkFound )
    } else {
      this.getBookmarks()
      	.then( () => deferred.resolve( bookmarkFound ) )
    }
    return deferred.promise;
  };

  getCategoryByName(categoryName) {
		var deferred = $q.defer();
		const hasName = (category) => category.name == categoryName;
		const findCategory = (bookmarkId) => _.find(bookmarks, hasId)

		function findCategory() {
		  return _.find(categories, function (c) {
		    return c.name == categoryName;
		  })
		}

		if (categories) {
		  deferred.resolve(findCategory());
		} else {
		  categoriesModel.getCategories().then(function () {
		    deferred.resolve(findCategory());
		  })
		}

		return deferred.promise;
	};





function CategoriesService($http, $q) {
    var URLS = {
        FETCH: 'data/categories.json'
      },
      categories,
      currentCategory,
      categoriesModel = this;




    categoriesModel.getCategoryByName = function (categoryName) {
      var deferred = $q.defer();

      function findCategory() {
        return _.find(categories, function (c) {
          return c.name == categoryName;
        })
      }

      if (categories) {
        deferred.resolve(findCategory());
      } else {
        categoriesModel.getCategories().then(function () {
          deferred.resolve(findCategory());
        })
      }

      return deferred.promise;
    };

  })
;

class CategoriesSrv {

  constructor ($http, $q) {

  	this._urlFetch = 'data/categories.json';
  	this._$http = $http;
  	this._$q = $q;

  	this.categories = null;
  	this.currentCategory = null;

  }

	setCurrentCategory(category) {
    this.currentCategory = category ? category : null;
    return this.currentCategory;
  }

	getCurrentCategory() {
		return this.currentCategory;
	}

	getCategories() {
		const cacheCategories = (result) => { 
			const extract = (result) => result.data;
			this.categories = extract(result);
			return this.categories;
		}

		if (this.categories) {
			return this._$q.when( this.categories )
		}
		else {
			return this._$http.get( this._urlFetch ).then( cacheCategories );
		}
	}

	getCurrentCategoryName() {
		return this.currentCategory ? this.currentCategory.name : '';
	}

	createCategory(category) {
    category.id = this.categories.length;
    this.categories.push(category);
  }

	deleteCategory(category) {
		return this.categories.filter( (c) => c.id !== category.id );
	}

	getCategoryByName(categoryName) {

		const hasName = (category) => category.name == categoryName;
		const findCategory = () => this.categories.find(hasName)
		const categoryFound = findCategory();
		let deferred = this._$q.defer();

		if (this.categories) {
		  deferred.resolve( categoryFound );
		} else {
		  this.getCategories()
				.then( () => deferred.resolve( categoryFound ) )
		}

		return deferred.promise;

	}

}

CategoriesSrv.$inject = ['$http', '$q'];

export default CategoriesSrv;

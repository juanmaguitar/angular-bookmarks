class CategoriesSrv {

  constructor ($http, $q) {

  	this.urlFetch = 'data/categories.json';
  	this.$http = $http;
  	this.$q = $q;

		const getCurrentCategory = () => this.currentCategory;

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

		const deleteCategory = (category) => this.categories.filter( (c) => c.id !== category.id );

		const getCategoryByName = (categoryName) => {

			const hasName = (category) => category.name == categoryName;
			const findCategory = () => this.categories.find(hasName)
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

}

CategoriesSrv.$inject = ['$http', '$q'];

export default CategoriesSrv;

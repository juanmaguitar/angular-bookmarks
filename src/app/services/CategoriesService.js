class CategoriesModel {

	constructor($http, $q) {

		var model = this;
		var urlFetch = 'data/categories.json';

		var categories = null;
	  var currentCategory = null;

	  model.setCurrentCategory = setCurrentCategory;
	  model.getCurrentCategory = getCurrentCategory;
	  model.getCategories = getCategories;
	  model.getCurrentCategoryName = getCurrentCategoryName;
	  model.createCategory = createCategory;
	  model.deleteCategory = deleteCategory;
	  model.getCategoryByName = getCategoryByName;

		function setCurrentCategory(category) {
	    currentCategory = category ? category : null;
	    return currentCategory;
	  }

		function getCurrentCategory() {
			return currentCategory;
		}

		function getCategories() {
			const cacheCategories = (result) => { 
				const extract = (result) => result.data;
				categories = extract(result);
				return categories;
			}

			if (categories) {
				return $q.when( categories )
			}
			else {
				return $http.get( urlFetch ).then( cacheCategories );
			}
		}

		function getCurrentCategoryName() {
			return currentCategory ? currentCategory.name : '';
		}

		function createCategory(category) {
	    category.id = categories.length;
	    categories.push(category);
	  }

		function deleteCategory(category) {
			return categories.filter( (c) => c.id !== category.id );
		}

		function getCategoryByName(categoryName) {

			const hasName = (category) => category.name == categoryName;
			const findCategory = () => categories.find(hasName)
			const categoryFound = findCategory();
			let deferred = $q.defer();

			if (categories) {
			  deferred.resolve( categoryFound );
			} else {
			  model.getCategories()
					.then( () => deferred.resolve( categoryFound ) )
			}

			return deferred.promise;

		}

	}

}

CategoriesModel.$inject = ['$http', '$q'];

export default CategoriesModel;

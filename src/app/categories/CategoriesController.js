class CategoriesCtrl {

	constructor ( categoriesSrv, categories, currentCategory ) {
		this.categories = categories;
		this.isCurrentCategory = (category) => category.name === currentCategory ;
  }

}

CategoriesCtrl.$inject = [ 'categoriesService', 'categories', 'currentCategory' ];

export default CategoriesCtrl;

class CategoriesCtrl {

	constructor ( categoriesSrv ) {

		this.getCurrentCategoryName = categoriesSrv.getCurrentCategoryName;

		categoriesSrv.getCategories()
			.then( (result) => this.categories = result );

		this.isCurrentCategory = (category) => category.name === this.getCurrentCategoryName() ;

  }

}


CategoriesCtrl.$inject = [ 'categoriesService' ];

export default CategoriesCtrl;
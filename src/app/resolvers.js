export const categories = (categoriesSrv) => categoriesSrv.getCategories();
export const currentCategory = (categoriesSrv) => categoriesSrv.getCurrentCategoryName();

categories.$inject = ['categoriesService'];
currentCategory.$inject = ['categoriesService'];

export const categories = (categoriesSrv) => categoriesSrv.getCategories();
export const currentCategory = (categoriesSrv) => categoriesSrv.getCurrentCategoryName();
export const bookmarks = (bookmarksSrv) => bookmarksSrv.getBookmarks();

categories.$inject = ['categoriesService'];
currentCategory.$inject = ['categoriesService'];
bookmarks.$inject = ['bookmarksService'];

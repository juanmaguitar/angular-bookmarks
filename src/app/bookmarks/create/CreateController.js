class CreateCtrl {

	constructor ($stateParams, $state, bookmarksSrv) {

    this.isCreating = false;

		console.log ($stateParams)
		console.log ($state)

    const returnToBookmarks = () => {
      $state.go('eggly.categories.bookmarks', {
        category: $stateParams.category
      })
    }

    const cancelCreating = () => {
      this.isCreating = false;
      this.returnToBookmarks();
    }

    const createBookmark = () => {
      bookmarksSrv.createBookmark(this.newBookmark);
      this.returnToBookmarks();
    }

    const resetForm = () => {
      this.newBookmark = {
        title: '',
        url: '',
        category: $stateParams.category
      };
    }

    const toggleCreating = () => this.isCreating = !this.isCreating;

    this.cancelCreating = cancelCreating;
    this.createBookmark = createBookmark;
		this.returnToBookmarks = returnToBookmarks;

    resetForm();
    toggleCreating();

  }

}

CreateCtrl.$inject = ['$stateParams', '$state', 'bookmarksService'];

export default CreateCtrl;


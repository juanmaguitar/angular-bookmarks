class CreateCtrl {

	constructor ($stateParams, $state, bookmarksSrv) {

    this.isCreating = false;

    function returnToBookmarks() {
      $state.go('eggly.categories.bookmarks', {
        category: $stateParams.category
      })
    }

    function cancelCreating() {
      this.isCreating = false;
      returnToBookmarks();
    }

    function createBookmark() {
      bookmarksSrv.createBookmark(this.newBookmark);
      returnToBookmarks();
    }

    function resetForm() {
      this.newBookmark = {
        title: '',
        url: '',
        category: $stateParams.category
      };
    }

    this.toggleCreating = () => this.isCreating = !this.isCreating;
    this.cancelCreating = cancelCreating;
    this.createBookmark = createBookmark;

    resetForm();
    toggleCreating();

  }

}
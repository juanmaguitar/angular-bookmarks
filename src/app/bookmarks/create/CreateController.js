class CreateCtrl {

	constructor ($stateParams, $state, bookmarksSrv) {

		var $ctrl = this;

    $ctrl.isCreating = false;
    $ctrl.cancelCreating = cancelCreating;
    $ctrl.createBookmark = createBookmark;

    resetForm();
    toggleCreating();


    function toggleCreating() {
    	return $ctrl.isCreating = !$ctrl.isCreating;
    }

    function cancelCreating() {
      $ctrl.isCreating = false;
      returnToBookmarks();
    }

    function createBookmark() {
      bookmarksSrv.createBookmark($ctrl.newBookmark);
      returnToBookmarks();
    }

    function resetForm() {
      return $ctrl.newBookmark = {
        title: '',
        url: '',
        category: $state.globals.params.category
      };
    }

    function returnToBookmarks() {
      $state.go('eggly.bookmarks', {
        category: $state.globals.params.category
      })
    }

  }

}

CreateCtrl.$inject = ['$stateParams', '$state', 'bookmarksService'];

export default CreateCtrl;


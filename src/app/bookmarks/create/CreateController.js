class CreateCtrl {

	constructor ($stateParams, $state, bookmarksSrv) {

		var vm = this;

    vm.isCreating = false;
    vm.cancelCreating = cancelCreating;
    vm.createBookmark = createBookmark;
		vm.returnToBookmarks = returnToBookmarks;

    const toggleCreating = () => vm.isCreating = !vm.isCreating;

    function returnToBookmarks() {
      $state.go('eggly.bookmarks', {
        category: $state.globals.params.category
      })
    }

    function cancelCreating() {
      vm.isCreating = false;
      vm.returnToBookmarks();
    }

    function createBookmark() {
      bookmarksSrv.createBookmark(vm.newBookmark);
      vm.returnToBookmarks();
    }

    function resetForm() {
      return vm.newBookmark = {
        title: '',
        url: '',
        category: $state.globals.params.category
      };
    }

    resetForm();
    toggleCreating();

  }

}

CreateCtrl.$inject = ['$stateParams', '$state', 'bookmarksService'];

export default CreateCtrl;


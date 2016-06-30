class EditCtrl {

	constructor( bookmarksSrv, $stateParams, $state ) {

		var $ctrl = this;

		$ctrl.isEditing = false;
    $ctrl.toggleEditing = () => $ctrl.isEditing = !$ctrl.isEditing;
    $ctrl.cancelEditing = cancelEditing;
    $ctrl.updateBookmark = updateBookmark;

		setEditState();

    function setEditState() {
			bookmarksSrv.getBookmarkById($stateParams.bookmarkId)
    		.then( setState );
    }

    function setState(bookmark){
      if (bookmark) {
        $ctrl.isEditing = true;
        $ctrl.bookmark = bookmark;
        $ctrl.editedBookmark = angular.copy( $ctrl.bookmark );
      }
      else {
        returnToBookmarks();
      }
    }

    function updateBookmark() {
      $ctrl.bookmark = angular.copy($ctrl.editedBookmark);
      bookmarksSrv.updateBookmark($ctrl.editedBookmark);
      returnToBookmarks();
    }

    function cancelEditing() {
      $ctrl.isEditing = false;
      returnToBookmarks();
    }

    function returnToBookmarks() {
      $state.go('eggly.bookmarks', {
        category: $ctrl.bookmark.category
      })
    }

	}

}

EditCtrl.$inject = ['bookmarksService', '$stateParams', '$state'];

export default EditCtrl;

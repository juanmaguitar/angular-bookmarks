class EditCtrl {

	constructor( bookmarksSrv, $stateParams, $state ) {

		this.isEditing = false;

		console.log("EditCtrl...");

    function returnToBookmarks() {
      $state.go('eggly.categories.bookmarks', {
        category: $stateParams.category
      })
    }

    function setEditState(bookmark) {
      if (bookmark) {
        this.isEditing = true;
        this.bookmark = bookmark;
        this.editedBookmark = angular.copy(this.bookmark);
      }
      else {
        returnToBookmarks();
      }
    }

    function updateBookmark() {
      this.bookmark = angular.copy(this.editedBookmark);
      bookmarks.updateBookmark(this.editedBookmark);
      returnToBookmarks();
    }

    function cancelEditing() {
      this.isEditing = false;
      returnToBookmarks();
    }

    bookmarksSrv.getBookmarkById($stateParams.bookmarkId)
    	.then( setEditState );

    this.toggleEditing = () => this.isEditing = !this.isEditing;
    this.cancelEditing = cancelEditing;
    this.updateBookmark = updateBookmark;

	}

}

EditCtrl.$inject = ['bookmarksService', '$stateParams', '$state'];

export default EditCtrl;

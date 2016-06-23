class EditCtrl {

	constructor( bookmarksSrv, $stateParams, $state ) {

		this.isEditing = false;

    const returnToBookmarks = () =>{
      $state.go('eggly.bookmarks', {
        category: this.bookmark.category
      })
    }

    const setEditState = (bookmark) => {
      if (bookmark) {
        this.isEditing = true;
        this.bookmark = bookmark;
        this.editedBookmark = angular.copy(this.bookmark);
      }
      else {
        this.returnToBookmarks();
      }
    }

    const updateBookmark = () => {
      this.bookmark = angular.copy(this.editedBookmark);
      bookmarksSrv.updateBookmark(this.editedBookmark);
      this.returnToBookmarks();
    }

    const cancelEditing = () => {
      this.isEditing = false;
      this.returnToBookmarks();
    }

    bookmarksSrv.getBookmarkById($stateParams.bookmarkId)
    	.then( setEditState );

    this.toggleEditing = () => this.isEditing = !this.isEditing;
    this.cancelEditing = cancelEditing;
    this.updateBookmark = updateBookmark;
    this.setEditState = setEditState;
    this.returnToBookmarks = returnToBookmarks;

	}

}

EditCtrl.$inject = ['bookmarksService', '$stateParams', '$state'];

export default EditCtrl;

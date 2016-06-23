import angular from 'angular';
import ngUiRoute from 'angular-ui-router';

import services  from '../../services';
import EditController from './EditController.js';
import routing from './routing.js';

angular.module('eggly.bookmarks.edit', [ ngUiRoute, services ])
	.controller( 'editController', EditController)
  .config( routing )


export default 'eggly.bookmarks.edit';


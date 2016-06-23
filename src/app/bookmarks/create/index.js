import angular from 'angular';
import ngUiRoute from 'angular-ui-router';

import services  from '../../services';
import CreateController from './CreateController.js';
import routing from './routing.js';


angular.module('eggly.bookmarks.create', [ ngUiRoute, services ])
	.controller( 'createController', CreateController)
  .config( routing )

export default 'eggly.bookmarks.create';


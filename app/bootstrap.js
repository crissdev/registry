import _ from 'lodash';
window._ = _;
import 'angular';
import 'angular-ui-router'
import { default as app } from './app';

angular.bootstrap(document.body, [ app.name ]);

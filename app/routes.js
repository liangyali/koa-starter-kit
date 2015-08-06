"use strict";

import Router from 'koa-router';
import requireDir from 'require-dir';

let controllers = requireDir('./controllers');

export default ()=> {

  var router = new Router({
    prefix: ''
  });

  /**
   * home routes
   */
  router.get('/', controllers.home.get);

  /**
   * other routes
   */

  return router;
};

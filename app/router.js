/*
 * The router defines routes and their corresponding methods in the controller.
 */
/*jslint browser: true*/
define([

  // Libraries.
  'backbone',
  'marionette',

  // Modules.
  'controllers/index'
  
], function(Backbone, Marionette, controller) {
  'use strict';

  var Router = Backbone.Marionette.AppRouter.extend({

    appRoutes: {

      '' : 'index',
      '/login' : 'login',

    }

  });

  return new Router({
    controller: controller
  });

});
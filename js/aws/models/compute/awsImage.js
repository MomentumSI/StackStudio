/*!
 * StackStudio 2.0.0-rc.1 <http://stackstudio.transcendcomputing.com>
 * (c) 2012 Transcend Computing <http://www.transcendcomputing.com/>
 * Available under ASL2 license <http://www.apache.org/licenses/LICENSE-2.0.html>
 */
/*jshint smarttabs:true */
/*global define:true console:true */
define([
        'jquery',
        'backbone',
        'common'
], function( $, Backbone, Common ) {
    'use strict';

    // Aws Image Model
    // ----------

    var Image = Backbone.Model.extend({

        /** Default attributes for image */
        defaults: {
            label: '',
            description: '',
            logo: '',
            region: {}
        }

    });

    return Image;
});

/*!
 * (c) Copyright 2012-2013 Transcend Computing, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*!
 * StackStudio 2.0.0-rc.1 <http://stackstudio.transcendcomputing.com>
 * (c) 2012 Transcend Computing <http://www.transcendcomputing.com/>
 * Available under ASL2 license <http://www.apache.org/licenses/LICENSE-2.0.html>
 */
/*jshint smarttabs:true */
/*global define:true console:true */
define([
        'jquery',
        'underscore',
        'backbone',
        'views/resource/resourceAppView',
        'text!templates/aws/compute/awsSecurityGroupAppTemplate.html',
        '/js/aws/models/compute/awsSecurityGroup.js',
        '/js/aws/collections/compute/awsSecurityGroups.js',
        '/js/aws/views/compute/awsSecurityGroupCreateView.js',
        'icanhaz',
        'common',
        'jquery.dataTables'
], function( $, _, Backbone, ResourceAppView, awsSecurityGroupAppTemplate, Securitygroup, Securitygroups, AwsSecurityGroupCreate, ich, Common ) {
    'use strict';

    // Aws Security Group Application View
    // ------------------------------

    /**
     * AwsSecurityGroupsAppView is UI view list of aws security groups.
     *
     * @name AwsSecurityGroupsAppView
     * @constructor
     * @category Resources
     * @param {Object} initialization object.
     * @returns {Object} Returns a AwsSecurityGroupsAppView instance.
     */
    var AwsSecurityGroupsAppView = ResourceAppView.extend({
        template: _.template(awsSecurityGroupAppTemplate),
        
        modelStringIdentifier: "group_id",
        
        columns: ["group_id", "name", "description"],
        
        idColumnNumber: 0,
        
        model: Securitygroup,
        
        collectionType: Securitygroups,
        
        type: "compute",
        
        subtype: "securitygroups",
        
        CreateView: AwsSecurityGroupCreate,
        
        events: {
            'click .create_button': 'createNew',
            'click #action_menu ul li': 'performAction',
            'click #resource_table tr': "clickOne"
        },

        initialize: function(options) {
            if(options.cred_id) {
                this.credentialId = options.cred_id;
            }
            if(options.region) {
                this.region = options.region;
            }
            this.render();
            
            var securityGroupApp = this;
            Common.vent.on("securityGroupAppRefresh", function() {
                securityGroupApp.render();
            });
        },
        
        toggleActions: function(e) {
            //Disable any needed actions
        },
        
        performAction: function(event) {
            var securityGroup = this.collection.get(this.selectedId);

            switch(event.target.text)
            {
            case "Delete Security Group":
                securityGroup.destroy(this.credentialId, this.region);
                break;
            }
        }
    });
    
    return AwsSecurityGroupsAppView;
});

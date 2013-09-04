/*!
 * StackStudio 2.0.0-rc.1 <http://stackstudio.transcendcomputing.com>
 * (c) 2012 Transcend Computing <http://www.transcendcomputing.com/>
 * Available under ASL2 license <http://www.apache.org/licenses/LICENSE-2.0.html>
 */
/*jshint smarttabs:true */
/*global define:true console:true */
define([
        'models/resource/resourceModel',
        'common'
], function( ResourceModel, Common ) {
    'use strict';

    var Policy = ResourceModel.extend({

        idAttribute: "_id",
        
        defaults: {
            id: '',
            name: ''
        },
        
        create: function(options, credentialId) {
            var url = Common.apiUrl + "/identity/v1/policies?&cred_id=" + credentialId;
            this.sendAjaxAction(url, "POST", {"policy": options}, "policyAppRefresh");
        },
        
        save: function(options,id, orgId) {
            var url = Common.apiUrl + "/identity/v1/policies/"+id+"?&org_id=" + orgId;
            this.sendAjaxAction(url, "POST", {"policy": options}, "policyAppRefresh");
        },
        
        delete: function(credentialId, region) {
            var url = Common.apiUrl + "/identity/v1/policies/" + this.attributes.name + "?_method=DELETE&cred_id=" + credentialId + "&region=" + region;
            this.sendAjaxAction(url, "POST", undefined, "policyAppRefresh");
        }
    });

    return Policy;
});

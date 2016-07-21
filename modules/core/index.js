/* eslint no-underscore-dangle:0 */
/* jslint esnext:true, node:true */
/* globals LACKEY_PATH */
'use strict';

const SUtils = require(LACKEY_PATH).utils,
    _ = require('lodash');

module.exports = () => {
    SUtils
        .waitForAs(
            'modules/core',
            SUtils.cmsMod('cms').controller('user'),
        SUtils.cmsMod('core').model('user')
        )
        .then((UserController, User) => {

            class SymantecUser extends User {
                toJSON() {
                    let json = super.toJSON();
                    json.partner_quarterly_newsletter = this._doc.partner_quarterly_newsletter || false;
                    json.partner_monthly_tech_extra = this._doc.partner_monthly_tech_extra || false;
                    json.sms_notification_service = this._doc.sms_notification_service || false;
                    return json;
                }
            }

            UserController.overrideGetter('model', () => SymantecUser);

            UserController.overrideGetter('tableConfig', (input) => {
                return _.merge(input ? input : {}, {
                    email: {
                        label: 'Email',
                        parse: 'return arguments[1].identities.map(function(i){return i.type === "email" ? i.id : null;}).filter(function(i){return !!i;}).join(", ")'
                    },
                    organisation: {
                        label: 'Organization'
                    },
                    resellerId: {
                        label: 'Reseller ID'
                    },
                    jobFunction: {
                        label: 'Job Function'
                    },
                    createdAt: {
                        label: 'Approved at'
                    },
                    partner_quarterly_newsletter: {
                        label: 'Quarterly Newsletter',
                        parse: 'return arguments[0] ? "Yes" : "No";'
                    },
                    partner_monthly_tech_extra: {
                        label: 'Monthly Tech Extra',
                        parse: 'return arguments[0] ? "Yes" : "No";'
                    },
                    sms_notification_service: {
                        label: 'SMS Notification',
                        parse: 'return arguments[0] ? "Yes" : "No";'
                    }
                });
            });
            UserController.overrideGetter('exportConfig', (input) => {
                return _.merge(input ? input : {}, {
                    email: {
                        label: 'Email',
                        parse: 'return arguments[1].identities.map(function(i){return i.type === "email" ? i.id : null;}).filter(function(i){return !!i;}).join(", ")'
                    },
                    organisation: {
                        label: 'Organization'
                    },
                    resellerId: {
                        label: 'Reseller ID'
                    },
                    jobFunction: {
                        label: 'Job Function'
                    },
                    createdAt: {
                        label: 'Approved at'
                    },
                    partner_quarterly_newsletter: {
                        label: 'Quarterly Newsletter',
                        parse: 'return arguments[0] ? "Yes" : "No";'
                    },
                    partner_monthly_tech_extra: {
                        label: 'Monthly Tech Extra',
                        parse: 'return arguments[0] ? "Yes" : "No";'
                    },
                    sms_notification_service: {
                        label: 'SMS Notification',
                        parse: 'return arguments[0] ? "Yes" : "No";'
                    }
                });
            });
        }, (e) => console.error(e));
};

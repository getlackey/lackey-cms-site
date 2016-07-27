/* jslint node:true */
/* globals process */
'use strict';

module.exports = {
    name: 'lackey.io',
    datasources: {
        pg: {
            'default': {
                dsn: 'postgres://localhost/lackey-cms-site'
            }
        }
    },
    rebuild: {
        sass: true
    },
    yml: {
        drop: true,
        override: [
            'Content',
            'Template',
            'Role',
            'Taxonomy',
            'TaxonomyType',
            'User'
        ]
    },
    cms: { },
    host: 'http://localhost:8880',
    http: {
        port: process.env.PORT || 8880
    }
};

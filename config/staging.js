/* jslint node:true */
'use strict';

module.exports = {
    datasources: {
        pg: {
            'default': {
                dsn: 'postgres://lackey-cms-site-staging:oAB4233tk2SBCYJ@localhost/lackey-cms-site-staging'
            }
        }
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
    host: 'https://staging.lackey.io'
};

/* jslint node:true */
'use strict';

module.exports = {
    datasources: {
        pg: {
            'default': {
                dsn: 'postgres://lackey-cms-site-production:oAB4233tk2SBCYJ@localhost/lackey-cms-site-production'
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
    host: 'https://lackey.io'
};

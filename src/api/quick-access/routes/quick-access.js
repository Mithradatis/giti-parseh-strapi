'use strict';

/**
 * quick-access router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::quick-access.quick-access');

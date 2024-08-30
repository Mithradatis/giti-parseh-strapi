'use strict';

/**
 * quick-access service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::quick-access.quick-access');

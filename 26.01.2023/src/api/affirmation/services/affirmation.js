'use strict';

/**
 * affirmation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::affirmation.affirmation');

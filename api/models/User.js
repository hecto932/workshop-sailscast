/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  attributes: {
  	name: {
  		type: 'string',
  		required: true
  	},
  	title: {
  		type: 'string'
  	},
  	email: {
  		type: 'string',
  		email: true,
  		required: true,
  		unique: true
  	},
  	encryptedPassword: {
  		type: 'string'
  	}
  },
  validationMessages: { //hand for i18n & l10n
        email: {
            required: 'Email is required',
            email: 'Provide valid email address',
            unique: 'Email address is already taken'
        },
        name: {
            required: 'Name is required'
        }
    }
};


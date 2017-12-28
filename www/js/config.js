/*global define */

define(['angular'], function (angular) {
	'use strict';

	return angular.module('app.config', [])
        .constant('dgm_conf', {
            RESPONSE_CODE: {
                SUCCEEDED: 'SUCCEEDED',
                SYSTEM_ERROR: 'SYSTEM_ERROR',
                ACCESS_DENY: 'ACCESS_DENY',
                USER_NOT_FOUND: 'USER_NOT_FOUND',
                ALREADY_EXISTS: 'ALREADY_EXISTS',
                INVALID_PARAMETER: 'INVALID_PARAMETER',
                PASSWORD_MISMATCH: 'PASSWORD_MISMATCH',
                REQUIRED_INPUT_IS_EMPTY: 'REQUIRED_INPUT_IS_EMPTY',
                BANNED_WORD: 'BANNED_WORD',
                DUPLICATE_NAME: 'DUPLICATE_NAME',
                AUTH_REJECT: 'AUTH_REJECT',
                UNDEFINED: 'UNDEFINED',
                ERROR: 'ERROR'
            },
            url : 'http://main.dgmonglab.com',
            imgUrl : 'http://imagecalendar.dgmonglab.com'
        })
});
/*!
 * YoctoJS
 *
 * Copyright(c) 2016-2017 Javanile.org
 * MIT Licensed
 */

const fu = require('nodejs-fu')
    , join = require('path').join

module.exports = function (args) {
    let app = '';

    if (typeof args == "string") {
        app = fu.readFile(args);
    }

    let yoctojs = fu.readFile(join(__dirname, 'yocto.js'))

    return yoctojs + app
};

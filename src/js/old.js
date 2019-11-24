var $ = {

    /**
     *
     * @param app
     */
    run: function (app) {
        var url = location.pathname.substring(1);

        document.addEventListener('DOMContentLoaded', function(e) {
            app[url||'index']()
        })
    },

    /**
     *
     * @param url
     * @param params
     * @param cb
     */
    get: function (url, params, cb) {
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.onreadystatechange = function () {
            if (req.readyState === XMLHttpRequest.DONE) {
                if (req.status === 200) { cb(req.responseText) }
            }
        }
        req.send()
    },

    /**
     *
     * @param event
     * @param id
     * @param cb
     */
    on: function (event, id, cb) {
        document.getElementById(id).addEventListener(event, cb);
    }
};

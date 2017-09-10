/** @namespace string */
module.exports = {
    /**
     * Add basepath if isn't complete
     * Consider a complete url when it contains '//'
     *
     * Examples of complete urls:
     * http://google.com
     * https://google.com
     * //google.com
     *
     * Examples of incomplete urls:
     * google.com
     * google
     * users/create
     * /users/create
     *
     * @param {String} url
     * @param {String} basePath basepath to be used, with protocol
     * @return {String}
     * @memberof string
     *
     */
    resolveUrl: function (url, basePath = "") {
        if (url.indexOf("//") === -1) {
            return basePath + url;
        }

        return url;
    },

    /**
     * Makes string capitalized
     * @param {String} string
     * @return {string}
     * @memberof string
     */
    ucfirst: function (string) {
        "use strict";

        string = string.toLocaleLowerCase();
        return string.charAt(0).toLocaleUpperCase() + string.substr(1);
    },

    /**
     * @see App.helpers.string.ucfirst
     * @param {String} string
     * @return {String}
     * @memberof string
     */
    capitalize: function (string) {
        return this.ucfirst(string);
    },

    /**
     * Makes every word from string capitalized
     * @param {String} string
     * @return {string}
     * @memberof string
     */
    ucwords: function (string) {
        return string.split(" ").map(word => this.ucfirst(word)).join(" ");
    },

    /**
     * Will crop the text to fit the maxLength provided. Will try to not break any words
     * and add "..." on the end of the string
     *
     * @param {String} text
     * @param {Number} maxLength
     * @return {String}
     * @memberof string
     */
    excerpt: function (text, maxLength) {
        if (isNaN(maxLength)) {
            throw new Error("maxLength should be an integer");
        }

        maxLength = parseInt(maxLength, 10);
        if (maxLength < 1) {
            throw new Error("maxLength must be greater than 0");
        }

        if (typeof text !== "string") {
            throw new Error("text must be string");
        }

        if (text.length > maxLength) {
            const exploded = text.split(" ");
            let counter = 0;
            let i = 0;
            let response = [];

            for (i = 0; i < exploded.length; i++) {
                if (counter + exploded[i].length <= maxLength || i === 0) {
                    response.push(exploded[i]);
                    counter += exploded[i].length;
                } else {
                    break;
                }
            }

            text = response.join(" ") + "...";
        }

        return text;
    },

    /**
     * generares a UUID
     * Ref: http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
     * @return {String}
     * @memberof string
     */
    uuid: function () {
        "use strict";

        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            var r = Math.random()*16|0, v = c === "x" ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    },
};

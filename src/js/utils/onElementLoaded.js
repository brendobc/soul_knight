/**
 * Execute a callback if the @code {querySelector} finds an element that matches the @param {selector}
 * @param {string} selector selector of an element
 * @param {function} callback function to execute if certain element exists in the DOM
 */
function onElementLoaded(selector, callback) {
    if(document.querySelector(selector)) {
        callback();
    }
}

export { onElementLoaded }
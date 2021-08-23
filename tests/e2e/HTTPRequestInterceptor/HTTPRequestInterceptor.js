require('cross-fetch/polyfill');

// Get all captured requests as an array.
// Returns array of request objects.

export function interceptAPICalls(){
    browser.setupInterceptor();
}

export function waitUntilInterceptIsMade(timeout){
    browser.pause(timeout);
}

// Get all captured requests as an array.
export function getRequests(){
    return browser.getRequests();
}
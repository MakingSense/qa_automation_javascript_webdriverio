import 'cross-fetch/polyfill';
import * as apiMethods from "testRoot/api/apiConstants";

export async function post(url, header, body){
        const rawResponse = await fetch(url, {
          method: apiMethods.HTTP_POST,
          headers: header,
          body: body
        });
        const content = await rawResponse.json();
        return content;
}

export async function deleteRequest(url, header){
    const rawResponse = await fetch(url, {
            method: apiMethods.HTTP_DELETE,
            headers: header
        });
    const content = await rawResponse.text();
    return content;
}

export async function get(url, header) {
    const rawResponse = await fetch(url, {
        method: apiMethods.HTTP_GET,
        headers: header
    });
    const content = await rawResponse.json();
    return content;
}
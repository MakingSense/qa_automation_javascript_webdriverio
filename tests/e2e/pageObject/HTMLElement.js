class HTMLElement {
  constructor(selector){
    this.me = selector;
  }

  // Validations

  isEnabled(selector){
    return this.isElementPresent(selector) && $(selector).isEnabled();
  }

  isVisible(selector){
    return this.isElementPresent(String(selector)) &&  $(String(selector)).isDisplayed();
  }

  isElementPresent(selector){
    return this.getElements(selector).length > 0;
  }

  // Getters

  getElement(selector){
    this.waitForExist(selector);
    return $(selector);
  }

  getElements(selector){
    return $$(selector);
  }

  getCurrentUrl(){
    return browser.getUrl();
  }

  getCssProperty(selector, cssPropertyName){
    return $(selector).getCSSProperty(cssPropertyName);
  }

  goToUrl(url){
    browser.url(url);
  }



  // Setters

  // Actions

  open() {
      browser.url('/');
  }

  click (selector) {
    if (this.isElementPresent(selector)){
      $(selector).waitForEnabled();
      $(selector).click();
    }
  }


  clearValue(selector){
    $(String(selector)).clearValue();
  }

  takeScreenshot(filepath){
    browser.saveScreenshot(filepath);
  }

  switchBetweenTabs(url){
    browser.switchWindow(url);
    browser.pause(2000)
  }

  /**
   * Waits Sections
   *
   * Official Documentation
   * https://webdriver.io/docs/api/browser/waitUntil/
   *
   * It expects a condition and waits until that condition is fulfilled with a truthy value.
   */

  waitForExist(selector){
    return $(selector).waitForExist({ timeout: 10000 });
  }

  waitWhileElementIsDisplayed(selector, timeout = 9000){
      return browser.waitUntil(function () {
        return $(selector).isDisplayed() === true;
      }, timeout, 'The element was not displayed' + ' selector: '+ selector);
  }

}
module.exports = HTMLElement;

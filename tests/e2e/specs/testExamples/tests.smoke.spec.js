import Browser from 'e2eRoot/pageObject/HTMLElement.js'
import {test, suite} from 'e2eRoot/testsHelper/testingEngineHelper.js';

suite('Suite 1', () => {
  let browser;

  function preconditionToEvaluate(){
      return true;
  }

  beforeAll(() => {
    browser = new Browser();
    browser.open();
  });

  afterAll(() => {
  });

  test('Test 1',
      preconditionToEvaluate,
      () => {
        expect(false).toBe(true);
      }
  );

  test('Test 2',
      preconditionToEvaluate,
      () => {
        expect(false).toBe(true);
      }
  );
});


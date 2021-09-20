import Browser from 'e2eRoot/pageObject/HTMLElement.js'
import {test, suite, xtest} from 'e2eRoot/testsHelper/testingEngineHelper.js';

suite('Suite 2', () => {
    let browser;

    function preconditionToEvaluate(){
        return true;
    }

    beforeAll(() => {
    });

    beforeEach(() => {
      browser = new Browser();
      browser.open();
    });

    afterEach(() => {
    });

    afterAll(() => {
    });

    test('Test 11',
        preconditionToEvaluate,
        () => {
            expect(true).toBe(true);
        }
    );

    test('Test 12',
        preconditionToEvaluate,
        () => {
            expect(false).toBe(true);
        }
    );

    xtest('Test 13',
        preconditionToEvaluate(),
        () => {
            expect(false).toBe(true);
        }
    );
});

import TESTRAIL_PREFIX from 'e2eRoot/constants.js'

export function precondition(functionToEvaluate){
    return functionToEvaluate();
}

export function setAsPending(message = 'Tests are skipped. Not all preconditon were met'){
    pending(message);
}


export function suite(title, testsToExecute, ){
    describe(title, () => {
        testsToExecute();
    });
}

function getTitle(title, testRailID){
    if (testRailID)
        return `${title}_${TESTRAIL_PREFIX}-${testRailID}`
    return title
}

export function test(title,
                     functionToEvaluate,
                     stepsToExecute,
                     testRailId = undefined,
                     pendingMessage = 'Tests are failed. Not all preconditon were met'
                    ){
    console.log(testRailId)
    it(getTitle(title, testRailId), () => {
        if(functionToEvaluate()){
            stepsToExecute();
        }
        else
            pending(pendingMessage);
    });
}

export function xtest(title,
                      functionToEvaluate,
                      stepsToExecute,
                      testRailId = undefined,
                      pendingMessage = 'Tests are skipped. Not all preconditon were met'
                      ){
    it(getTitle(title, testRailId), () => {
      pending('This test is skipped because it needs to be updated/refactored/reviewed');
    });
}


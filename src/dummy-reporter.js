const log = console.log;

module.exports = class DummyReporter { // implements jest/packages/jest-reporters/types/Reporter

  constructor(globalConfig, options) {
    log('\nconstructor');
    this._globalConfig = globalConfig;
    this._options = options;
  }

  onRunStart(
    aggregatedResult, //: AggregatedResult,
    options, //: ReporterOnStartOptions,
  ) { //=> Promise<void> | void;
    log('onRunStart');
  }

  onTestStart(test /*: Test*/) { //=> Promise<void> | void;
    log('onTestStart');
  }

  onTestResult(
    test, //: Test,
    testResult, //: TestResult,
    aggregatedResult, //: AggregatedResult,
  ) { // => Promise<void> | void;
    log('onTestResult');
  }

  onTestFileStart(test /*: Test*/) { //=> Promise<void> | void;
    log('onTestFileStart');
  }

  onTestCaseResult(
    test, //: Test,
    testCaseResult, //: TestCaseResult,
  ) { //=> Promise<void> | void;
    log('onTestCaseResult');
  }

  onTestFileResult(
    test, //: Test,
    testResult, //: TestResult,
    aggregatedResult, //: AggregatedResult,
  ) { // => Promise<void> | void;
    log('onTestFileResult');
  }

  onRunComplete(
    contexts, //: Set<Context>,
    aggregatedResult, //: AggregatedResult,
  ) { //=> Promise<void> | void;
    log('onRunComplete');
  }

  getLastError() { //=> Error | void;
    log('getLastError');
  }
};

# Dummy Jest Repporter

This repository is meant to showcase a question about Jest reporter API.

It contains
* dummy features
* tests of these dummy features and
* a dummy reporter of which event handlers merely write their name to the console.

The [`Reporter` interface](https://github.com/facebook/jest/blob/12a983b57fcd6e26a845bc2b9fa0fd217b95e7aa/packages/jest-reporters/src/types.ts#L59) in jest/packages/jest-reporters/types defines following methods:
* `onRunStart`
* `onTestStart`
* `onTestResult`
* `onTestFileStart`
* `onTestCaseResult`
* `onTestFileResult`
* `onRunComplete`
* `getLastError`

In the course of test run below event handlers are not called at all:
- `onTestStart`
- `onTestResult`

Why are they not called?
Is there some mistake in my code?
Are these event handlers decommissioned, i.e. is `Reporter` interface out of sync with current behavior?

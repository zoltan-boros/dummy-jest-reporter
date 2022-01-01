# Dummy Jest Repporter

This repository is meant to showcase a question about Jest reporter API.

It contains
* dummy features
* tests of these dummy features and
* a dummy reporter whose event handlers merely write their name to the console.

The `Reporter` interface in jest/packages/jest-reporters/types defines following methods:
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

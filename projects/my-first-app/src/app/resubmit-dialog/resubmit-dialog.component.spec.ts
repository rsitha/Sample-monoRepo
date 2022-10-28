import {beforeEach, bootstrap, describe, expect, flush, it, setupModule} from '@angular/catalyst';
import {MatButtonToggleHarness} from '@angular/material/button-toggle/testing';
import {MatButtonHarness} from '@angular/material/button/testing';
import {MatInputHarness} from '@angular/material/input/testing';
import {Timestamp} from 'google-protobuf/google/protobuf/timestamp_pb';

import {getHarness} from '@angular/catalyst';
// import {MAT_DIALOG_DATA, MatDialogRef} from '../material.module';
import {ResubmitDialog, ResubmitDialogData} from './resubmit-dialog.component';
import {Result, SubmissionStatus, TestResult} from '../service_pb';
import {TestModule} from '../test_module';

const dialogData: ResubmitDialogData = {
  newResult: TestResult.RESULT_POSITIVE,
  submittedResults: [
    new Result().setResultId(1).setSubmissionsList([
      new Result.Submission()
          .setExternalEntityName('PWNHealth')
          .setStatus(SubmissionStatus.SUBMISSION_SUCCEEDED)
          .setCreatedAt(
              Timestamp.fromDate(new Date(new Date().getTime() - 300000000))),
      new Result.Submission()
          .setExternalEntityName('PWNHealth')
          .setStatus(SubmissionStatus.SUBMISSION_FAILED)
          .setCreatedAt(
              Timestamp.fromDate(new Date(new Date().getTime() - 200000000))),
      new Result.Submission()
          .setExternalEntityName('PWNHealth')
          .setStatus(SubmissionStatus.SUBMISSION_SUCCEEDED)
          .setCreatedAt(
              Timestamp.fromDate(new Date(new Date().getTime() - 100000000))),
      new Result.Submission()
          .setExternalEntityName('PWNHealth')
          .setStatus(SubmissionStatus.SUBMISSION_SUCCEEDED)
          .setCreatedAt(Timestamp.fromDate(new Date())),
    ]),
  ],
};

describe('Resubmit Dialog Component', () => {
  // TODO: After tests are functioning, try to replicate setupJspb functionality
  // if needed.http:  // b/248104919
  //       source: google3 / javascript / apps / jspb / testing / jasmine.js
  //   beforeEach(setupJspbTesting);

  let submitButton: MatButtonHarness;

  beforeEach.async(async () => {
    setupModule({
      imports: [TestModule],
      // providers: [
      //   {provide: MatDialogRef, useValue: {close: () => {}}},
      //   {provide: MAT_DIALOG_DATA, useValue: dialogData},
      // ],
    });

    bootstrap(ResubmitDialog);

    submitButton =
        await getHarness(MatButtonHarness.with({text: 'STAMP AND  RESUBMIT'}));
  });

  describe('with amended stamp selected', () => {
    let changedFieldsInput: MatInputHarness;

    beforeEach.async(async () => {
      const amendButton: MatButtonToggleHarness =
          await getHarness(MatButtonToggleHarness.with({text: 'Amend'}));
      await amendButton.check();

      changedFieldsInput = await getHarness(MatInputHarness.with({
        placeholder: 'e.g. patient name, birth date',
      }));
    });

    it.async('disables submission if fields changed is empty', async () => {
      await changedFieldsInput.setValue('');
      expect(await submitButton.isDisabled()).toBeTrue();
    });

    it.async('enables submission if fields changed is filled', async () => {
      await changedFieldsInput.setValue('patient address');
      flush();
      expect(await submitButton.isDisabled()).toBeFalse();
    });
  });

  describe('with corrected stamp selected', () => {
    let userInitialsInput: MatInputHarness;

    beforeEach.async(async () => {
      const correctButton: MatButtonToggleHarness =
          await getHarness(MatButtonToggleHarness.with({text: 'Correct'}));
      await correctButton.check();

      userInitialsInput = await getHarness(MatInputHarness.with({
        placeholder: 'e.g. TJB',
      }));
    });

    it.async('disables submission if user initials is empty', async () => {
      expect(await submitButton.isDisabled()).toBeTrue();
    });

    it.async('enables submission if user initials is filled', async () => {
      await userInitialsInput.setValue('TJB');
      flush();
      expect(await submitButton.isDisabled()).toBeFalse();
    });
  });
});

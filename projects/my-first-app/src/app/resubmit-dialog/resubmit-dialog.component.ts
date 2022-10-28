import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {checkExhaustive} from 'projects/common/src/lib/check/check';

import {Result, Stamp, SubmissionStatus, TestResult} from '../service_pb';
import Submission = Result.Submission;

/** Inputs needed for ResubmitDialog */
export interface ResubmitDialogData {
  newResult: TestResult;
  // Results with the same requisiton ID that have been submitted.
  submittedResults: Result[];
}

/** Confirmation dialog for amending and correcting results. */
@Component({
  selector: 'results-resubmit-dialog',
  templateUrl: './resubmit-dialog.component.html',
  styleUrls: ['./resubmit-dialog.component.scss']
})
export class ResubmitDialog {
  readonly Stamp = Stamp;

  readonly submittedResultIds =
      this.data.submittedResults.map(result => result.getResultId());
  readonly previousResult =
      latestPwnhealthSubmittedResult(this.data.submittedResults);
  readonly previousResultDate = formatPtDate(this.previousResult?.date);
  readonly previousResultString = mapResult(this.previousResult?.result);
  readonly newResultString = mapResult(this.data.newResult);
  readonly today = formatPtDate(new Date());

  selectedStamp = Stamp.STAMP_AMENDED;
  changedFields = '';
  userInitials = '';

  get output(): ResubmitDialogOutput|undefined {
    if (this.selectedStamp === Stamp.STAMP_CORRECTED && this.userInitials) {
      return {
        stamp: Stamp.STAMP_CORRECTED,
        userInitials: this.userInitials,
      };
    }
    if (this.selectedStamp === Stamp.STAMP_AMENDED && this.changedFields) {
      return {
        stamp: Stamp.STAMP_AMENDED,
        changedFields: this.changedFields,
      };
    }
    return undefined;
  }

  get canSubmit(): boolean {
    return !!this.output;
  }

  constructor(
      public dialogRef: MatDialogRef<ResubmitDialog>,
      @Inject(MAT_DIALOG_DATA) private readonly data: ResubmitDialogData) {}
}

/** The return type when successfully closing the dialog. */
export type ResubmitDialogOutput = AmendedStamp|CorrectedStamp;

interface AmendedStamp {
  stamp: Stamp.STAMP_AMENDED;
  changedFields: string;
}

interface CorrectedStamp {
  stamp: Stamp.STAMP_CORRECTED;
  userInitials: string;
}

interface PwnhealthSubmittedResult {
  id: number;
  result: TestResult;
  date: Date;
}

function latestPwnhealthSubmittedResult(results: Result[]):
    PwnhealthSubmittedResult|undefined {
  const transformed: PwnhealthSubmittedResult[] =
      results
          .map(
              r => [r.getResultId(), r.getTestResult(),
                    r.getSubmissionsList()
                            .find(isPwnhealthSubmission)
                            ?.getCreatedAt()
                            ?.toDate()] as [number, TestResult, Date | undefined])
          .filter(dateDefined)
          .map(([id, result, date]) => ({id, result, date}));
  if (transformed.length === 0) {
    return undefined;
  }
  const max = transformed.reduce((a, b) => a.date > b.date ? a : b);
  return max;
}

function isPwnhealthSubmission(value: Submission): boolean {
  return value.getExternalEntityName() === 'PWNHealth' &&
      value.getStatus() === SubmissionStatus.SUBMISSION_SUCCEEDED &&
      !!value.getCreatedAt();
}

function dateDefined(tuple: [number, TestResult, Date|undefined]):
    tuple is[number, TestResult, Date] {
  const [, , d] = tuple;
  return !!d;
}

function mapResult(result: TestResult|undefined): string {
  if (result == null) {
    return '';
  }
  // LINT.IfChange
  switch (result) {
    case TestResult.RESULT_UNSPECIFIED:
      return 'Unspecified';
    case TestResult.RESULT_POSITIVE:
      return 'Positive';
    case TestResult.RESULT_NEGATIVE:
      return 'Negative';
    case TestResult.RESULT_INCONCLUSIVE:
      return 'Inconclusive';
    case TestResult.RESULT_NA:
      return 'N/A';
    case TestResult.RESULT_TEST_NOT_PERFORMED:
      return 'Test Not Done';
    case TestResult.RESULT_NEGATIVE_IN_POOL:
      return 'Negative In Pool';
    default:
      checkExhaustive(result);
  }
  // LINT.ThenChange(//depot/google3/lifescience/lims/clinical/results/dal/submitters/phi/phi.go)
}

function formatPtDate(date: Date|undefined): string {
  if (!date) {
    return '';
  }

  // LINT.IfChange
  const mm = `${date.getMonth() + 1}`.padStart(2, '0');
  const dd = `${date.getDate()}`.padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${mm}/${dd}/${yyyy}`;
  // LINT.ThenChange(//depot/google3/lifescience/lims/clinical/results/ui/app/resubmit_dialog.ts)
}

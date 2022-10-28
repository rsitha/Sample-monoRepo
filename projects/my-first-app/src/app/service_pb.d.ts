import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
// import * as pwnhealth_pb from './pwnhealth_pb';
import * as google_protobuf_descriptor_pb from 'google-protobuf/google/protobuf/descriptor_pb';


export class FetchResultsRequest extends jspb.Message {
  getRequisitionId(): string;
  setRequisitionId(value: string): FetchResultsRequest;

  getApprovalStatus(): ApprovalStatus;
  setApprovalStatus(value: ApprovalStatus): FetchResultsRequest;

  getSubmissionStatus(): SubmissionStatus;
  setSubmissionStatus(value: SubmissionStatus): FetchResultsRequest;

  getResultIdOffset(): number;
  setResultIdOffset(value: number): FetchResultsRequest;

  getLimit(): number;
  setLimit(value: number): FetchResultsRequest;

  getBatchId(): string;
  setBatchId(value: string): FetchResultsRequest;

  getKitId(): string;
  setKitId(value: string): FetchResultsRequest;

  getTestResult(): TestResult;
  setTestResult(value: TestResult): FetchResultsRequest;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): FetchResultsRequest;
  hasCreatedAt(): boolean;
  clearCreatedAt(): FetchResultsRequest;

  getApprover(): string;
  setApprover(value: string): FetchResultsRequest;

  getIncludePdfSignedUrl(): boolean;
  setIncludePdfSignedUrl(value: boolean): FetchResultsRequest;

  getCreatedAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAfter(value?: google_protobuf_timestamp_pb.Timestamp): FetchResultsRequest;
  hasCreatedAfter(): boolean;
  clearCreatedAfter(): FetchResultsRequest;

  getWorkbookId(): string;
  setWorkbookId(value: string): FetchResultsRequest;

  getOrderByExpression(): FetchResultsRequest.OrderByExpression | undefined;
  setOrderByExpression(value?: FetchResultsRequest.OrderByExpression): FetchResultsRequest;
  hasOrderByExpression(): boolean;
  clearOrderByExpression(): FetchResultsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchResultsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchResultsRequest): FetchResultsRequest.AsObject;
  static serializeBinaryToWriter(message: FetchResultsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchResultsRequest;
  static deserializeBinaryFromReader(message: FetchResultsRequest, reader: jspb.BinaryReader): FetchResultsRequest;
}

export namespace FetchResultsRequest {
  export type AsObject = {
    requisitionId: string,
    approvalStatus: ApprovalStatus,
    submissionStatus: SubmissionStatus,
    resultIdOffset: number,
    limit: number,
    batchId: string,
    kitId: string,
    testResult: TestResult,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    approver: string,
    includePdfSignedUrl: boolean,
    createdAfter?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    workbookId: string,
    orderByExpression?: FetchResultsRequest.OrderByExpression.AsObject,
  }

  export class OrderByExpression extends jspb.Message {
    getField(): FetchResultsRequest.OrderableField;
    setField(value: FetchResultsRequest.OrderableField): OrderByExpression;

    getDescending(): boolean;
    setDescending(value: boolean): OrderByExpression;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderByExpression.AsObject;
    static toObject(includeInstance: boolean, msg: OrderByExpression): OrderByExpression.AsObject;
    static serializeBinaryToWriter(message: OrderByExpression, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderByExpression;
    static deserializeBinaryFromReader(message: OrderByExpression, reader: jspb.BinaryReader): OrderByExpression;
  }

  export namespace OrderByExpression {
    export type AsObject = {
      field: FetchResultsRequest.OrderableField,
      descending: boolean,
    }
  }


  export enum OrderableField {
    ORDERABLE_FIELD_NADA = 0,
    ORDERABLE_FIELD_REQUISITION_ID = 1,
    ORDERABLE_FIELD_KIT_ID = 2,
    ORDERABLE_FIELD_ASSAY = 3,
    ORDERABLE_FIELD_WORKBOOK_ID = 4,
    ORDERABLE_FIELD_BATCH_ID = 5,
    ORDERABLE_FIELD_WORKBOOK_OPERATOR = 6,
    ORDERABLE_FIELD_TEST_RESULT = 7,
    ORDERABLE_FIELD_TEST_VALIDITY = 8,
    ORDERABLE_FIELD_REPORT = 9,
    ORDERABLE_FIELD_CREATED_AT = 10,
    ORDERABLE_FIELD_COMMENT = 11,
    ORDERABLE_FIELD_STATUS_UPDATED_AT = 12,
    ORDERABLE_FIELD_APPROVER = 13,
  }
}

export class FetchResultsResponse extends jspb.Message {
  getResultsList(): Array<Result>;
  setResultsList(value: Array<Result>): FetchResultsResponse;
  clearResultsList(): FetchResultsResponse;
  addResults(value?: Result, index?: number): Result;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchResultsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchResultsResponse): FetchResultsResponse.AsObject;
  static serializeBinaryToWriter(message: FetchResultsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchResultsResponse;
  static deserializeBinaryFromReader(message: FetchResultsResponse, reader: jspb.BinaryReader): FetchResultsResponse;
}

export namespace FetchResultsResponse {
  export type AsObject = {
    resultsList: Array<Result.AsObject>,
  }
}

export class Result extends jspb.Message {
  getResultId(): number;
  setResultId(value: number): Result;

  getRequisitionId(): string;
  setRequisitionId(value: string): Result;

  getKitId(): string;
  setKitId(value: string): Result;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Result;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Result;

  getAssay(): Assay;
  setAssay(value: Assay): Result;

  getWorkbookId(): number;
  setWorkbookId(value: number): Result;

  getBatchId(): string;
  setBatchId(value: string): Result;

  getWorkbookOperator(): string;
  setWorkbookOperator(value: string): Result;

  getTestValidity(): TestValidity;
  setTestValidity(value: TestValidity): Result;

  getTestResult(): TestResult;
  setTestResult(value: TestResult): Result;

  getReportGcsPath(): string;
  setReportGcsPath(value: string): Result;

  getReportPdfSignedUrl(): string;
  setReportPdfSignedUrl(value: string): Result;

  getReportId(): number;
  setReportId(value: number): Result;

  getComment(): string;
  setComment(value: string): Result;

  getApprovalStatus(): ApprovalStatus;
  setApprovalStatus(value: ApprovalStatus): Result;

  getApprover(): string;
  setApprover(value: string): Result;

  getStatusUpdatedAt(): number;
  setStatusUpdatedAt(value: number): Result;

  getApprovalId(): number;
  setApprovalId(value: number): Result;

  getApprovalManuallyOverriddenBy(): string;
  setApprovalManuallyOverriddenBy(value: string): Result;

  getAccessionedAt(): number;
  setAccessionedAt(value: number): Result;

  getIsSubmitted(): boolean;
  setIsSubmitted(value: boolean): Result;

  getErrorsList(): Array<Result.Error>;
  setErrorsList(value: Array<Result.Error>): Result;
  clearErrorsList(): Result;
  addErrors(value?: Result.Error, index?: number): Result.Error;

  getDevice(): Device;
  setDevice(value: Device): Result;

  getCollectedAt(): number;
  setCollectedAt(value: number): Result;

  getSubmissionsList(): Array<Result.Submission>;
  setSubmissionsList(value: Array<Result.Submission>): Result;
  clearSubmissionsList(): Result;
  addSubmissions(value?: Result.Submission, index?: number): Result.Submission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Result.AsObject;
  static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
  static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Result;
  static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
}

export namespace Result {
  export type AsObject = {
    resultId: number,
    requisitionId: string,
    kitId: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    assay: Assay,
    workbookId: number,
    batchId: string,
    workbookOperator: string,
    testValidity: TestValidity,
    testResult: TestResult,
    reportGcsPath: string,
    reportPdfSignedUrl: string,
    reportId: number,
    comment: string,
    approvalStatus: ApprovalStatus,
    approver: string,
    statusUpdatedAt: number,
    approvalId: number,
    approvalManuallyOverriddenBy: string,
    accessionedAt: number,
    isSubmitted: boolean,
    errorsList: Array<Result.Error.AsObject>,
    device: Device,
    collectedAt: number,
    submissionsList: Array<Result.Submission.AsObject>,
  }

  export class Error extends jspb.Message {
    getExternalEntity(): string;
    setExternalEntity(value: string): Error;

    getMessage(): string;
    setMessage(value: string): Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
  }

  export namespace Error {
    export type AsObject = {
      externalEntity: string,
      message: string,
    }
  }


  export class Submission extends jspb.Message {
    getExternalEntityId(): number;
    setExternalEntityId(value: number): Submission;

    getExternalEntityName(): string;
    setExternalEntityName(value: string): Submission;

    getStatus(): SubmissionStatus;
    setStatus(value: SubmissionStatus): Submission;

    getManuallyOverriddenBy(): string;
    setManuallyOverriddenBy(value: string): Submission;

    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Submission;
    hasCreatedAt(): boolean;
    clearCreatedAt(): Submission;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Submission.AsObject;
    static toObject(includeInstance: boolean, msg: Submission): Submission.AsObject;
    static serializeBinaryToWriter(message: Submission, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Submission;
    static deserializeBinaryFromReader(message: Submission, reader: jspb.BinaryReader): Submission;
  }

  export namespace Submission {
    export type AsObject = {
      externalEntityId: number,
      externalEntityName: string,
      status: SubmissionStatus,
      manuallyOverriddenBy: string,
      createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
  }

}

export class SetApprovalStatusRequest extends jspb.Message {
  getReportId(): number;
  setReportId(value: number): SetApprovalStatusRequest;

  getApprovalStatus(): ApprovalStatus;
  setApprovalStatus(value: ApprovalStatus): SetApprovalStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetApprovalStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetApprovalStatusRequest): SetApprovalStatusRequest.AsObject;
  static serializeBinaryToWriter(message: SetApprovalStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetApprovalStatusRequest;
  static deserializeBinaryFromReader(message: SetApprovalStatusRequest, reader: jspb.BinaryReader): SetApprovalStatusRequest;
}

export namespace SetApprovalStatusRequest {
  export type AsObject = {
    reportId: number,
    approvalStatus: ApprovalStatus,
  }
}

export class SetApprovalStatusResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetApprovalStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetApprovalStatusResponse): SetApprovalStatusResponse.AsObject;
  static serializeBinaryToWriter(message: SetApprovalStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetApprovalStatusResponse;
  static deserializeBinaryFromReader(message: SetApprovalStatusResponse, reader: jspb.BinaryReader): SetApprovalStatusResponse;
}

export namespace SetApprovalStatusResponse {
  export type AsObject = {
  }
}

export class CommentRequest extends jspb.Message {
  getComment(): string;
  setComment(value: string): CommentRequest;

  getReportId(): number;
  setReportId(value: number): CommentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CommentRequest): CommentRequest.AsObject;
  static serializeBinaryToWriter(message: CommentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommentRequest;
  static deserializeBinaryFromReader(message: CommentRequest, reader: jspb.BinaryReader): CommentRequest;
}

export namespace CommentRequest {
  export type AsObject = {
    comment: string,
    reportId: number,
  }
}

export class CommentResponse extends jspb.Message {
  getResult(): Result | undefined;
  setResult(value?: Result): CommentResponse;
  hasResult(): boolean;
  clearResult(): CommentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CommentResponse): CommentResponse.AsObject;
  static serializeBinaryToWriter(message: CommentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommentResponse;
  static deserializeBinaryFromReader(message: CommentResponse, reader: jspb.BinaryReader): CommentResponse;
}

export namespace CommentResponse {
  export type AsObject = {
    result?: Result.AsObject,
  }
}

export class GetResultRequest extends jspb.Message {
  getResultId(): number;
  setResultId(value: number): GetResultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetResultRequest): GetResultRequest.AsObject;
  static serializeBinaryToWriter(message: GetResultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResultRequest;
  static deserializeBinaryFromReader(message: GetResultRequest, reader: jspb.BinaryReader): GetResultRequest;
}

export namespace GetResultRequest {
  export type AsObject = {
    resultId: number,
  }
}

export class GetResultResponse extends jspb.Message {
  getResult(): Result | undefined;
  setResult(value?: Result): GetResultResponse;
  hasResult(): boolean;
  clearResult(): GetResultResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResultResponse): GetResultResponse.AsObject;
  static serializeBinaryToWriter(message: GetResultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResultResponse;
  static deserializeBinaryFromReader(message: GetResultResponse, reader: jspb.BinaryReader): GetResultResponse;
}

export namespace GetResultResponse {
  export type AsObject = {
    result?: Result.AsObject,
  }
}

export class ActionRequest extends jspb.Message {
  getReportIdsList(): Array<number>;
  setReportIdsList(value: Array<number>): ActionRequest;
  clearReportIdsList(): ActionRequest;
  addReportIds(value: number, index?: number): ActionRequest;

  getApprovalStatus(): ApprovalStatus;
  setApprovalStatus(value: ApprovalStatus): ActionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActionRequest): ActionRequest.AsObject;
  static serializeBinaryToWriter(message: ActionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionRequest;
  static deserializeBinaryFromReader(message: ActionRequest, reader: jspb.BinaryReader): ActionRequest;
}

export namespace ActionRequest {
  export type AsObject = {
    reportIdsList: Array<number>,
    approvalStatus: ApprovalStatus,
  }
}

export class ActionResponse extends jspb.Message {
  getReportIdsList(): Array<number>;
  setReportIdsList(value: Array<number>): ActionResponse;
  clearReportIdsList(): ActionResponse;
  addReportIds(value: number, index?: number): ActionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActionResponse): ActionResponse.AsObject;
  static serializeBinaryToWriter(message: ActionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionResponse;
  static deserializeBinaryFromReader(message: ActionResponse, reader: jspb.BinaryReader): ActionResponse;
}

export namespace ActionResponse {
  export type AsObject = {
    reportIdsList: Array<number>,
  }
}

export class ResubmitRequest extends jspb.Message {
  getReportId(): number;
  setReportId(value: number): ResubmitRequest;

  getStamp(): Stamp;
  setStamp(value: Stamp): ResubmitRequest;

  getChangedFields(): string;
  setChangedFields(value: string): ResubmitRequest;

  getUserInitials(): string;
  setUserInitials(value: string): ResubmitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResubmitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResubmitRequest): ResubmitRequest.AsObject;
  static serializeBinaryToWriter(message: ResubmitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResubmitRequest;
  static deserializeBinaryFromReader(message: ResubmitRequest, reader: jspb.BinaryReader): ResubmitRequest;
}

export namespace ResubmitRequest {
  export type AsObject = {
    reportId: number,
    stamp: Stamp,
    changedFields: string,
    userInitials: string,
  }
}

export class ResubmitResponse extends jspb.Message {
  getReportId(): number;
  setReportId(value: number): ResubmitResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResubmitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResubmitResponse): ResubmitResponse.AsObject;
  static serializeBinaryToWriter(message: ResubmitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResubmitResponse;
  static deserializeBinaryFromReader(message: ResubmitResponse, reader: jspb.BinaryReader): ResubmitResponse;
}

export namespace ResubmitResponse {
  export type AsObject = {
    reportId: number,
  }
}

export class PostResultsRequest extends jspb.Message {
  getAssay(): Assay;
  setAssay(value: Assay): PostResultsRequest;

  getWorkbookId(): number;
  setWorkbookId(value: number): PostResultsRequest;

  getWorkbookOperator(): string;
  setWorkbookOperator(value: string): PostResultsRequest;

  getSamplesList(): Array<PostResultsRequest.Sample>;
  setSamplesList(value: Array<PostResultsRequest.Sample>): PostResultsRequest;
  clearSamplesList(): PostResultsRequest;
  addSamples(value?: PostResultsRequest.Sample, index?: number): PostResultsRequest.Sample;

  getDevice(): Device;
  setDevice(value: Device): PostResultsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostResultsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostResultsRequest): PostResultsRequest.AsObject;
  static serializeBinaryToWriter(message: PostResultsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostResultsRequest;
  static deserializeBinaryFromReader(message: PostResultsRequest, reader: jspb.BinaryReader): PostResultsRequest;
}

export namespace PostResultsRequest {
  export type AsObject = {
    assay: Assay,
    workbookId: number,
    workbookOperator: string,
    samplesList: Array<PostResultsRequest.Sample.AsObject>,
    device: Device,
  }

  export class Sample extends jspb.Message {
    getRequisitionId(): string;
    setRequisitionId(value: string): Sample;

    getTestValidity(): TestValidity;
    setTestValidity(value: TestValidity): Sample;

    getTestResult(): TestResult;
    setTestResult(value: TestResult): Sample;

    getAccessionedAt(): number;
    setAccessionedAt(value: number): Sample;

    getComment(): string;
    setComment(value: string): Sample;

    getCollectedAt(): number;
    setCollectedAt(value: number): Sample;

    getKitId(): string;
    setKitId(value: string): Sample;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Sample.AsObject;
    static toObject(includeInstance: boolean, msg: Sample): Sample.AsObject;
    static serializeBinaryToWriter(message: Sample, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Sample;
    static deserializeBinaryFromReader(message: Sample, reader: jspb.BinaryReader): Sample;
  }

  export namespace Sample {
    export type AsObject = {
      requisitionId: string,
      testValidity: TestValidity,
      testResult: TestResult,
      accessionedAt: number,
      comment: string,
      collectedAt: number,
      kitId: string,
    }
  }

}

export class PostResultsResponse extends jspb.Message {
  getResultIdsList(): Array<number>;
  setResultIdsList(value: Array<number>): PostResultsResponse;
  clearResultIdsList(): PostResultsResponse;
  addResultIds(value: number, index?: number): PostResultsResponse;

  getErrorsList(): Array<PostResultsResponse.Error>;
  setErrorsList(value: Array<PostResultsResponse.Error>): PostResultsResponse;
  clearErrorsList(): PostResultsResponse;
  addErrors(value?: PostResultsResponse.Error, index?: number): PostResultsResponse.Error;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostResultsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostResultsResponse): PostResultsResponse.AsObject;
  static serializeBinaryToWriter(message: PostResultsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostResultsResponse;
  static deserializeBinaryFromReader(message: PostResultsResponse, reader: jspb.BinaryReader): PostResultsResponse;
}

export namespace PostResultsResponse {
  export type AsObject = {
    resultIdsList: Array<number>,
    errorsList: Array<PostResultsResponse.Error.AsObject>,
  }

  export class Error extends jspb.Message {
    getRequisitionId(): string;
    setRequisitionId(value: string): Error;

    getMessage(): string;
    setMessage(value: string): Error;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
  }

  export namespace Error {
    export type AsObject = {
      requisitionId: string,
      message: string,
    }
  }

}

export class SubmitRequest extends jspb.Message {
  getResult(): Result | undefined;
  setResult(value?: Result): SubmitRequest;
  hasResult(): boolean;
  clearResult(): SubmitRequest;

  getExternalEntityName(): string;
  setExternalEntityName(value: string): SubmitRequest;

  getExternalEntityId(): number;
  setExternalEntityId(value: number): SubmitRequest;

  getStamp(): Stamp;
  setStamp(value: Stamp): SubmitRequest;

  // getOrder(): pwnhealth_pb.Order | undefined;
  // setOrder(value?: pwnhealth_pb.Order): SubmitRequest;
  hasOrder(): boolean;
  clearOrder(): SubmitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitRequest): SubmitRequest.AsObject;
  static serializeBinaryToWriter(message: SubmitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitRequest;
  static deserializeBinaryFromReader(message: SubmitRequest, reader: jspb.BinaryReader): SubmitRequest;
}

export namespace SubmitRequest {
  export type AsObject = {
    result?: Result.AsObject,
    externalEntityName: string,
    externalEntityId: number,
    stamp: Stamp,
    // order?: pwnhealth_pb.Order.AsObject,
  }
}

export class SubmitResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitResponse): SubmitResponse.AsObject;
  static serializeBinaryToWriter(message: SubmitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitResponse;
  static deserializeBinaryFromReader(message: SubmitResponse, reader: jspb.BinaryReader): SubmitResponse;
}

export namespace SubmitResponse {
  export type AsObject = {
  }
}

export class RetrySubmissionsRequest extends jspb.Message {
  getReportIdsList(): Array<number>;
  setReportIdsList(value: Array<number>): RetrySubmissionsRequest;
  clearReportIdsList(): RetrySubmissionsRequest;
  addReportIds(value: number, index?: number): RetrySubmissionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrySubmissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RetrySubmissionsRequest): RetrySubmissionsRequest.AsObject;
  static serializeBinaryToWriter(message: RetrySubmissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrySubmissionsRequest;
  static deserializeBinaryFromReader(message: RetrySubmissionsRequest, reader: jspb.BinaryReader): RetrySubmissionsRequest;
}

export namespace RetrySubmissionsRequest {
  export type AsObject = {
    reportIdsList: Array<number>,
  }
}

export class RetrySubmissionsResponse extends jspb.Message {
  getExternalEntityNamesList(): Array<string>;
  setExternalEntityNamesList(value: Array<string>): RetrySubmissionsResponse;
  clearExternalEntityNamesList(): RetrySubmissionsResponse;
  addExternalEntityNames(value: string, index?: number): RetrySubmissionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrySubmissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RetrySubmissionsResponse): RetrySubmissionsResponse.AsObject;
  static serializeBinaryToWriter(message: RetrySubmissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrySubmissionsResponse;
  static deserializeBinaryFromReader(message: RetrySubmissionsResponse, reader: jspb.BinaryReader): RetrySubmissionsResponse;
}

export namespace RetrySubmissionsResponse {
  export type AsObject = {
    externalEntityNamesList: Array<string>,
  }
}

export class SetSubmissionStatusRequest extends jspb.Message {
  getReportId(): number;
  setReportId(value: number): SetSubmissionStatusRequest;

  getStatus(): SubmissionStatus;
  setStatus(value: SubmissionStatus): SetSubmissionStatusRequest;

  getExternalEntityNamesList(): Array<string>;
  setExternalEntityNamesList(value: Array<string>): SetSubmissionStatusRequest;
  clearExternalEntityNamesList(): SetSubmissionStatusRequest;
  addExternalEntityNames(value: string, index?: number): SetSubmissionStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSubmissionStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetSubmissionStatusRequest): SetSubmissionStatusRequest.AsObject;
  static serializeBinaryToWriter(message: SetSubmissionStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSubmissionStatusRequest;
  static deserializeBinaryFromReader(message: SetSubmissionStatusRequest, reader: jspb.BinaryReader): SetSubmissionStatusRequest;
}

export namespace SetSubmissionStatusRequest {
  export type AsObject = {
    reportId: number,
    status: SubmissionStatus,
    externalEntityNamesList: Array<string>,
  }
}

export class SetSubmissionStatusResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSubmissionStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetSubmissionStatusResponse): SetSubmissionStatusResponse.AsObject;
  static serializeBinaryToWriter(message: SetSubmissionStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSubmissionStatusResponse;
  static deserializeBinaryFromReader(message: SetSubmissionStatusResponse, reader: jspb.BinaryReader): SetSubmissionStatusResponse;
}

export namespace SetSubmissionStatusResponse {
  export type AsObject = {
  }
}

export class WriteReportPdfRequest extends jspb.Message {
  // getOrder(): pwnhealth_pb.Order | undefined;
  // setOrder(value?: pwnhealth_pb.Order): WriteReportPdfRequest;
  hasOrder(): boolean;
  clearOrder(): WriteReportPdfRequest;

  getKitId(): string;
  setKitId(value: string): WriteReportPdfRequest;

  getTestResult(): TestResult;
  setTestResult(value: TestResult): WriteReportPdfRequest;

  getAssay(): Assay;
  setAssay(value: Assay): WriteReportPdfRequest;

  getCollectedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCollectedAt(value?: google_protobuf_timestamp_pb.Timestamp): WriteReportPdfRequest;
  hasCollectedAt(): boolean;
  clearCollectedAt(): WriteReportPdfRequest;

  getReportedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReportedAt(value?: google_protobuf_timestamp_pb.Timestamp): WriteReportPdfRequest;
  hasReportedAt(): boolean;
  clearReportedAt(): WriteReportPdfRequest;

  getComment(): string;
  setComment(value: string): WriteReportPdfRequest;

  getStamp(): Stamp;
  setStamp(value: Stamp): WriteReportPdfRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteReportPdfRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WriteReportPdfRequest): WriteReportPdfRequest.AsObject;
  static serializeBinaryToWriter(message: WriteReportPdfRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteReportPdfRequest;
  static deserializeBinaryFromReader(message: WriteReportPdfRequest, reader: jspb.BinaryReader): WriteReportPdfRequest;
}

export namespace WriteReportPdfRequest {
  export type AsObject = {
    // order?: pwnhealth_pb.Order.AsObject,
    kitId: string,
    testResult: TestResult,
    assay: Assay,
    collectedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    reportedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    comment: string,
    stamp: Stamp,
  }
}

export class WriteReportPdfResponse extends jspb.Message {
  getGcsPath(): string;
  setGcsPath(value: string): WriteReportPdfResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteReportPdfResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WriteReportPdfResponse): WriteReportPdfResponse.AsObject;
  static serializeBinaryToWriter(message: WriteReportPdfResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteReportPdfResponse;
  static deserializeBinaryFromReader(message: WriteReportPdfResponse, reader: jspb.BinaryReader): WriteReportPdfResponse;
}

export namespace WriteReportPdfResponse {
  export type AsObject = {
    gcsPath: string,
  }
}

export class ResubmitAmendedRequest extends jspb.Message {
  getReportId(): number;
  setReportId(value: number): ResubmitAmendedRequest;

  getComment(): string;
  setComment(value: string): ResubmitAmendedRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResubmitAmendedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResubmitAmendedRequest): ResubmitAmendedRequest.AsObject;
  static serializeBinaryToWriter(message: ResubmitAmendedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResubmitAmendedRequest;
  static deserializeBinaryFromReader(message: ResubmitAmendedRequest, reader: jspb.BinaryReader): ResubmitAmendedRequest;
}

export namespace ResubmitAmendedRequest {
  export type AsObject = {
    reportId: number,
    comment: string,
  }
}

export class ResubmitAmendedResponse extends jspb.Message {
  getResult(): Result | undefined;
  setResult(value?: Result): ResubmitAmendedResponse;
  hasResult(): boolean;
  clearResult(): ResubmitAmendedResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResubmitAmendedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResubmitAmendedResponse): ResubmitAmendedResponse.AsObject;
  static serializeBinaryToWriter(message: ResubmitAmendedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResubmitAmendedResponse;
  static deserializeBinaryFromReader(message: ResubmitAmendedResponse, reader: jspb.BinaryReader): ResubmitAmendedResponse;
}

export namespace ResubmitAmendedResponse {
  export type AsObject = {
    result?: Result.AsObject,
  }
}

export enum ApprovalStatus {
  STATUS_UNSPECIFIED = 0,
  STATUS_APPROVED = 1,
  STATUS_PENDING = 2,
  STATUS_REJECTED = 3,
}
export enum TestValidity {
  VALIDITY_UNSPECIFIED = 0,
  VALIDITY_VALID = 1,
  VALIDITY_INVALID = 2,
}
export enum TestResult {
  RESULT_UNSPECIFIED = 0,
  RESULT_POSITIVE = 1,
  RESULT_NEGATIVE = 2,
  RESULT_INCONCLUSIVE = 3,
  RESULT_NA = 4,
  RESULT_TEST_NOT_PERFORMED = 5,
  RESULT_NEGATIVE_IN_POOL = 6,
}
export enum SubmissionStatus {
  SUBMISSION_UNSPECIFIED = 0,
  SUBMISSION_IN_PROGRESS = 1,
  SUBMISSION_SUCCEEDED = 2,
  SUBMISSION_FAILED = 3,
}
export enum Assay {
  ASSAY_UNSPECIFIED = 0,
  ASSAY_96_WELL_TAQPATH_RT_PCR_COVID_19 = 1,
  ASSAY_384_WELL_TAQPATH_RT_PCR_SINGLE_SAMPLE_COVID_19 = 2,
  ASSAY_384_WELL_TAQPATH_RT_PCR_POOLING_COVID_19 = 3,
  ASSAY_BD_MAX = 4,
  ASSAY_ANTI_SARS_COV_2_SEROLOGY = 5,
}
export enum Device {
  DEVICE_UNSPECIFIED = 0,
  DEVICE_THERMO_FISHER_QS5_THERMO_FISHER_SCIENTIFIC_CORPORATION_MNI = 1,
  DEVICE_THERMO_FISHER_7500_THERMO_FISHER_SCIENTIFIC_CORPORATION_MNI = 2,
  DEVICE_BD_MAX_SYSTEM_BD_MOLECULAR_DIAGNOSTICS = 3,
}
export enum Stamp {
  STAMP_UNSPECIFIED = 0,
  STAMP_AMENDED = 1,
  STAMP_CORRECTED = 2,
}
export enum ErrorCode {
  ERROR_UNSPECIFIED = 0,
  ERROR_EXISTING_NONREJECTED_ON_RESUBMISSION = 1,
  ERROR_EXISTING_UNSUBMITTED_NONREJECTED_ON_RESUBMISSION = 2,
  ERROR_NO_EXISTING_SUBMISSION_ON_RESUBMISSION = 3,
  ERROR_NO_STAMP_ON_RESUBMISSION = 4,
}

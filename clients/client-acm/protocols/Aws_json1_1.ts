import {
  AddTagsToCertificateCommandInput,
  AddTagsToCertificateCommandOutput
} from "../commands/AddTagsToCertificateCommand";
import {
  DeleteCertificateCommandInput,
  DeleteCertificateCommandOutput
} from "../commands/DeleteCertificateCommand";
import {
  DescribeCertificateCommandInput,
  DescribeCertificateCommandOutput
} from "../commands/DescribeCertificateCommand";
import {
  ExportCertificateCommandInput,
  ExportCertificateCommandOutput
} from "../commands/ExportCertificateCommand";
import {
  GetCertificateCommandInput,
  GetCertificateCommandOutput
} from "../commands/GetCertificateCommand";
import {
  ImportCertificateCommandInput,
  ImportCertificateCommandOutput
} from "../commands/ImportCertificateCommand";
import {
  ListCertificatesCommandInput,
  ListCertificatesCommandOutput
} from "../commands/ListCertificatesCommand";
import {
  ListTagsForCertificateCommandInput,
  ListTagsForCertificateCommandOutput
} from "../commands/ListTagsForCertificateCommand";
import {
  RemoveTagsFromCertificateCommandInput,
  RemoveTagsFromCertificateCommandOutput
} from "../commands/RemoveTagsFromCertificateCommand";
import {
  RenewCertificateCommandInput,
  RenewCertificateCommandOutput
} from "../commands/RenewCertificateCommand";
import {
  RequestCertificateCommandInput,
  RequestCertificateCommandOutput
} from "../commands/RequestCertificateCommand";
import {
  ResendValidationEmailCommandInput,
  ResendValidationEmailCommandOutput
} from "../commands/ResendValidationEmailCommand";
import {
  UpdateCertificateOptionsCommandInput,
  UpdateCertificateOptionsCommandOutput
} from "../commands/UpdateCertificateOptionsCommand";
import {
  AddTagsToCertificateRequest,
  CertificateDetail,
  CertificateOptions,
  CertificateStatus,
  CertificateSummary,
  DeleteCertificateRequest,
  DescribeCertificateRequest,
  DescribeCertificateResponse,
  DomainValidation,
  DomainValidationOption,
  ExportCertificateRequest,
  ExportCertificateResponse,
  ExtendedKeyUsage,
  ExtendedKeyUsageName,
  Filters,
  GetCertificateRequest,
  GetCertificateResponse,
  ImportCertificateRequest,
  ImportCertificateResponse,
  InvalidArgsException,
  InvalidArnException,
  InvalidDomainValidationOptionsException,
  InvalidParameterException,
  InvalidStateException,
  InvalidTagException,
  KeyAlgorithm,
  KeyUsage,
  KeyUsageName,
  LimitExceededException,
  ListCertificatesRequest,
  ListCertificatesResponse,
  ListTagsForCertificateRequest,
  ListTagsForCertificateResponse,
  RemoveTagsFromCertificateRequest,
  RenewCertificateRequest,
  RenewalSummary,
  RequestCertificateRequest,
  RequestCertificateResponse,
  RequestInProgressException,
  ResendValidationEmailRequest,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceRecord,
  Tag,
  TagPolicyException,
  TooManyTagsException,
  UpdateCertificateOptionsRequest
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1AddTagsToCertificateCommand(
  input: AddTagsToCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CertificateManager.AddTagsToCertificate";
  let body: any = {};
  const wrappedBody: any = {
    AddTagsToCertificateRequest: serializeAws_json1_1AddTagsToCertificateRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/AddTagsToCertificate",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteCertificateCommand(
  input: DeleteCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CertificateManager.DeleteCertificate";
  let body: any = {};
  const wrappedBody: any = {
    DeleteCertificateRequest: serializeAws_json1_1DeleteCertificateRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteCertificate",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeCertificateCommand(
  input: DescribeCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CertificateManager.DescribeCertificate";
  let body: any = {};
  const wrappedBody: any = {
    DescribeCertificateRequest: serializeAws_json1_1DescribeCertificateRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeCertificate",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ExportCertificateCommand(
  input: ExportCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CertificateManager.ExportCertificate";
  let body: any = {};
  const wrappedBody: any = {
    ExportCertificateRequest: serializeAws_json1_1ExportCertificateRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ExportCertificate",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetCertificateCommand(
  input: GetCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CertificateManager.GetCertificate";
  let body: any = {};
  const wrappedBody: any = {
    GetCertificateRequest: serializeAws_json1_1GetCertificateRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetCertificate",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ImportCertificateCommand(
  input: ImportCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CertificateManager.ImportCertificate";
  let body: any = {};
  const wrappedBody: any = {
    ImportCertificateRequest: serializeAws_json1_1ImportCertificateRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ImportCertificate",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListCertificatesCommand(
  input: ListCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CertificateManager.ListCertificates";
  let body: any = {};
  const wrappedBody: any = {
    ListCertificatesRequest: serializeAws_json1_1ListCertificatesRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListCertificates",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListTagsForCertificateCommand(
  input: ListTagsForCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CertificateManager.ListTagsForCertificate";
  let body: any = {};
  const wrappedBody: any = {
    ListTagsForCertificateRequest: serializeAws_json1_1ListTagsForCertificateRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTagsForCertificate",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1RemoveTagsFromCertificateCommand(
  input: RemoveTagsFromCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CertificateManager.RemoveTagsFromCertificate";
  let body: any = {};
  const wrappedBody: any = {
    RemoveTagsFromCertificateRequest: serializeAws_json1_1RemoveTagsFromCertificateRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RemoveTagsFromCertificate",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1RenewCertificateCommand(
  input: RenewCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CertificateManager.RenewCertificate";
  let body: any = {};
  const wrappedBody: any = {
    RenewCertificateRequest: serializeAws_json1_1RenewCertificateRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RenewCertificate",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1RequestCertificateCommand(
  input: RequestCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CertificateManager.RequestCertificate";
  let body: any = {};
  const wrappedBody: any = {
    RequestCertificateRequest: serializeAws_json1_1RequestCertificateRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RequestCertificate",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ResendValidationEmailCommand(
  input: ResendValidationEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CertificateManager.ResendValidationEmail";
  let body: any = {};
  const wrappedBody: any = {
    ResendValidationEmailRequest: serializeAws_json1_1ResendValidationEmailRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ResendValidationEmail",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateCertificateOptionsCommand(
  input: UpdateCertificateOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CertificateManager.UpdateCertificateOptions";
  let body: any = {};
  const wrappedBody: any = {
    UpdateCertificateOptionsRequest: serializeAws_json1_1UpdateCertificateOptionsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateCertificateOptions",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1AddTagsToCertificateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToCertificateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddTagsToCertificateCommandError(
      output,
      context
    );
  }
  const response: AddTagsToCertificateCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AddTagsToCertificateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToCertificateCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazon.certificatemanager#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazon.certificatemanager#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTagException":
    case "com.amazon.certificatemanager#InvalidTagException":
      response = await deserializeAws_json1_1InvalidTagExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.certificatemanager#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TagPolicyException":
    case "com.amazon.certificatemanager#TagPolicyException":
      response = await deserializeAws_json1_1TagPolicyExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyTagsException":
    case "com.amazon.certificatemanager#TooManyTagsException":
      response = await deserializeAws_json1_1TooManyTagsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.certificatemanager#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteCertificateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteCertificateCommandError(output, context);
  }
  const response: DeleteCertificateCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteCertificateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazon.certificatemanager#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazon.certificatemanager#ResourceInUseException":
      response = await deserializeAws_json1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.certificatemanager#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.certificatemanager#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeCertificateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeCertificateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCertificateResponse(
    data.DescribeCertificateResponse,
    context
  );
  const response: DescribeCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeCertificateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeCertificateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazon.certificatemanager#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.certificatemanager#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.certificatemanager#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ExportCertificateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportCertificateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ExportCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ExportCertificateResponse(
    data.ExportCertificateResponse,
    context
  );
  const response: ExportCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ExportCertificateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ExportCertificateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportCertificateCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazon.certificatemanager#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestInProgressException":
    case "com.amazon.certificatemanager#RequestInProgressException":
      response = await deserializeAws_json1_1RequestInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.certificatemanager#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.certificatemanager#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetCertificateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCertificateResponse(
    data.GetCertificateResponse,
    context
  );
  const response: GetCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCertificateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetCertificateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazon.certificatemanager#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestInProgressException":
    case "com.amazon.certificatemanager#RequestInProgressException":
      response = await deserializeAws_json1_1RequestInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.certificatemanager#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.certificatemanager#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ImportCertificateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCertificateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ImportCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportCertificateResponse(
    data.ImportCertificateResponse,
    context
  );
  const response: ImportCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ImportCertificateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ImportCertificateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCertificateCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazon.certificatemanager#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTagException":
    case "com.amazon.certificatemanager#InvalidTagException":
      response = await deserializeAws_json1_1InvalidTagExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.certificatemanager#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.certificatemanager#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TagPolicyException":
    case "com.amazon.certificatemanager#TagPolicyException":
      response = await deserializeAws_json1_1TagPolicyExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyTagsException":
    case "com.amazon.certificatemanager#TooManyTagsException":
      response = await deserializeAws_json1_1TooManyTagsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.certificatemanager#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListCertificatesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCertificatesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCertificatesResponse(
    data.ListCertificatesResponse,
    context
  );
  const response: ListCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListCertificatesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListCertificatesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCertificatesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgsException":
    case "com.amazon.certificatemanager#InvalidArgsException":
      response = await deserializeAws_json1_1InvalidArgsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.certificatemanager#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListTagsForCertificateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForCertificateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForCertificateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForCertificateResponse(
    data.ListTagsForCertificateResponse,
    context
  );
  const response: ListTagsForCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForCertificateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTagsForCertificateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForCertificateCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazon.certificatemanager#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.certificatemanager#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.certificatemanager#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1RemoveTagsFromCertificateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromCertificateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RemoveTagsFromCertificateCommandError(
      output,
      context
    );
  }
  const response: RemoveTagsFromCertificateCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RemoveTagsFromCertificateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromCertificateCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazon.certificatemanager#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazon.certificatemanager#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTagException":
    case "com.amazon.certificatemanager#InvalidTagException":
      response = await deserializeAws_json1_1InvalidTagExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.certificatemanager#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TagPolicyException":
    case "com.amazon.certificatemanager#TagPolicyException":
      response = await deserializeAws_json1_1TagPolicyExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.certificatemanager#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1RenewCertificateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenewCertificateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RenewCertificateCommandError(output, context);
  }
  const response: RenewCertificateCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RenewCertificateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenewCertificateCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazon.certificatemanager#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.certificatemanager#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.certificatemanager#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1RequestCertificateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestCertificateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RequestCertificateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RequestCertificateResponse(
    data.RequestCertificateResponse,
    context
  );
  const response: RequestCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RequestCertificateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RequestCertificateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestCertificateCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazon.certificatemanager#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDomainValidationOptionsException":
    case "com.amazon.certificatemanager#InvalidDomainValidationOptionsException":
      response = await deserializeAws_json1_1InvalidDomainValidationOptionsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterException":
    case "com.amazon.certificatemanager#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTagException":
    case "com.amazon.certificatemanager#InvalidTagException":
      response = await deserializeAws_json1_1InvalidTagExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.certificatemanager#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TagPolicyException":
    case "com.amazon.certificatemanager#TagPolicyException":
      response = await deserializeAws_json1_1TagPolicyExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyTagsException":
    case "com.amazon.certificatemanager#TooManyTagsException":
      response = await deserializeAws_json1_1TooManyTagsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.certificatemanager#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ResendValidationEmailCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResendValidationEmailCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ResendValidationEmailCommandError(
      output,
      context
    );
  }
  const response: ResendValidationEmailCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ResendValidationEmailCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResendValidationEmailCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazon.certificatemanager#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDomainValidationOptionsException":
    case "com.amazon.certificatemanager#InvalidDomainValidationOptionsException":
      response = await deserializeAws_json1_1InvalidDomainValidationOptionsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidStateException":
    case "com.amazon.certificatemanager#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.certificatemanager#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.certificatemanager#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateCertificateOptionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCertificateOptionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateCertificateOptionsCommandError(
      output,
      context
    );
  }
  const response: UpdateCertificateOptionsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateCertificateOptionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCertificateOptionsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArnException":
    case "com.amazon.certificatemanager#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidStateException":
    case "com.amazon.certificatemanager#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.certificatemanager#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.certificatemanager#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.certificatemanager#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1InvalidArgsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidArgsException> => {
  const deserialized: any = deserializeAws_json1_1InvalidArgsException(
    output.body,
    context
  );
  const contents: InvalidArgsException = {
    __type: "InvalidArgsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidArnExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidArnException> => {
  const deserialized: any = deserializeAws_json1_1InvalidArnException(
    output.body,
    context
  );
  const contents: InvalidArnException = {
    __type: "InvalidArnException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidDomainValidationOptionsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidDomainValidationOptionsException> => {
  const deserialized: any = deserializeAws_json1_1InvalidDomainValidationOptionsException(
    output.body,
    context
  );
  const contents: InvalidDomainValidationOptionsException = {
    __type: "InvalidDomainValidationOptionsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(
    output.body,
    context
  );
  const contents: InvalidParameterException = {
    __type: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidStateExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const deserialized: any = deserializeAws_json1_1InvalidStateException(
    output.body,
    context
  );
  const contents: InvalidStateException = {
    __type: "InvalidStateException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTagExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidTagException> => {
  const deserialized: any = deserializeAws_json1_1InvalidTagException(
    output.body,
    context
  );
  const contents: InvalidTagException = {
    __type: "InvalidTagException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    output.body,
    context
  );
  const contents: LimitExceededException = {
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1RequestInProgressExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<RequestInProgressException> => {
  const deserialized: any = deserializeAws_json1_1RequestInProgressException(
    output.body,
    context
  );
  const contents: RequestInProgressException = {
    __type: "RequestInProgressException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(
    output.body,
    context
  );
  const contents: ResourceInUseException = {
    __type: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    output.body,
    context
  );
  const contents: ResourceNotFoundException = {
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TagPolicyExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TagPolicyException> => {
  const deserialized: any = deserializeAws_json1_1TagPolicyException(
    output.body,
    context
  );
  const contents: TagPolicyException = {
    __type: "TagPolicyException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(
    output.body,
    context
  );
  const contents: TooManyTagsException = {
    __type: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AddTagsToCertificateRequest = (
  input: AddTagsToCertificateRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateArn !== undefined) {
    bodyParams["CertificateArn"] = input.CertificateArn;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CertificateOptions = (
  input: CertificateOptions,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateTransparencyLoggingPreference !== undefined) {
    bodyParams["CertificateTransparencyLoggingPreference"] =
      input.CertificateTransparencyLoggingPreference;
  }
  return bodyParams;
};

const serializeAws_json1_1CertificateStatuses = (
  input: Array<CertificateStatus | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1DeleteCertificateRequest = (
  input: DeleteCertificateRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateArn !== undefined) {
    bodyParams["CertificateArn"] = input.CertificateArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeCertificateRequest = (
  input: DescribeCertificateRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateArn !== undefined) {
    bodyParams["CertificateArn"] = input.CertificateArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DomainList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1DomainValidationOption = (
  input: DomainValidationOption,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  if (input.ValidationDomain !== undefined) {
    bodyParams["ValidationDomain"] = input.ValidationDomain;
  }
  return bodyParams;
};

const serializeAws_json1_1DomainValidationOptionList = (
  input: Array<DomainValidationOption>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1DomainValidationOption(entry, context)
  );
};

const serializeAws_json1_1ExportCertificateRequest = (
  input: ExportCertificateRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateArn !== undefined) {
    bodyParams["CertificateArn"] = input.CertificateArn;
  }
  if (input.Passphrase !== undefined) {
    bodyParams["Passphrase"] = context.base64Encoder(input.Passphrase);
  }
  return bodyParams;
};

const serializeAws_json1_1ExtendedKeyUsageFilterList = (
  input: Array<ExtendedKeyUsageName | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1Filters = (
  input: Filters,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.extendedKeyUsage !== undefined) {
    bodyParams[
      "extendedKeyUsage"
    ] = serializeAws_json1_1ExtendedKeyUsageFilterList(
      input.extendedKeyUsage,
      context
    );
  }
  if (input.keyTypes !== undefined) {
    bodyParams["keyTypes"] = serializeAws_json1_1KeyAlgorithmList(
      input.keyTypes,
      context
    );
  }
  if (input.keyUsage !== undefined) {
    bodyParams["keyUsage"] = serializeAws_json1_1KeyUsageFilterList(
      input.keyUsage,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1GetCertificateRequest = (
  input: GetCertificateRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateArn !== undefined) {
    bodyParams["CertificateArn"] = input.CertificateArn;
  }
  return bodyParams;
};

const serializeAws_json1_1ImportCertificateRequest = (
  input: ImportCertificateRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Certificate !== undefined) {
    bodyParams["Certificate"] = context.base64Encoder(input.Certificate);
  }
  if (input.CertificateArn !== undefined) {
    bodyParams["CertificateArn"] = input.CertificateArn;
  }
  if (input.CertificateChain !== undefined) {
    bodyParams["CertificateChain"] = context.base64Encoder(
      input.CertificateChain
    );
  }
  if (input.PrivateKey !== undefined) {
    bodyParams["PrivateKey"] = context.base64Encoder(input.PrivateKey);
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1KeyAlgorithmList = (
  input: Array<KeyAlgorithm | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1KeyUsageFilterList = (
  input: Array<KeyUsageName | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1ListCertificatesRequest = (
  input: ListCertificatesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateStatuses !== undefined) {
    bodyParams["CertificateStatuses"] = serializeAws_json1_1CertificateStatuses(
      input.CertificateStatuses,
      context
    );
  }
  if (input.Includes !== undefined) {
    bodyParams["Includes"] = serializeAws_json1_1Filters(
      input.Includes,
      context
    );
  }
  if (input.MaxItems !== undefined) {
    bodyParams["MaxItems"] = input.MaxItems;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsForCertificateRequest = (
  input: ListTagsForCertificateRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateArn !== undefined) {
    bodyParams["CertificateArn"] = input.CertificateArn;
  }
  return bodyParams;
};

const serializeAws_json1_1RemoveTagsFromCertificateRequest = (
  input: RemoveTagsFromCertificateRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateArn !== undefined) {
    bodyParams["CertificateArn"] = input.CertificateArn;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1RenewCertificateRequest = (
  input: RenewCertificateRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateArn !== undefined) {
    bodyParams["CertificateArn"] = input.CertificateArn;
  }
  return bodyParams;
};

const serializeAws_json1_1RequestCertificateRequest = (
  input: RequestCertificateRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  if (input.DomainValidationOptions !== undefined) {
    bodyParams[
      "DomainValidationOptions"
    ] = serializeAws_json1_1DomainValidationOptionList(
      input.DomainValidationOptions,
      context
    );
  }
  if (input.IdempotencyToken !== undefined) {
    bodyParams["IdempotencyToken"] = input.IdempotencyToken;
  }
  if (input.Options !== undefined) {
    bodyParams["Options"] = serializeAws_json1_1CertificateOptions(
      input.Options,
      context
    );
  }
  if (input.SubjectAlternativeNames !== undefined) {
    bodyParams["SubjectAlternativeNames"] = serializeAws_json1_1DomainList(
      input.SubjectAlternativeNames,
      context
    );
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  if (input.ValidationMethod !== undefined) {
    bodyParams["ValidationMethod"] = input.ValidationMethod;
  }
  return bodyParams;
};

const serializeAws_json1_1ResendValidationEmailRequest = (
  input: ResendValidationEmailRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateArn !== undefined) {
    bodyParams["CertificateArn"] = input.CertificateArn;
  }
  if (input.Domain !== undefined) {
    bodyParams["Domain"] = input.Domain;
  }
  if (input.ValidationDomain !== undefined) {
    bodyParams["ValidationDomain"] = input.ValidationDomain;
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1UpdateCertificateOptionsRequest = (
  input: UpdateCertificateOptionsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateArn !== undefined) {
    bodyParams["CertificateArn"] = input.CertificateArn;
  }
  if (input.Options !== undefined) {
    bodyParams["Options"] = serializeAws_json1_1CertificateOptions(
      input.Options,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_json1_1CertificateDetail = (
  output: any,
  context: __SerdeContext
): CertificateDetail => {
  let contents: any = {
    __type: "CertificateDetail",
    CertificateArn: undefined,
    CertificateAuthorityArn: undefined,
    CreatedAt: undefined,
    DomainName: undefined,
    DomainValidationOptions: undefined,
    ExtendedKeyUsages: undefined,
    FailureReason: undefined,
    ImportedAt: undefined,
    InUseBy: undefined,
    IssuedAt: undefined,
    Issuer: undefined,
    KeyAlgorithm: undefined,
    KeyUsages: undefined,
    NotAfter: undefined,
    NotBefore: undefined,
    Options: undefined,
    RenewalEligibility: undefined,
    RenewalSummary: undefined,
    RevocationReason: undefined,
    RevokedAt: undefined,
    Serial: undefined,
    SignatureAlgorithm: undefined,
    Status: undefined,
    Subject: undefined,
    SubjectAlternativeNames: undefined,
    Type: undefined
  };
  if (output.CertificateArn !== undefined) {
    contents.CertificateArn = output.CertificateArn;
  }
  if (output.CertificateAuthorityArn !== undefined) {
    contents.CertificateAuthorityArn = output.CertificateAuthorityArn;
  }
  if (output.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(
      output.CreatedAt % 1 != 0
        ? Math.round(output.CreatedAt * 1000)
        : output.CreatedAt
    );
  }
  if (output.DomainName !== undefined) {
    contents.DomainName = output.DomainName;
  }
  if (output.DomainValidationOptions !== undefined) {
    contents.DomainValidationOptions = deserializeAws_json1_1DomainValidationList(
      output.DomainValidationOptions,
      context
    );
  }
  if (output.ExtendedKeyUsages !== undefined) {
    contents.ExtendedKeyUsages = deserializeAws_json1_1ExtendedKeyUsageList(
      output.ExtendedKeyUsages,
      context
    );
  }
  if (output.FailureReason !== undefined) {
    contents.FailureReason = output.FailureReason;
  }
  if (output.ImportedAt !== undefined) {
    contents.ImportedAt = new Date(
      output.ImportedAt % 1 != 0
        ? Math.round(output.ImportedAt * 1000)
        : output.ImportedAt
    );
  }
  if (output.InUseBy !== undefined) {
    contents.InUseBy = deserializeAws_json1_1InUseList(output.InUseBy, context);
  }
  if (output.IssuedAt !== undefined) {
    contents.IssuedAt = new Date(
      output.IssuedAt % 1 != 0
        ? Math.round(output.IssuedAt * 1000)
        : output.IssuedAt
    );
  }
  if (output.Issuer !== undefined) {
    contents.Issuer = output.Issuer;
  }
  if (output.KeyAlgorithm !== undefined) {
    contents.KeyAlgorithm = output.KeyAlgorithm;
  }
  if (output.KeyUsages !== undefined) {
    contents.KeyUsages = deserializeAws_json1_1KeyUsageList(
      output.KeyUsages,
      context
    );
  }
  if (output.NotAfter !== undefined) {
    contents.NotAfter = new Date(
      output.NotAfter % 1 != 0
        ? Math.round(output.NotAfter * 1000)
        : output.NotAfter
    );
  }
  if (output.NotBefore !== undefined) {
    contents.NotBefore = new Date(
      output.NotBefore % 1 != 0
        ? Math.round(output.NotBefore * 1000)
        : output.NotBefore
    );
  }
  if (output.Options !== undefined) {
    contents.Options = deserializeAws_json1_1CertificateOptions(
      output.Options,
      context
    );
  }
  if (output.RenewalEligibility !== undefined) {
    contents.RenewalEligibility = output.RenewalEligibility;
  }
  if (output.RenewalSummary !== undefined) {
    contents.RenewalSummary = deserializeAws_json1_1RenewalSummary(
      output.RenewalSummary,
      context
    );
  }
  if (output.RevocationReason !== undefined) {
    contents.RevocationReason = output.RevocationReason;
  }
  if (output.RevokedAt !== undefined) {
    contents.RevokedAt = new Date(
      output.RevokedAt % 1 != 0
        ? Math.round(output.RevokedAt * 1000)
        : output.RevokedAt
    );
  }
  if (output.Serial !== undefined) {
    contents.Serial = output.Serial;
  }
  if (output.SignatureAlgorithm !== undefined) {
    contents.SignatureAlgorithm = output.SignatureAlgorithm;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  if (output.Subject !== undefined) {
    contents.Subject = output.Subject;
  }
  if (output.SubjectAlternativeNames !== undefined) {
    contents.SubjectAlternativeNames = deserializeAws_json1_1DomainList(
      output.SubjectAlternativeNames,
      context
    );
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1CertificateOptions = (
  output: any,
  context: __SerdeContext
): CertificateOptions => {
  let contents: any = {
    __type: "CertificateOptions",
    CertificateTransparencyLoggingPreference: undefined
  };
  if (output.CertificateTransparencyLoggingPreference !== undefined) {
    contents.CertificateTransparencyLoggingPreference =
      output.CertificateTransparencyLoggingPreference;
  }
  return contents;
};

const deserializeAws_json1_1CertificateSummary = (
  output: any,
  context: __SerdeContext
): CertificateSummary => {
  let contents: any = {
    __type: "CertificateSummary",
    CertificateArn: undefined,
    DomainName: undefined
  };
  if (output.CertificateArn !== undefined) {
    contents.CertificateArn = output.CertificateArn;
  }
  if (output.DomainName !== undefined) {
    contents.DomainName = output.DomainName;
  }
  return contents;
};

const deserializeAws_json1_1CertificateSummaryList = (
  output: any,
  context: __SerdeContext
): Array<CertificateSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CertificateSummary(entry, context)
  );
};

const deserializeAws_json1_1DescribeCertificateResponse = (
  output: any,
  context: __SerdeContext
): DescribeCertificateResponse => {
  let contents: any = {
    __type: "DescribeCertificateResponse",
    Certificate: undefined
  };
  if (output.Certificate !== undefined) {
    contents.Certificate = deserializeAws_json1_1CertificateDetail(
      output.Certificate,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DomainList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DomainValidation = (
  output: any,
  context: __SerdeContext
): DomainValidation => {
  let contents: any = {
    __type: "DomainValidation",
    DomainName: undefined,
    ResourceRecord: undefined,
    ValidationDomain: undefined,
    ValidationEmails: undefined,
    ValidationMethod: undefined,
    ValidationStatus: undefined
  };
  if (output.DomainName !== undefined) {
    contents.DomainName = output.DomainName;
  }
  if (output.ResourceRecord !== undefined) {
    contents.ResourceRecord = deserializeAws_json1_1ResourceRecord(
      output.ResourceRecord,
      context
    );
  }
  if (output.ValidationDomain !== undefined) {
    contents.ValidationDomain = output.ValidationDomain;
  }
  if (output.ValidationEmails !== undefined) {
    contents.ValidationEmails = deserializeAws_json1_1ValidationEmailList(
      output.ValidationEmails,
      context
    );
  }
  if (output.ValidationMethod !== undefined) {
    contents.ValidationMethod = output.ValidationMethod;
  }
  if (output.ValidationStatus !== undefined) {
    contents.ValidationStatus = output.ValidationStatus;
  }
  return contents;
};

const deserializeAws_json1_1DomainValidationList = (
  output: any,
  context: __SerdeContext
): Array<DomainValidation> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DomainValidation(entry, context)
  );
};

const deserializeAws_json1_1ExportCertificateResponse = (
  output: any,
  context: __SerdeContext
): ExportCertificateResponse => {
  let contents: any = {
    __type: "ExportCertificateResponse",
    Certificate: undefined,
    CertificateChain: undefined,
    PrivateKey: undefined
  };
  if (output.Certificate !== undefined) {
    contents.Certificate = output.Certificate;
  }
  if (output.CertificateChain !== undefined) {
    contents.CertificateChain = output.CertificateChain;
  }
  if (output.PrivateKey !== undefined) {
    contents.PrivateKey = output.PrivateKey;
  }
  return contents;
};

const deserializeAws_json1_1ExtendedKeyUsage = (
  output: any,
  context: __SerdeContext
): ExtendedKeyUsage => {
  let contents: any = {
    __type: "ExtendedKeyUsage",
    Name: undefined,
    OID: undefined
  };
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.OID !== undefined) {
    contents.OID = output.OID;
  }
  return contents;
};

const deserializeAws_json1_1ExtendedKeyUsageList = (
  output: any,
  context: __SerdeContext
): Array<ExtendedKeyUsage> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ExtendedKeyUsage(entry, context)
  );
};

const deserializeAws_json1_1GetCertificateResponse = (
  output: any,
  context: __SerdeContext
): GetCertificateResponse => {
  let contents: any = {
    __type: "GetCertificateResponse",
    Certificate: undefined,
    CertificateChain: undefined
  };
  if (output.Certificate !== undefined) {
    contents.Certificate = output.Certificate;
  }
  if (output.CertificateChain !== undefined) {
    contents.CertificateChain = output.CertificateChain;
  }
  return contents;
};

const deserializeAws_json1_1ImportCertificateResponse = (
  output: any,
  context: __SerdeContext
): ImportCertificateResponse => {
  let contents: any = {
    __type: "ImportCertificateResponse",
    CertificateArn: undefined
  };
  if (output.CertificateArn !== undefined) {
    contents.CertificateArn = output.CertificateArn;
  }
  return contents;
};

const deserializeAws_json1_1InUseList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1InvalidArgsException = (
  output: any,
  context: __SerdeContext
): InvalidArgsException => {
  let contents: any = {
    __type: "InvalidArgsException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidArnException = (
  output: any,
  context: __SerdeContext
): InvalidArnException => {
  let contents: any = {
    __type: "InvalidArnException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidDomainValidationOptionsException = (
  output: any,
  context: __SerdeContext
): InvalidDomainValidationOptionsException => {
  let contents: any = {
    __type: "InvalidDomainValidationOptionsException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  let contents: any = {
    __type: "InvalidParameterException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidStateException = (
  output: any,
  context: __SerdeContext
): InvalidStateException => {
  let contents: any = {
    __type: "InvalidStateException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidTagException = (
  output: any,
  context: __SerdeContext
): InvalidTagException => {
  let contents: any = {
    __type: "InvalidTagException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1KeyUsage = (
  output: any,
  context: __SerdeContext
): KeyUsage => {
  let contents: any = {
    __type: "KeyUsage",
    Name: undefined
  };
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1KeyUsageList = (
  output: any,
  context: __SerdeContext
): Array<KeyUsage> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1KeyUsage(entry, context)
  );
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ListCertificatesResponse = (
  output: any,
  context: __SerdeContext
): ListCertificatesResponse => {
  let contents: any = {
    __type: "ListCertificatesResponse",
    CertificateSummaryList: undefined,
    NextToken: undefined
  };
  if (output.CertificateSummaryList !== undefined) {
    contents.CertificateSummaryList = deserializeAws_json1_1CertificateSummaryList(
      output.CertificateSummaryList,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForCertificateResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForCertificateResponse => {
  let contents: any = {
    __type: "ListTagsForCertificateResponse",
    Tags: undefined
  };
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1RenewalSummary = (
  output: any,
  context: __SerdeContext
): RenewalSummary => {
  let contents: any = {
    __type: "RenewalSummary",
    DomainValidationOptions: undefined,
    RenewalStatus: undefined,
    RenewalStatusReason: undefined,
    UpdatedAt: undefined
  };
  if (output.DomainValidationOptions !== undefined) {
    contents.DomainValidationOptions = deserializeAws_json1_1DomainValidationList(
      output.DomainValidationOptions,
      context
    );
  }
  if (output.RenewalStatus !== undefined) {
    contents.RenewalStatus = output.RenewalStatus;
  }
  if (output.RenewalStatusReason !== undefined) {
    contents.RenewalStatusReason = output.RenewalStatusReason;
  }
  if (output.UpdatedAt !== undefined) {
    contents.UpdatedAt = new Date(
      output.UpdatedAt % 1 != 0
        ? Math.round(output.UpdatedAt * 1000)
        : output.UpdatedAt
    );
  }
  return contents;
};

const deserializeAws_json1_1RequestCertificateResponse = (
  output: any,
  context: __SerdeContext
): RequestCertificateResponse => {
  let contents: any = {
    __type: "RequestCertificateResponse",
    CertificateArn: undefined
  };
  if (output.CertificateArn !== undefined) {
    contents.CertificateArn = output.CertificateArn;
  }
  return contents;
};

const deserializeAws_json1_1RequestInProgressException = (
  output: any,
  context: __SerdeContext
): RequestInProgressException => {
  let contents: any = {
    __type: "RequestInProgressException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceInUseException = (
  output: any,
  context: __SerdeContext
): ResourceInUseException => {
  let contents: any = {
    __type: "ResourceInUseException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceRecord = (
  output: any,
  context: __SerdeContext
): ResourceRecord => {
  let contents: any = {
    __type: "ResourceRecord",
    Name: undefined,
    Type: undefined,
    Value: undefined
  };
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TagPolicyException = (
  output: any,
  context: __SerdeContext
): TagPolicyException => {
  let contents: any = {
    __type: "TagPolicyException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1TooManyTagsException = (
  output: any,
  context: __SerdeContext
): TooManyTagsException => {
  let contents: any = {
    __type: "TooManyTagsException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ValidationEmailList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
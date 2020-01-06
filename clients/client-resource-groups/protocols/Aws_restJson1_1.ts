import {
  CreateGroupCommandInput,
  CreateGroupCommandOutput
} from "../commands/CreateGroupCommand";
import {
  DeleteGroupCommandInput,
  DeleteGroupCommandOutput
} from "../commands/DeleteGroupCommand";
import {
  GetGroupCommandInput,
  GetGroupCommandOutput
} from "../commands/GetGroupCommand";
import {
  GetGroupQueryCommandInput,
  GetGroupQueryCommandOutput
} from "../commands/GetGroupQueryCommand";
import {
  GetTagsCommandInput,
  GetTagsCommandOutput
} from "../commands/GetTagsCommand";
import {
  ListGroupResourcesCommandInput,
  ListGroupResourcesCommandOutput
} from "../commands/ListGroupResourcesCommand";
import {
  ListGroupsCommandInput,
  ListGroupsCommandOutput
} from "../commands/ListGroupsCommand";
import {
  SearchResourcesCommandInput,
  SearchResourcesCommandOutput
} from "../commands/SearchResourcesCommand";
import { TagCommandInput, TagCommandOutput } from "../commands/TagCommand";
import {
  UntagCommandInput,
  UntagCommandOutput
} from "../commands/UntagCommand";
import {
  UpdateGroupCommandInput,
  UpdateGroupCommandOutput
} from "../commands/UpdateGroupCommand";
import {
  UpdateGroupQueryCommandInput,
  UpdateGroupQueryCommandOutput
} from "../commands/UpdateGroupQueryCommand";
import {
  BadRequestException,
  ForbiddenException,
  Group,
  GroupFilter,
  GroupIdentifier,
  GroupQuery,
  InternalServerErrorException,
  MethodNotAllowedException,
  NotFoundException,
  QueryError,
  ResourceFilter,
  ResourceIdentifier,
  ResourceQuery,
  TooManyRequestsException,
  UnauthorizedException
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

export async function serializeAws_restJson1_1CreateGroupCommand(
  input: CreateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/groups";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.ResourceQuery !== undefined) {
    bodyParams["ResourceQuery"] = serializeAws_restJson1_1ResourceQuery(
      input.ResourceQuery,
      context
    );
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteGroupCommand(
  input: DeleteGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/groups/{GroupName}";
  if (input.GroupName !== undefined) {
    const labelValue: any = input.GroupName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GroupName.");
    }
    resolvedPath = resolvedPath.replace("{GroupName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: GroupName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetGroupCommand(
  input: GetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/groups/{GroupName}";
  if (input.GroupName !== undefined) {
    const labelValue: any = input.GroupName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GroupName.");
    }
    resolvedPath = resolvedPath.replace("{GroupName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: GroupName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetGroupQueryCommand(
  input: GetGroupQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/groups/{GroupName}/query";
  if (input.GroupName !== undefined) {
    const labelValue: any = input.GroupName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GroupName.");
    }
    resolvedPath = resolvedPath.replace("{GroupName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: GroupName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetTagsCommand(
  input: GetTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/resources/{Arn}/tags";
  if (input.Arn !== undefined) {
    const labelValue: any = input.Arn.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Arn.");
    }
    resolvedPath = resolvedPath.replace("{Arn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Arn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListGroupResourcesCommand(
  input: ListGroupResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/groups/{GroupName}/resource-identifiers-list";
  if (input.GroupName !== undefined) {
    const labelValue: any = input.GroupName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GroupName.");
    }
    resolvedPath = resolvedPath.replace("{GroupName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: GroupName.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken.toString();
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Filters !== undefined) {
    bodyParams["Filters"] = serializeAws_restJson1_1ResourceFilterList(
      input.Filters,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    query: query,
    body: body
  });
}

export async function serializeAws_restJson1_1ListGroupsCommand(
  input: ListGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/groups-list";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken.toString();
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Filters !== undefined) {
    bodyParams["Filters"] = serializeAws_restJson1_1GroupFilterList(
      input.Filters,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    query: query,
    body: body
  });
}

export async function serializeAws_restJson1_1SearchResourcesCommand(
  input: SearchResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/resources/search";
  let body: any = {};
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ResourceQuery !== undefined) {
    bodyParams["ResourceQuery"] = serializeAws_restJson1_1ResourceQuery(
      input.ResourceQuery,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1TagCommand(
  input: TagCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/resources/{Arn}/tags";
  if (input.Arn !== undefined) {
    const labelValue: any = input.Arn.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Arn.");
    }
    resolvedPath = resolvedPath.replace("{Arn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Arn.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UntagCommand(
  input: UntagCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/resources/{Arn}/tags";
  if (input.Arn !== undefined) {
    const labelValue: any = input.Arn.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Arn.");
    }
    resolvedPath = resolvedPath.replace("{Arn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Arn.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Keys !== undefined) {
    bodyParams["Keys"] = serializeAws_restJson1_1TagKeyList(
      input.Keys,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateGroupCommand(
  input: UpdateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/groups/{GroupName}";
  if (input.GroupName !== undefined) {
    const labelValue: any = input.GroupName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GroupName.");
    }
    resolvedPath = resolvedPath.replace("{GroupName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: GroupName.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateGroupQueryCommand(
  input: UpdateGroupQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/groups/{GroupName}/query";
  if (input.GroupName !== undefined) {
    const labelValue: any = input.GroupName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GroupName.");
    }
    resolvedPath = resolvedPath.replace("{GroupName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: GroupName.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.ResourceQuery !== undefined) {
    bodyParams["ResourceQuery"] = serializeAws_restJson1_1ResourceQuery(
      input.ResourceQuery,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1CreateGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateGroupCommandError(output, context);
  }
  const contents: CreateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateGroupOutput",
    Group: undefined,
    ResourceQuery: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Group !== undefined) {
    contents.Group = deserializeAws_restJson1_1Group(data.Group, context);
  }
  if (data.ResourceQuery !== undefined) {
    contents.ResourceQuery = deserializeAws_restJson1_1ResourceQuery(
      data.ResourceQuery,
      context
    );
  }
  if (data.Tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.ardi#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.ardi#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.ardi#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.ardi#MethodNotAllowedException":
      response = await deserializeAws_restJson1_1MethodNotAllowedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.ardi#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.ardi#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeleteGroupCommandError(output, context);
  }
  const contents: DeleteGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteGroupOutput",
    Group: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Group !== undefined) {
    contents.Group = deserializeAws_restJson1_1Group(data.Group, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.ardi#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.ardi#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.ardi#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.ardi#MethodNotAllowedException":
      response = await deserializeAws_restJson1_1MethodNotAllowedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.ardi#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.ardi#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.ardi#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetGroupCommandError(output, context);
  }
  const contents: GetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetGroupOutput",
    Group: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Group !== undefined) {
    contents.Group = deserializeAws_restJson1_1Group(data.Group, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.ardi#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.ardi#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.ardi#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.ardi#MethodNotAllowedException":
      response = await deserializeAws_restJson1_1MethodNotAllowedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.ardi#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.ardi#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.ardi#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetGroupQueryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupQueryCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetGroupQueryCommandError(output, context);
  }
  const contents: GetGroupQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetGroupQueryOutput",
    GroupQuery: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.GroupQuery !== undefined) {
    contents.GroupQuery = deserializeAws_restJson1_1GroupQuery(
      data.GroupQuery,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetGroupQueryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupQueryCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.ardi#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.ardi#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.ardi#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.ardi#MethodNotAllowedException":
      response = await deserializeAws_restJson1_1MethodNotAllowedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.ardi#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.ardi#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.ardi#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetTagsCommandError(output, context);
  }
  const contents: GetTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTagsOutput",
    Arn: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined) {
    contents.Arn = data.Arn;
  }
  if (data.Tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.ardi#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.ardi#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.ardi#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.ardi#MethodNotAllowedException":
      response = await deserializeAws_restJson1_1MethodNotAllowedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.ardi#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.ardi#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.ardi#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListGroupResourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupResourcesCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListGroupResourcesCommandError(
      output,
      context
    );
  }
  const contents: ListGroupResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListGroupResourcesOutput",
    NextToken: undefined,
    QueryErrors: undefined,
    ResourceIdentifiers: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.QueryErrors !== undefined) {
    contents.QueryErrors = deserializeAws_restJson1_1QueryErrorList(
      data.QueryErrors,
      context
    );
  }
  if (data.ResourceIdentifiers !== undefined) {
    contents.ResourceIdentifiers = deserializeAws_restJson1_1ResourceIdentifierList(
      data.ResourceIdentifiers,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListGroupResourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupResourcesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.ardi#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.ardi#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.ardi#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.ardi#MethodNotAllowedException":
      response = await deserializeAws_restJson1_1MethodNotAllowedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.ardi#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.ardi#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.ardi#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.ardi#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListGroupsCommandError(output, context);
  }
  const contents: ListGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListGroupsOutput",
    GroupIdentifiers: undefined,
    Groups: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.GroupIdentifiers !== undefined) {
    contents.GroupIdentifiers = deserializeAws_restJson1_1GroupIdentifierList(
      data.GroupIdentifiers,
      context
    );
  }
  if (data.Groups !== undefined) {
    contents.Groups = deserializeAws_restJson1_1GroupList(data.Groups, context);
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.ardi#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.ardi#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.ardi#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.ardi#MethodNotAllowedException":
      response = await deserializeAws_restJson1_1MethodNotAllowedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.ardi#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.ardi#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1SearchResourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchResourcesCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1SearchResourcesCommandError(
      output,
      context
    );
  }
  const contents: SearchResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SearchResourcesOutput",
    NextToken: undefined,
    QueryErrors: undefined,
    ResourceIdentifiers: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.QueryErrors !== undefined) {
    contents.QueryErrors = deserializeAws_restJson1_1QueryErrorList(
      data.QueryErrors,
      context
    );
  }
  if (data.ResourceIdentifiers !== undefined) {
    contents.ResourceIdentifiers = deserializeAws_restJson1_1ResourceIdentifierList(
      data.ResourceIdentifiers,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1SearchResourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchResourcesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.ardi#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.ardi#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.ardi#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.ardi#MethodNotAllowedException":
      response = await deserializeAws_restJson1_1MethodNotAllowedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.ardi#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.ardi#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.ardi#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1TagCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1TagCommandError(output, context);
  }
  const contents: TagCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagOutput",
    Arn: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined) {
    contents.Arn = data.Arn;
  }
  if (data.Tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.ardi#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.ardi#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.ardi#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.ardi#MethodNotAllowedException":
      response = await deserializeAws_restJson1_1MethodNotAllowedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.ardi#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.ardi#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.ardi#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UntagCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UntagCommandError(output, context);
  }
  const contents: UntagCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagOutput",
    Arn: undefined,
    Keys: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined) {
    contents.Arn = data.Arn;
  }
  if (data.Keys !== undefined) {
    contents.Keys = deserializeAws_restJson1_1TagKeyList(data.Keys, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.ardi#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.ardi#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.ardi#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.ardi#MethodNotAllowedException":
      response = await deserializeAws_restJson1_1MethodNotAllowedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.ardi#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.ardi#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.ardi#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateGroupCommandError(output, context);
  }
  const contents: UpdateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateGroupOutput",
    Group: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Group !== undefined) {
    contents.Group = deserializeAws_restJson1_1Group(data.Group, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.ardi#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.ardi#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.ardi#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.ardi#MethodNotAllowedException":
      response = await deserializeAws_restJson1_1MethodNotAllowedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.ardi#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.ardi#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.ardi#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateGroupQueryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupQueryCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateGroupQueryCommandError(
      output,
      context
    );
  }
  const contents: UpdateGroupQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateGroupQueryOutput",
    GroupQuery: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.GroupQuery !== undefined) {
    contents.GroupQuery = deserializeAws_restJson1_1GroupQuery(
      data.GroupQuery,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateGroupQueryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupQueryCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.ardi#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.ardi#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.ardi#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.ardi#MethodNotAllowedException":
      response = await deserializeAws_restJson1_1MethodNotAllowedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.ardi#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.ardi#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.ardi#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    __type: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ForbiddenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    __type: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerErrorExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    __type: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1MethodNotAllowedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<MethodNotAllowedException> => {
  const contents: MethodNotAllowedException = {
    __type: "MethodNotAllowedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    __type: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyRequestsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    __type: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnauthorizedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: UnauthorizedException = {
    __type: "UnauthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1_1GroupFilter = (
  input: GroupFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Values !== undefined) {
    bodyParams["Values"] = serializeAws_restJson1_1GroupFilterValues(
      input.Values,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1GroupFilterList = (
  input: Array<GroupFilter>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1GroupFilter(entry, context)
  );
};

const serializeAws_restJson1_1GroupFilterValues = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1ResourceFilter = (
  input: ResourceFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Values !== undefined) {
    bodyParams["Values"] = serializeAws_restJson1_1ResourceFilterValues(
      input.Values,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1ResourceFilterList = (
  input: Array<ResourceFilter>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1ResourceFilter(entry, context)
  );
};

const serializeAws_restJson1_1ResourceFilterValues = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1ResourceQuery = (
  input: ResourceQuery,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Query !== undefined) {
    bodyParams["Query"] = input.Query;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1Tags = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1Group = (
  output: any,
  context: __SerdeContext
): Group => {
  let contents: any = {
    __type: "Group",
    Description: undefined,
    GroupArn: undefined,
    Name: undefined
  };
  if (output.Description !== undefined) {
    contents.Description = output.Description;
  }
  if (output.GroupArn !== undefined) {
    contents.GroupArn = output.GroupArn;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_restJson1_1GroupIdentifier = (
  output: any,
  context: __SerdeContext
): GroupIdentifier => {
  let contents: any = {
    __type: "GroupIdentifier",
    GroupArn: undefined,
    GroupName: undefined
  };
  if (output.GroupArn !== undefined) {
    contents.GroupArn = output.GroupArn;
  }
  if (output.GroupName !== undefined) {
    contents.GroupName = output.GroupName;
  }
  return contents;
};

const deserializeAws_restJson1_1GroupIdentifierList = (
  output: any,
  context: __SerdeContext
): Array<GroupIdentifier> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1GroupIdentifier(entry, context)
  );
};

const deserializeAws_restJson1_1GroupList = (
  output: any,
  context: __SerdeContext
): Array<Group> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Group(entry, context)
  );
};

const deserializeAws_restJson1_1GroupQuery = (
  output: any,
  context: __SerdeContext
): GroupQuery => {
  let contents: any = {
    __type: "GroupQuery",
    GroupName: undefined,
    ResourceQuery: undefined
  };
  if (output.GroupName !== undefined) {
    contents.GroupName = output.GroupName;
  }
  if (output.ResourceQuery !== undefined) {
    contents.ResourceQuery = deserializeAws_restJson1_1ResourceQuery(
      output.ResourceQuery,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1QueryError = (
  output: any,
  context: __SerdeContext
): QueryError => {
  let contents: any = {
    __type: "QueryError",
    ErrorCode: undefined,
    Message: undefined
  };
  if (output.ErrorCode !== undefined) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1QueryErrorList = (
  output: any,
  context: __SerdeContext
): Array<QueryError> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1QueryError(entry, context)
  );
};

const deserializeAws_restJson1_1ResourceIdentifier = (
  output: any,
  context: __SerdeContext
): ResourceIdentifier => {
  let contents: any = {
    __type: "ResourceIdentifier",
    ResourceArn: undefined,
    ResourceType: undefined
  };
  if (output.ResourceArn !== undefined) {
    contents.ResourceArn = output.ResourceArn;
  }
  if (output.ResourceType !== undefined) {
    contents.ResourceType = output.ResourceType;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceIdentifierList = (
  output: any,
  context: __SerdeContext
): Array<ResourceIdentifier> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ResourceIdentifier(entry, context)
  );
};

const deserializeAws_restJson1_1ResourceQuery = (
  output: any,
  context: __SerdeContext
): ResourceQuery => {
  let contents: any = {
    __type: "ResourceQuery",
    Query: undefined,
    Type: undefined
  };
  if (output.Query !== undefined) {
    contents.Query = output.Query;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1TagKeyList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Tags = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
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
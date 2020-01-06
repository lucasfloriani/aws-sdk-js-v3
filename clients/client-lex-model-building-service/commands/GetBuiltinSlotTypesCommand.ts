import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../LexModelBuildingServiceClient";
import {
  GetBuiltinSlotTypesRequest,
  GetBuiltinSlotTypesResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1GetBuiltinSlotTypesCommand,
  serializeAws_restJson1_1GetBuiltinSlotTypesCommand
} from "../protocols/Aws_restJson1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type GetBuiltinSlotTypesCommandInput = GetBuiltinSlotTypesRequest;
export type GetBuiltinSlotTypesCommandOutput = GetBuiltinSlotTypesResponse;

export class GetBuiltinSlotTypesCommand extends $Command<
  GetBuiltinSlotTypesCommandInput,
  GetBuiltinSlotTypesCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBuiltinSlotTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetBuiltinSlotTypesCommandInput,
    GetBuiltinSlotTypesCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetBuiltinSlotTypesCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1GetBuiltinSlotTypesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetBuiltinSlotTypesCommandOutput> {
    return deserializeAws_restJson1_1GetBuiltinSlotTypesCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
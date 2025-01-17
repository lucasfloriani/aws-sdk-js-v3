import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  ListEnvironmentProvisionedResourcesInput,
  ListEnvironmentProvisionedResourcesOutput,
} from "../models/models_0";
import {
  deserializeAws_json1_0ListEnvironmentProvisionedResourcesCommand,
  serializeAws_json1_0ListEnvironmentProvisionedResourcesCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

export interface ListEnvironmentProvisionedResourcesCommandInput extends ListEnvironmentProvisionedResourcesInput {}
export interface ListEnvironmentProvisionedResourcesCommandOutput
  extends ListEnvironmentProvisionedResourcesOutput,
    __MetadataBearer {}

/**
 * <p>List the provisioned resources for your environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListEnvironmentProvisionedResourcesCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListEnvironmentProvisionedResourcesCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new ListEnvironmentProvisionedResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEnvironmentProvisionedResourcesCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentProvisionedResourcesCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 */
export class ListEnvironmentProvisionedResourcesCommand extends $Command<
  ListEnvironmentProvisionedResourcesCommandInput,
  ListEnvironmentProvisionedResourcesCommandOutput,
  ProtonClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListEnvironmentProvisionedResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEnvironmentProvisionedResourcesCommandInput, ListEnvironmentProvisionedResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "ListEnvironmentProvisionedResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEnvironmentProvisionedResourcesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListEnvironmentProvisionedResourcesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListEnvironmentProvisionedResourcesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0ListEnvironmentProvisionedResourcesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListEnvironmentProvisionedResourcesCommandOutput> {
    return deserializeAws_json1_0ListEnvironmentProvisionedResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

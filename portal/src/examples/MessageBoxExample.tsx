import React from "react";
import { Example } from "../components";
import { ErrorMessage, InfoMessage, SuccessMessage } from "@fremtind/jkl-message-box-react";
import "@fremtind/jkl-message-box/message-box.min.css";
// @ts-ignore
import messageType from "!raw-loader!@fremtind/jkl-message-box-react/build/MessageBox.d.ts";

const example = `<div style={{display: "flex", flexWrap:"wrap"}}>
        <InfoMessage title="Info">
            Cupidatat Lorem incididunt incididunt in non mollit cillum Lorem eiusmod sunt magna.
        </InfoMessage>
        <ErrorMessage title="Error">
            In non dolore ullamco minim adipisicing ipsum pariatur deserunt ipsum.
        </ErrorMessage>
        <SuccessMessage title="Success">Ullamco minim aute Lorem adipisicing.</SuccessMessage>
</div>`;

const exampleImport = `import { ErrorMessage, InfoMessage, SuccessMessage } from "@fremtind/jkl-message-box-react";
import "@fremtind/jkl-message-box/message-box.min.css";`;

const MessageBoxExample = () => (
    <Example
        exampleComponents={{ ErrorMessage, InfoMessage, SuccessMessage }}
        exampleCode={example}
        type={messageType}
        exampleImport={exampleImport}
    />
);

export default MessageBoxExample;

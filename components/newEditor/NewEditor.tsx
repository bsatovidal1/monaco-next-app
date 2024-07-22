import React from "react";
import ReactDOM from "react-dom/client";
import "@codingame/monaco-vscode-python-default-extension";
import { UserConfig } from "monaco-editor-wrapper";
import { MonacoEditorReactComp } from "@typefox/monaco-editor-react";
import { createUserConfig } from "./config";

// const userConfig: UserConfig = {
//   wrapperConfig: {
//     editorAppConfig: {
//       $type: 'classic',
//       languageDef: 'lua',
//       code: 'print("Hello, World!")'
//     }
//   }
// };

const htmlElement = document.getElementById(
  "monaco-editor-root"
) as HTMLElement;
const comp = (
  <MonacoEditorReactComp
    userConfig={createUserConfig("workspaceRoot", "code", "codeUri")}
    style={{
      paddingTop: "5px",
      height: "80vh",
    }}
  />
);
ReactDOM.createRoot(htmlElement!).render(comp);

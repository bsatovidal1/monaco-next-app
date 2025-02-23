/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2024 TypeFox and others.
 * Licensed under the MIT License. See LICENSE in the package root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as vscode from "vscode";
import getEditorServiceOverride from "@codingame/monaco-vscode-editor-service-override";
import getKeybindingsServiceOverride from "@codingame/monaco-vscode-keybindings-service-override";
import "@codingame/monaco-vscode-python-default-extension";
import { UserConfig } from "monaco-editor-wrapper";
import { useOpenEditorStub } from "monaco-editor-wrapper/vscode/services";
import { MonacoLanguageClient } from "monaco-languageclient";

export const createUserConfig = (
  workspaceRoot: string,
  code: string,
  codeUri: string
): UserConfig => {
  return {
    languageClientConfig: {
      languageId: "python",
      name: "Python Language Server Example",
      options: {
        $type: "WorkerConfig",
        url: new URL(
          "file:///path/to/python-language-server-example/dist/worker/python-language-server-example-worker.js",
          "file:"
        ),
        type: "classic",
      },
      clientOptions: {
        documentSelector: ["python"],
        // workspaceFolder: {
        //     index: 0,
        //     name: 'workspace',
        //     uri: vscode.uri.parse(workspaceRoot)
        // },
      },
    },
    wrapperConfig: {
      serviceConfig: {
        userServices: {
          ...getEditorServiceOverride(useOpenEditorStub),
          ...getKeybindingsServiceOverride(),
        },
        debugLogging: true,
      },
      editorAppConfig: {
        $type: "extended",
        codeResources: {
          main: {
            text: code,
            uri: codeUri,
          },
        },
        userConfiguration: {
          json: JSON.stringify({
            "workbench.colorTheme": "Default Dark Modern",
          }),
        },
        useDiffEditor: false,
      },
    },
    loggerConfig: {
      enabled: true,
      debugEnabled: true,
    },
  };
};

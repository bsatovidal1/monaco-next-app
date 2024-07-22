"use client";

import { Editor } from "@monaco-editor/react";
import { Script } from "./Sidebar";
import { useCallback } from "react";
import { editor } from "monaco-editor";

type EditorProps = {
  script: Script;
  setEditorRef: (e: editor.IStandaloneCodeEditor) => void;
};

const LuaEditor: React.FC<EditorProps> = ({ script, setEditorRef }) => {
  const handleOnMount = useCallback(
    (e: editor.IStandaloneCodeEditor) => {
      setEditorRef(e);
    },
    [setEditorRef]
  );

  return (
    <Editor
      onMount={handleOnMount}
      theme="vs-dark"
      path={script.name}
      defaultLanguage={script.language}
      defaultValue={script.value}
      options={{ minimap: { enabled: false } }}
    />
  );
};

export default LuaEditor;

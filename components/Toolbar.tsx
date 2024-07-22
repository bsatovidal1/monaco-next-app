import { editor } from "monaco-editor";
import React from "react";

type Props = {
  editor: editor.IStandaloneCodeEditor;
};

const Toolbar: React.FC<Props> = ({ editor }) => {
  return (
    <div>
      <button
        className="btn btn-xs"
        onClick={() => editor.trigger("", "undo", null)}
      >
        undo
      </button>
      <button
        className="btn btn-xs"
        onClick={() => editor.trigger("", "redo", null)}
      >
        redo
      </button>
      <button onClick={() => editor.trigger("", "find", null)}>find</button>
    </div>
  );
};

export default Toolbar;

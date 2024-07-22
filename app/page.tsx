"use client";

import LuaEditor from "@/components/LuaEditor";
import Sidebar from "@/components/Sidebar";
import { editor } from "monaco-editor";
import { useState } from "react";
import Toolbar from "@/components/Toolbar";

const serverScripts = [
  {
    id: 0,
    name: "script.lua",
    language: "lua",
    value:
      "function onPlayerEnter() \n\tHud.console.write('Hello, world!') \nend",
  },
  {
    id: 1,
    name: "script2.lua",
    language: "lua",
    value: "function onPlayerEnter() \n\tHud.console.write('Teste') \nend",
  },
  {
    id: 2,
    name: "long script3.lua",
    language: "lua",
    value: "function onPlayerEnter() \n\tHud.console.write('Mapinhooo') \nend",
  },
];

export default function Home() {
  const [scripts, setScripts] = useState(serverScripts);
  const [activeScript, setActiveScript] = useState(serverScripts[0]);
  const [editorRef, setEditorRef] = useState<editor.IStandaloneCodeEditor>();

  const handleCreateScript = () => {
    console.log("new script");
    const newScript = {
      id: scripts.length,
      name: "newLongScript.lua",
      language: "lua",
      value: "",
    };
    setScripts(() => [...scripts, newScript]);
  };

  const handleRenameScript = () => {
    console.log("rename script");
  };

  const handleDuplicateScript = () => {
    console.log("duplicate script");
    const copyScript = {
      id: scripts.length,
      name: `${activeScript.name}_copy.lua`,
      language: "lua",
      value: activeScript.value,
    };
    setScripts(() => [...scripts, copyScript]);
  };

  const handleMoveToTrash = () => {
    console.log("move to trash");
  };

  return (
    <main>
      <div className="flex bg-slate-400 w-full h-[100vh] justify-center items-center">
        <div className="flex h-[900px] w-11/12 p-3 gap-2 bg-slate-500 rounded-lg">
          <div className="">
            <Sidebar
              scripts={scripts}
              activeScriptId={activeScript.id}
              setActiveScript={setActiveScript}
            />
          </div>
          <div className="flex flex-col w-full h-full gap-2">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn">
                    {activeScript.name}
                  </div>
                  <ul
                    tabIndex={0}
                    className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 z-[1]"
                  >
                    <li>
                      <button onClick={() => handleCreateScript()}>
                        Create
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleRenameScript()}>
                        Rename
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleDuplicateScript()}>
                        Duplicate
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleMoveToTrash()}>
                        Move to Trash
                      </button>
                    </li>
                  </ul>
                </div>
                <button className="btn btn-xs">save</button>
                <button className="btn btn-xs">assign</button>
              </div>
              {editorRef && <Toolbar editor={editorRef} />}
              {/* <div>buttons</div> */}
            </div>
            <LuaEditor script={activeScript} setEditorRef={setEditorRef} />
            <div className="flex justify-between">
              <div className="border-purple-400 border-2 rounded-lg justify-center items-center px-4 py-2">
                Explain code
              </div>
              <div className="border-purple-400 border-2 rounded-lg justify-center items-center px-4 py-2">
                Commit Changes
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

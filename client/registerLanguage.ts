import { languages } from "monaco-editor-core";
// @ts-ignore
import editor from "monaco-editor/esm/vs/basic-languages/lua/lua.js";

export const registerLanguage = () => {
  languages.register({
    id: "lua",
    extensions: [".lua"],
    aliases: ["Lua", "lua"],
  });
  languages.setMonarchTokensProvider("lua", editor.language);
  languages.setLanguageConfiguration("lua", editor.conf);
};

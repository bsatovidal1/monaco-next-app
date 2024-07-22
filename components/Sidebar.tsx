import classNames from "classnames";

export type Script = {
  id: number;
  name: string;
  language: string;
  value: string;
};
type Props = {
  scripts: Script[];
  activeScriptId: number;
  setActiveScript: (script: Script) => void;
};
const Sidebar: React.FC<Props> = ({
  scripts,
  activeScriptId,
  setActiveScript,
}) => {
  const handleChangeScript = (script: Script) => {
    setActiveScript(script);
  };

  return (
    <div className="flex flex-col w-full h-full gap-2">
      <label
        className={classNames(["input input-bordered flex items-center gap-2"])}
      >
        <input type="text" className="grow" placeholder="Search" />
      </label>
      <hr />
      {scripts.map((script, index) => (
        <button
          key={index}
          className={classNames([
            "btn text-base btn-primary justify-start",
            activeScriptId === script.id ? "border-2 border-black" : "",
          ])}
          onClick={() => handleChangeScript(script)}
        >
          {script.name.length > 14
            ? `${script.name.slice(0, 14)}...`
            : script.name}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;

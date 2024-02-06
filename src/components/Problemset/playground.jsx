import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import Header from "../Header/header";
import Workspace from "../workspace/Workspace";
function Playground() {
  return (
    <>
      <div className="bg-gray-300 bg-opacity-30">
        <Header problempage={true} />
        <Workspace />
      </div>
    </>
  );
}

export default Playground;

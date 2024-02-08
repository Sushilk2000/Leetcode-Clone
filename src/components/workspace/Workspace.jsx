import Split from "react-split";
import ProblemDescription from "./ProblemDescription";
import CodeEditor from "../../CodeEditor/codeEditor";
import { Problems } from "../../Problems";
import { useLocation } from "react-router-dom";
import { useState } from "react";
function Workspace() {
  const data = useLocation().pathname.split("/");
  const index = data[data.length - 2];
  const name = data[data.length - 1].toLowerCase();

  const Problem = Problems[index].name;
  return (
    <Split className="split overflow-x-hidden" minSize={0}>
      <ProblemDescription Problem={Problem} />
      <CodeEditor Problem={Problem} />
    </Split>
  );
}

export default Workspace;

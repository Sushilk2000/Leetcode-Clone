import Split from "react-split";
import ProblemDescription from "./ProblemDescription";
import CodeEditor from "../../CodeEditor/codeEditor";
function Workspace() {
  return (
    <Split className="split " minSize={0}>
      <ProblemDescription />
      <CodeEditor />
    </Split>
  );
}

export default Workspace;

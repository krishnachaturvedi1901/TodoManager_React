import React from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

const TodoInput = ({ handleAdd }) => {
  const [text, setText] = React.useState("");
  const [erase, setErase] = React.useState(false);
  if (erase) {
    document.getElementById("inputId").value = "";
    setErase(false);
    if (document.getElementById("inputId").value === "") {
      setText("");
    }
  }

  return (
    <div className="inputDiv">
      <input
        id="inputId"
        type="text"
        placeholder="Enter Task"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        id="addBtn"
        onClick={() => {
          setErase(true);
          return handleAdd(text);
        }}
      >
        <ControlPointIcon />
      </button>
    </div>
  );
};
export { TodoInput };

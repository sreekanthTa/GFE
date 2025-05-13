import React from "react";

export default function App() {
  const [state, setState] = React.useState([]);
  const inputRef = React.useRef();

  const saveData = () => {
    const data = [...state, inputRef.current.value];
    setState(data);
    inputRef.current.value = "";
  };

  const deleteData = (index) => {
    const copiedData = [...state]
    const splicedData = copiedData.splice(0, index);
    console.log(splicedData, index, state);
    setState(splicedData);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" ref={inputRef} placeholder="Add your task" />
        <div>
          <button onClick={saveData}>Submit</button>
        </div>
      </div>
      <ul>
        {state?.map((e, i) => (
          <li>
            <span>{e}</span>
            <button onClick={() => deleteData(i)}>Delete</button>
          </li>
        ))}
        <li>
          <span>Walk the dog</span>
          <button>Delete</button>
        </li>
        <li>
          <span>Water the plants</span>
          <button>Delete</button>
        </li>
        <li>
          <span>Wash the dishes</span>
          <button>Delete</button>
        </li>
      </ul>
    </div>
  );
}

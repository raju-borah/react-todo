import React, { useState, useEffect } from "react";
import SimpleContainer from "./components/UI/SimpleContainer";
import SearchBar from "./components/form/SearchBar";

import SimpleList from "./components/list/SimpleList";
function App() {
  // get the localStorage data back
  const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist");

    if (lists) {
      return JSON.parse(lists);
    } else {
      return [];
    }
  };
  const [taskLists, setTaskLists] = useState(getLocalData());
  const [task, setTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState("");

  // add task
  const addTaskHandler = (todoTask) => {
    if (isEditing) {
      setTaskLists(
        taskLists.map((element) => {
          if (element.id === editItem) {
            return { ...element, task: todoTask };
          }
          return element;
        })
      );
    } else {
      console.log(Date.now());
      setTaskLists((prevList) => {
        return [
          ...prevList,
          {
            task: todoTask,
            id: Math.random().toString(),
            date:
              new Date().toLocaleString("en-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              }) + "",
          },
        ];
      });
    }
    setTask("");
    setIsEditing(false);
    setEditItem("");
  };
  // remove task
  const removeTaskHandler = (taskId) => {
    const serachValue = taskLists.filter((element) => {
      return element.id !== taskId;
    });
    setTaskLists(serachValue);
  };
  // edit task
  const editTaskHandler = (taskId) => {
    const serachValue = taskLists.find((element) => {
      return element.id === taskId;
    });

    setTask(serachValue.task);
    setIsEditing(true);
    setEditItem(serachValue.id);
  };
  // adding localStorage
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(taskLists));
  }, [taskLists]);
  return (
    <>
      <SimpleContainer>
        <h1 style={{ color: "white" }}>TODO LIST</h1>
        <SearchBar
          onAddTask={addTaskHandler}
          value={task}
          isEditingBtn={isEditing}
        ></SearchBar>
        <SimpleList
          tasks={taskLists}
          onRemoveTask={removeTaskHandler}
          onEditedTask={editTaskHandler}
        ></SimpleList>
      </SimpleContainer>
    </>
  );
}

export default App;

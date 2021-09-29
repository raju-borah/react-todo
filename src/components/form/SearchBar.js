import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import AddTaskIcon from "@mui/icons-material/AddTask";
import EditIcon from "@mui/icons-material/Edit";
export default function SearchBar(props) {
  const [task, setTask] = useState("");
  useEffect(() => {
    setTask(props.value);
  }, [props.value]);
  return (
    <Paper
      component="form"
      sx={{
        p: "4px 4px",
        display: "flex",
        alignItems: "center",
        boxShadow: "0px 0px 1px 1px green",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        props.onAddTask(task);
        setTask("");
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Add Task"
        inputProps={{ "aria-label": "Task" }}
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        {props.isEditingBtn && <EditIcon />}
        {!props.isEditingBtn && <AddTaskIcon />}
      </IconButton>
    </Paper>
  );
}

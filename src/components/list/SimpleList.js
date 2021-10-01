import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
export default function SimpleList({ tasks, onRemoveTask, onEditedTask }) {
  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper", marginTop: "10px" }}
    >
      {tasks.map((el) => (
        <ListItem key={el.id}>
          <ListItemAvatar>
            <Avatar>
              <AssignmentLateIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={el.task}
            // secondary={`Created On: ${el.date}`}
          />
          <Button variant="text" onClick={() => onEditedTask(el.id)}>
            <EditIcon />
          </Button>
          <Button variant="text" onClick={() => onRemoveTask(el.id)}>
            <DeleteIcon />
          </Button>
        </ListItem>
      ))}
      {tasks.length === 0 && <ListItem key="no-todo">No ToDo </ListItem>}
    </List>
  );
}

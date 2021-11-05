import { Button, Card, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useData } from "../context/DataContext";

export const TodoItem = ({ task }) => {
  const { tasks, dispatch } = useData();

  const completeTask = async (id) => {
    const task = tasks.find((task) => task.id === id);
    const updatedTask = { ...task, completed: !task.completed };
    const response = await axios.put(
      `http://localhost:3001/todos/${id}`,
      updatedTask
    );
    if (response.status === 200) {
      dispatch({ type: "TOGGLE_TASK_STATUS", payload: updatedTask });
    }
  };

  return (
    <Grid item sx={{ width: "100%" }}>
      <Card
        sx={{
          margin: "1rem 0",
          display: "flex",
          alignItems: "center",
          padding: "1rem 0.5rem",
        }}
      >
        <Container sx={{ width: "70%" }}>
          <Typography
            variant="h5"
            sx={task.completed && { textDecoration: "line-through" }}
          >
            {task.title}
          </Typography>
          <Typography
            variant="body1"
            sx={task.completed && { textDecoration: "line-through" }}
          >
            {task.description}
          </Typography>
        </Container>
        <Container sx={{ width: "30%" }}>
          {task.completed ? (
            <Button variant="contained" onClick={() => completeTask(task.id)}>
              Mark as Incomplete
            </Button>
          ) : (
            <Button variant="contained" onClick={() => completeTask(task.id)}>
              Mark as complete
            </Button>
          )}
          <Button
            variant="outlined"
            sx={{ margin: "1rem 0" }}
            disabled={!task.completed}
          >
            Delete
          </Button>
        </Container>
      </Card>
    </Grid>
  );
};

import { Button, TextField, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import { useData } from "../context/DataContext";
import { TodoItem } from "./TodoItem";

export const Todo = () => {
  //   const [inputTitle, setInputTitle] = useState("");
  //   const [inputDesc, setInputDesc] = useState("");
  const { dispatch, tasks } = useData();

  //   const addTask = () => {
  //     dispatch({
  //       type: "ADD_TASK",
  //       payload: {
  //         id: tasks.length + 1,
  //         title: inputTitle,
  //         desc: inputDesc,
  //         completed: false,
  //       },
  //     });
  //   };

  return (
    <div>
      <h2>Todo</h2>
      {/* <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <TextField
          id="outlined-basic"
          placeholder="Title"
          variant="outlined"
          value={inputTitle}
          onChange={(event) => setInputTitle(event.target.value)}
          sx={{ width: { xs: "100%", sm: "35%" } }}
        />
        <TextField
          id="outlined-basic"
          placeholder="Description"
          variant="outlined"
          value={inputDesc}
          onChange={(event) => setInputDesc(event.target.value)}
          sx={{ width: { xs: "100%", sm: "35%" } }}
        />
        <Button variant="contained" onClick={() => addTask()}>
          Add Task
        </Button>
      </Container> */}
      <Container maxWidth="md">
        <Grid container>
          {tasks.map((task) => {
            return <TodoItem key={task.id} task={task} />;
          })}
        </Grid>
      </Container>
    </div>
  );
};

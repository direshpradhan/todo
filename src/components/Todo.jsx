import { Button, TextField, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useData } from "../context/DataContext";
import { TodoItem } from "./TodoItem";

export const Todo = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [error, setError] = useState(false);
  const { dispatch, tasks } = useData();

  const addTask = async () => {
    if (inputTitle !== "" && inputDesc !== "") {
      const newTask = {
        id: tasks[0].id + 1,
        title: inputTitle,
        description: inputDesc,
        completed: false,
      };
      const response = await axios.post("http://localhost:3001/todos", newTask);
      if (response.status === 201) {
        dispatch({
          type: "ADD_TASK",
          payload: newTask,
        });
      }
      setShowModal(false);
      setInputTitle("");
      setInputDesc("");
    } else {
      setError(true);
    }
  };

  return (
    <>
      <h1>Todo App</h1>
      <Button variant="contained" onClick={() => setShowModal(true)}>
        Create Task
      </Button>
      <Container maxWidth="md">
        <Grid container>
          {tasks.map((task) => {
            return <TodoItem key={task.id} task={task} />;
          })}
        </Grid>
      </Container>

      {showModal && (
        <Container
          maxWidth="xl"
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.1)",
            zIndex: "1",
          }}
          onClick={() => setShowModal(false)}
        >
          <Container
            maxWidth="xs"
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexDirection: "column",
              backgroundColor: "white",
              zIndex: "2",
              padding: "2rem",
              marginTop: "10rem",
              borderRadius: "0.5rem",
            }}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            {error && inputDesc === "" && inputTitle !== "" && (
              <Typography variant="body1" sx={{ color: "red" }}>
                Enter Description !!
              </Typography>
            )}
            {error && inputTitle === "" && inputDesc !== "" && (
              <Typography variant="body1" sx={{ color: "red" }}>
                Enter Title !!
              </Typography>
            )}
            {error && inputTitle === "" && inputDesc === "" && (
              <Typography variant="body1" sx={{ color: "red" }}>
                Enter Title!!
              </Typography>
            )}

            <TextField
              id="outlined-basic"
              placeholder="Title"
              variant="outlined"
              value={inputTitle}
              onChange={(event) => setInputTitle(event.target.value)}
              sx={{ width: "100%" }}
            />
            <TextField
              id="outlined-basic"
              multiline
              rows={3}
              placeholder="Description"
              variant="outlined"
              value={inputDesc}
              onChange={(event) => setInputDesc(event.target.value)}
              sx={{ width: "100%" }}
            />
            <Button variant="contained" onClick={() => addTask()}>
              Add Task
            </Button>
          </Container>
        </Container>
      )}
    </>
  );
};

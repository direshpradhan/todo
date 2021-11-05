import { Button, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";

export const TodoItem = ({ task }) => {
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
          <Typography variant="h5">{task.title}</Typography>
          <Typography variant="body1">{task.description}</Typography>
        </Container>
        <Container sx={{ width: "30%" }}>
          {task.completed ? (
            <Button variant="contained">Mark as Incomplete</Button>
          ) : (
            <Button variant="contained">Mark as complete</Button>
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

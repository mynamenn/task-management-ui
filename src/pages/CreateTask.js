import { useState } from "react";
import { Box, TextField, Button, Typography, Stack } from "@mui/material";
import { useTaskApi } from "../utils/useTaskApi";
import NotificationSnackbar from "../components/NotificationSnackbar";

/**
 * Page to create a new task
 */
function CreateTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const { createTaskMutation } = useTaskApi(setSnackbar);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if title or description is empty
    if (!title.trim() || !description.trim()) {
      setSnackbar({
        open: true,
        message: "Please fill in all fields",
        severity: "error",
      });
      return;
    }

    // Create a new task with default status
    createTaskMutation.mutate(
      { title, description },
      {
        onSuccess: () => {
          // Clear form
          setTitle("");
          setDescription("");
        },
      }
    );
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Order a dish 🍔
      </Typography>
      <Typography component="h1" mb={4} gutterBottom>
        Our restaurant only serves random dishes which takes ~30s to cook.
        <br />
        <br />
        Please give us your contact details below.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#251AFF",
              "&:hover": { backgroundColor: "#1f15cc" },
            }}
            size="medium"
            disabled={createTaskMutation.isPending}
          >
            {createTaskMutation.isPending ? "Ordering..." : "Order"}
          </Button>
        </Stack>
      </form>

      <NotificationSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </Box>
  );
}

export default CreateTask;

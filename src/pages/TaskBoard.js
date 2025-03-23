import { Box, Typography, Paper, Grid } from "@mui/material";
import { useState } from "react";
import NotificationSnackbar from "../components/NotificationSnackbar";
import Task from "../components/Task";
import { useTaskApi } from "../utils/useTaskApi";

/**
 * Page to display all tasks
 */
function TaskBoard({ tasks = [] }) {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const {
    runTaskMutation,
    pauseTaskMutation,
    resumeTaskMutation,
    cancelTaskMutation,
  } = useTaskApi(setSnackbar);

  const statuses = {
    NOT_STARTED: "Not started",
    IN_PROGRESS: "In progress",
    PAUSED: "Paused",
    CANCELLED: "Cancelled",
    COMPLETED: "Completed",
  };

  // Handle task actions
  const handleRunTask = (taskId) => {
    runTaskMutation.mutate({ taskId });
  };
  const handlePauseTask = (taskId) => {
    pauseTaskMutation.mutate({ taskId });
  };
  const handleResumeTask = (taskId) => {
    resumeTaskMutation.mutate({ taskId });
  };
  const handleCancelTask = (taskId) => {
    cancelTaskMutation.mutate({ taskId });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  // Group tasks by status
  const tasksByStatus = Object.keys(statuses).reduce((acc, status) => {
    acc[status] = tasks.filter((task) => task.status === status);
    return acc;
  }, {});

  return (
    <Box>
      <Typography variant="h4" mb={3}>
        Orders
      </Typography>

      <Grid container spacing={2}>
        {Object.keys(statuses).map((status) => (
          <Grid item sm={6} xs={12} md={2.4} key={status}>
            <Paper
              elevation={2}
              sx={{
                p: 2,
                height: "100%",
                minHeight: "70vh",
              }}
            >
              <Typography
                variant="h6"
                component="h2"
                textAlign="center"
                pb={1}
                borderBottom="1px solid #eee"
              >
                {statuses[status]}
              </Typography>

              <Box mt={2}>
                {tasksByStatus[status]?.length > 0 ? (
                  tasksByStatus[status].map((task) => (
                    <Task
                      key={task.id}
                      task={task}
                      handleRunTask={handleRunTask}
                      handlePauseTask={handlePauseTask}
                      handleResumeTask={handleResumeTask}
                      handleCancelTask={handleCancelTask}
                    />
                  ))
                ) : (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "center", mt: 2 }}
                  >
                    No tasks
                  </Typography>
                )}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <NotificationSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </Box>
  );
}

export default TaskBoard;

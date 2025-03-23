import { Card, CardContent, CardActions, Typography, Box } from "@mui/material";
import TaskResult from "./TaskResult";
import TaskActions from "./TaskActions";
import TaskProgress from "./TaskProgress";

function Task({
  task,
  handleRunTask,
  handlePauseTask,
  handleResumeTask,
  handleCancelTask,
}) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {task.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          mt={1}
          textOverflow="ellipsis"
          overflow="hidden"
        >
          {task.description}
        </Typography>

        {/* Progress bar */}
        {(task.status === "IN_PROGRESS" || task.status === "PAUSED") && (
          <TaskProgress task={task} />
        )}

        {/* Result */}
        {task.status === "COMPLETED" && task.result && (
          <>
            <TaskResult result={task.result} />
            <Box fontSize="0.7em" mt={2} opacity={0.8}>
              {formatDateTime(task.completedAt)}
            </Box>
          </>
        )}
      </CardContent>
      <CardActions>
        <TaskActions
          status={task.status}
          taskId={task.id}
          handleRunTask={handleRunTask}
          handlePauseTask={handlePauseTask}
          handleResumeTask={handleResumeTask}
          handleCancelTask={handleCancelTask}
        />
      </CardActions>
    </Card>
  );
}

function formatDateTime(dateString) {
  const date = new Date(dateString);

  // Format: "Mar 14, 2:30 PM"
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export default Task;

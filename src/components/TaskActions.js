import { IconButton, Tooltip } from "@mui/material";
import {
  PlayArrow as StartIcon,
  Pause as PauseIcon,
  Cancel as CancelIcon,
} from "@mui/icons-material";

/**
 * Renders different action buttons based on the task status
 */
function TaskActions({
  status,
  taskId,
  handleRunTask,
  handlePauseTask,
  handleResumeTask,
  handleCancelTask,
}) {
  switch (status) {
    case "NOT_STARTED":
    case "CANCELLED":
      return (
        <TaskActionButton
          title="Start"
          onClick={() => handleRunTask(taskId)}
          color="primary"
          icon={StartIcon}
        />
      );
    case "IN_PROGRESS":
      return (
        <>
          <TaskActionButton
            title="Pause"
            onClick={() => handlePauseTask(taskId)}
            color="primary"
            icon={PauseIcon}
          />
          <TaskActionButton
            title="Cancel"
            onClick={() => handleCancelTask(taskId)}
            color="error"
            icon={CancelIcon}
          />
        </>
      );
    case "PAUSED":
      return (
        <>
          <TaskActionButton
            title="Resume"
            onClick={() => handleResumeTask(taskId)}
            color="primary"
            icon={StartIcon}
          />
          <TaskActionButton
            title="Cancel"
            onClick={() => handleCancelTask(taskId)}
            color="error"
            icon={CancelIcon}
          />
        </>
      );
    case "COMPLETED":
      return null;
    default:
      return null;
  }
}

function TaskActionButton({ title, onClick, color, icon: Icon }) {
  return (
    <Tooltip title={title} arrow>
      <IconButton onClick={onClick} color={color}>
        <Icon />
      </IconButton>
    </Tooltip>
  );
}

export default TaskActions;

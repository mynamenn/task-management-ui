import { useState, useEffect } from "react";
import { LinearProgress, Box } from "@mui/material";

function TaskProgress({ task }) {
  const [progress, setProgress] = useState(0);

  const calculateProgress = () => {
    // If the task isn't in progress or paused, or there is no lastRunAt,
    // don't calculate progress.
    if (
      (task.status !== "IN_PROGRESS" && task.status !== "PAUSED") ||
      !task.lastRunAt
    )
      return 0;

    if (task.status === "PAUSED") {
      return (task.elapsedTime / task.duration) * 100;
    }

    // For running tasks, calculate the progress based on the lastRunAt
    // and the elapsed time.
    const startTime = new Date(task.lastRunAt).getTime();
    const currentTime = new Date().getTime();
    const elapsedTime = task.elapsedTime + currentTime - startTime;
    const progressPercent = (elapsedTime / task.duration) * 100;

    return Math.min(progressPercent, 100);
  };

  useEffect(() => {
    let interval;

    if (task.status === "IN_PROGRESS" || task.status === "PAUSED") {
      setProgress(calculateProgress());

      // Update progress every 1s if the task is in progress
      if (task.status === "IN_PROGRESS") {
        interval = setInterval(() => {
          setProgress(calculateProgress());
        }, 1000);
      }
    } else {
      setProgress(0);
    }

    // Cleanup interval on unmount or status change
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [task.status, task.elapsedTime]);

  return (
    <Box mt={2}>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: "rgba(37, 26, 255, 0.1)",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#251AFF",
            borderRadius: 4,
          },
        }}
      />
    </Box>
  );
}

export default TaskProgress;

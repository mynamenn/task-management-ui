import { Typography } from "@mui/material";

function TaskResult({ result }) {
  return (
    <Typography
      variant="body2"
      mt={1}
      p={1}
      color="success.main"
      borderRadius={1}
      sx={{
        backgroundColor: "rgba(0, 200, 0, 0.1)",
      }}
    >
      {result}
    </Typography>
  );
}

export default TaskResult;

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  runTask,
  pauseTask,
  resumeTask,
  cancelTask,
  createTask,
  fetchTasks,
} from "./taskService";

/**
 * Custom hooks to handle queries and mutations for task operations
 *
 * This includes fetching tasks, creating, running, pausing, resuming, cancelling and deleting tasks
 *
 * @param {function} setSnackbar - The function to set the snackbar state
 * @returns {object} - The query and mutations for the task operations
 */
export function useTaskApi(setSnackbar) {
  const queryClient = useQueryClient();
  const invalidateTasks = () => {
    queryClient.invalidateQueries({ queryKey: ["tasks"] });
  };

  const handleSuccess = (message) => {
    // Invalidate tasks to refetch tasks
    invalidateTasks();
    // Show success message
    setSnackbar({
      open: true,
      message,
      severity: "success",
    });
  };
  const handleError = (error) => {
    setSnackbar({
      open: true,
      message: `${error.message || "Unknown error"}`,
      severity: "error",
    });
  };

  const getTasksQuery = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
    refetchInterval: 5000, // Refetch every 5 seconds
    onError: (error) => {
      handleError(error);
    },
  });

  const runTaskMutation = useMutation({
    mutationFn: runTask,
    onSuccess: () => {
      handleSuccess("Order started");
    },
    onError: (error) => {
      handleError(error);
    },
  });

  const pauseTaskMutation = useMutation({
    mutationFn: pauseTask,
    onSuccess: () => {
      invalidateTasks();
      handleSuccess("Order paused");
    },
    onError: (error) => {
      handleError(error);
    },
  });

  const resumeTaskMutation = useMutation({
    mutationFn: resumeTask,
    onSuccess: () => {
      invalidateTasks();
      handleSuccess("Order resumed");
    },
    onError: (error) => {
      handleError(error);
    },
  });

  const cancelTaskMutation = useMutation({
    mutationFn: cancelTask,
    onSuccess: () => {
      invalidateTasks();
      handleSuccess("Order cancelled");
    },
    onError: (error) => {
      handleError(error);
    },
  });

  const createTaskMutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      invalidateTasks();
      handleSuccess("Order created!");
    },
    onError: (error) => {
      handleError(error);
    },
  });

  return {
    getTasksQuery,
    runTaskMutation,
    pauseTaskMutation,
    resumeTaskMutation,
    cancelTaskMutation,
    createTaskMutation,
  };
}

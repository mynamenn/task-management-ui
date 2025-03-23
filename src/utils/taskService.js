import axios from "axios";

const API_URL = "http://localhost:8000";
const api = axios.create({
  baseURL: API_URL,
});

// Intercept API failures and return a custom error message
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("Error:", error);
    let errorMessage = "An unexpected error occurred";

    if (error.response) {
      // Server returned an error response
      errorMessage =
        error.response.data.error || `Server error: ${error.response.status}`;
    } else if (error.request) {
      // No response from server
      errorMessage = "No response from server. Please check your connection.";
    } else {
      // Code error
      errorMessage = error.message;
    }

    const finalError = new Error(errorMessage);
    finalError.originalError = error;
    return Promise.reject(finalError);
  }
);

// GET /tasks to fetch all tasks
export const fetchTasks = async () => {
  try {
    const response = await api.get("/tasks");
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

// POST /tasks to create a new task
export const createTask = async (taskData) => {
  try {
    // Delay 1 second to task creation loading (For demo purposes only :))
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await api.post("/tasks", taskData);
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

// PUT /tasks/run/:taskId to run a task
export const runTask = async ({ taskId }) => {
  try {
    const response = await api.put(`/tasks/run/${taskId}`);
    return response.data;
  } catch (error) {
    console.error("Error updating task status:", error);
    throw error;
  }
};

// PUT /tasks/pause/:taskId to pause a task
export const pauseTask = async ({ taskId }) => {
  try {
    const response = await api.put(`/tasks/pause/${taskId}`);
    return response.data;
  } catch (error) {
    console.error("Error pausing task:", error);
    throw error;
  }
};

// PUT /tasks/resume/:taskId to resume a task
export const resumeTask = async ({ taskId }) => {
  try {
    const response = await api.put(`/tasks/resume/${taskId}`);
    return response.data;
  } catch (error) {
    console.error("Error resuming task:", error);
    throw error;
  }
};

// PUT /tasks/cancel/:taskId to cancel a task
export const cancelTask = async ({ taskId }) => {
  try {
    const response = await api.put(`/tasks/cancel/${taskId}`);
    return response.data;
  } catch (error) {
    console.error("Error canceling task:", error);
    throw error;
  }
};

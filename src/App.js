import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CreateTask from "./pages/CreateTask";
import TaskBoard from "./pages/TaskBoard";
import "./App.css";
import Navbar from "./components/Navbar";
import NotificationSnackbar from "./components/NotificationSnackbar";
import { useTaskApi } from "./utils/useTaskApi";

const NAV_ITEMS = [
  { text: "Submit an order", path: "/" },
  { text: "Orders", path: "/orders" },
];

function App() {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "error",
  });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { getTasksQuery } = useTaskApi(setSnackbar);
  const tasks = getTasksQuery.data || [];

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };
  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleCloseDrawer}>
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item.text}>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={handleCloseDrawer}
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <Navbar
          isMobile={isMobile}
          navItems={NAV_ITEMS}
          handleOpenDrawer={handleOpenDrawer}
        />
        <Drawer anchor="right" open={drawerOpen} onClose={handleCloseDrawer}>
          {drawer}
        </Drawer>

        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<CreateTask />} />
            <Route path="/orders" element={<TaskBoard tasks={tasks} />} />
          </Routes>
        </Container>

        <NotificationSnackbar
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={handleCloseSnackbar}
        />
      </Box>
    </Router>
  );
}

export default App;

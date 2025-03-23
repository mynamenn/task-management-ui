import { AppBar, Toolbar, IconButton, Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import FrontierLogo from "./FrontierLogo";

const Navbar = ({ isMobile, navItems, handleOpenDrawer }) => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#251AFF" }}>
      <Toolbar p={20}>
        <FrontierLogo />

        {isMobile ? (
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleOpenDrawer}
            sx={{ ml: "auto" }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: "flex", ml: "auto" }}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={Link}
                to={item.path}
                sx={{ ml: 2 }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

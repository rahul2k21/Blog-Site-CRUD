import React from "react";
import { useNavigate } from "react-router-dom"; 
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Navbar = () => {
  const navigate = useNavigate(); 

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "none",
        borderBottom: "2px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar sx={{ pl: 10, pr: 10, width: "100%" }}>
        {/* Mobile Menu Icon */}
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon sx={{ fontSize: 30 }} />
        </IconButton>

        {/* Desktop Menu (Left Side) */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, ml: 2 }}>
          {[
            { name: "Home", path: "/" },
            { name: "Features", path: "/features" },
            { name: "Diet Foods", path: "/diet-foods" },
            { name: "Restaurants", path: "/restaurants" },
            { name: "Kitchen Appliances", path: "/kitchen-appliances" },
            { name: "Recipe", path: "/recipe" },
          ].map((item) => (
            <Button
              key={item.name}
              color="inherit"
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                "&:hover": {
                  color: "green",
                },
              }}
              onClick={() => navigate(item.path)} 
            >
              {item.name}
            </Button>
          ))}
        </Box>

        {/* Right Side Search Icon */}
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit" onClick={() => navigate("/search-page")}>
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

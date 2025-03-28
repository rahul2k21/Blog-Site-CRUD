import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import bitesdigestlogo from "../assets/bitesdigestlogo.png";

function Menubar() {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#fff", boxShadow: "none", padding: "5px 5px" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Clickable Logo for Home Navigation */}
        <Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() => navigate("/")} // Redirect to home page
        >
          <img
            src={bitesdigestlogo}
            alt="Bites Digest Logo"
            style={{ height: "58px" }}
          />
        </Box>

        <Box>
          <Button
            variant="outlined"
            sx={{
              color: "#000",
              borderColor: "rgba(26, 26, 46, 0.6)",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
                borderColor: "black",
              },
            }}
            onClick={() => navigate("/contact-page")}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Menubar;

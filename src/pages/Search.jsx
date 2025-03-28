import React from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Search = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "rgba(255, 255, 255, 0.9)", // Reduced white opacity
        zIndex: 999,
        textAlign: "center",
        gap: 2,
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          color: "rgba(255, 255, 255, 0.7)", // Reduced white opacity
        }}
        onClick={() => navigate("/")}
      >
        <CloseIcon sx={{ fontSize: 40, fontWeight: "bold" }} />
      </IconButton>

      <Typography
        sx={{
          fontSize: "50px",
          fontWeight: "bold",
          color: "rgba(255, 255, 255, 0.85)",
        }}
      >
        Search...
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          borderTop: "2px solid rgba(255, 255, 255, 0.2)",
          paddingTop: "15px",
          fontWeight: "normal",
          color: "rgba(255, 255, 255, 0.6)", // Reduced white opacity further
        }}
      >
        Type above and press Enter to search. Press Esc to cancel.
      </Typography>
    </Box>
  );
};

export default Search;

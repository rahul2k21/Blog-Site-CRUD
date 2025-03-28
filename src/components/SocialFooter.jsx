import React from "react";
import { Box, Stack, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, Pinterest } from "@mui/icons-material";

function SocialFooter() {
  // Define social media links
  const socialLinks = {
    Facebook: "https://www.facebook.com",
    Twitter: "https://www.twitter.com",
    Instagram: "https://www.instagram.com",
    Pinterest: "https://www.pinterest.com",
  };

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#FFFFFF",
        p: 10,
        textAlign: "center",
      }}
    >
      {/* Social Icons Section */}
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
        {Object.entries(socialLinks).map(([name, url], index) => {
          const IconComponent =
            name === "Facebook"
              ? Facebook
              : name === "Twitter"
              ? Twitter
              : name === "Instagram"
              ? Instagram
              : Pinterest;

          return (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }} // Removes underline from links
            >
              <IconButton
                sx={{
                  color: "#FFFFFF",
                  backgroundColor: "rgba(255, 255, 255, 0.2)", // Light background
                  borderRadius: "50%", // Fully rounded
                  width: 40,
                  height: 40,
                  transition: "opacity 0.3s ease, background-color 0.3s ease",
                  "&:hover": {
                    opacity: 0.7,
                    backgroundColor: "rgba(255, 255, 255, 0.3)", // Darker on hover
                  },
                }}
              >
                <IconComponent fontSize="small" />
              </IconButton>
            </a>
          );
        })}
      </Stack>

      {/* Navigation Links Section */}
      <Stack direction="row" spacing={3} justifyContent="center" sx={{ mb: 2 }}>
        {["ABOUT US", "DISCLAIMER", "SITEMAP", "CONTACT US"].map(
          (item, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{
                cursor: "pointer",
                transition: "opacity 0.3s ease",
                "&:hover": { opacity: 0.7 },
              }}
            >
              {item}
            </Typography>
          )
        )}
      </Stack>

      {/* Copyright Section */}
      <Typography
        variant="body2"
        sx={{
          color: "rgba(255, 255, 255, 0.7)", // White with 70% opacity
          mt: 4, // Adds margin-top
        }}
      >
        Copyright © 2025 - Bitesdigest. All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default SocialFooter;

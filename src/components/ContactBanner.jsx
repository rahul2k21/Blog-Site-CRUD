import React from "react";
import { Stack, IconButton, Typography, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

export default function ContactBanner() {
  const socialLinks = {
    Facebook: "https://www.facebook.com",
    Twitter: "https://www.twitter.com",
    Instagram: "https://www.instagram.com",
    Pinterest: "https://www.pinterest.com",
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 2, textAlign: "left" }}
      >
        Contact Us
      </Typography>

      <Typography
        variant="body1"
        sx={{ mb: 2, textAlign: "left", color: "rgba(0, 0, 0, 0.7)" }}
      >
        bitesdigest believes consistent communication is the key to great
        partnerships and collaborations, and our 24×7 support team is available
        at your service. Feel free to contact us anytime with just a simple
        email at <strong>hello@bitesdigest.com</strong>
      </Typography>

      <Typography
        variant="body1"
        sx={{ mb: 2, textAlign: "left", color: "rgba(0, 0, 0, 0.7)" }}
      >
        Or get in touch via our social media handles:
      </Typography>

      {/* ✅ Social Media Icons (Black Icon Color) */}
      <Stack direction="row" spacing={2} alignItems="center">
        {Object.entries(socialLinks).map(([name, url], index) => {
          const IconComponent =
            name === "Facebook"
              ? FacebookIcon
              : name === "Twitter"
              ? TwitterIcon
              : name === "Instagram"
              ? InstagramIcon
              : PinterestIcon;

          return (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer">
              <IconButton
                sx={{
                  color: "#000", 
                  backgroundColor: "#fff", 
                  borderRadius: "50%",
                  width: 45,
                  height: 45,
                  transition: "background-color 0.3s ease, color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#ddd",
                    color: "#000", 
                  },
                }}
              >
                <IconComponent fontSize="medium" />
              </IconButton>
            </a>
          );
        })}
      </Stack>
      <Typography
        variant="body1"
        sx={{ mb: 2, textAlign: "left", color: "rgba(0, 0, 0, 0.7)" }}
      >
        Our team replies within 48 hours of communication.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 2,
          textAlign: "left",
          color: "rgba(0, 0, 0, 0.7)", 
        }}
      >
        Looking forward to some great partnerships with you. We hope to grow
        together with all our clients.
      </Typography>
    </Box>
  );
}

import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import bitesdigestlogo from "../assets/bitesdigestlogo.png";
import securityvpn from "../assets/securityvpn.jpg";
import nordvpn from "../assets/nordvpn.jpg";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Column on tablets, row on larger screens
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", md: "center" },
        padding: "35px",
        backgroundColor: "#002925",
        gap: { xs: "20px", md: "40px" }, // Adjust gap for responsiveness
      }}
    >
      {/* Left Section */}
      <Stack
        spacing={2}
        maxWidth="500px"
        sx={{ color: "rgba(255, 255, 255, 0.6)" }}
      >
        <img
          src={bitesdigestlogo}
          alt="Bitesdigest Logo"
          style={{ width: "250px" }}
        />
        <Typography variant="body1">
          Bitesdigest was established with the purpose of uniting food lovers
          from around the globe in one location. It’s also about connecting
          people and creating memorable experiences. From local street eats to
          Michelin-starred dining establishments, we’ve got everything covered.
        </Typography>
        <Typography variant="body2">
          Email Us: <strong>hello@bitesdigest.com</strong>
        </Typography>
      </Stack>

      {/* Middle Section */}
      <Stack spacing={1} textAlign="left" sx={{ color: "#FFFFFF" }}>
        <Typography>Our Policy</Typography>
        {[
          "Privacy Policy",
          "Affiliate Policy",
          "Cookie Policy",
          "Terms And Conditions",
        ].map((policy, index) => (
          <Typography
            key={index}
            variant="body2"
            sx={{
              transition: "opacity 0.1s ease-in-out",
              "&:hover": { opacity: 0.7 },
            }}
          >
            {policy}
          </Typography>
        ))}
      </Stack>

      {/* Right Section */}
      <Stack spacing={1} textAlign="left" sx={{ color: "#FFFFFF" }}>
        <Typography variant="h6">Our Picks</Typography>

        {/* First Item */}
        <Stack direction="row" alignItems="flex-start" spacing={2}>
          <Box
            component="img"
            src={nordvpn}
            alt="NordVPN"
            sx={{ width: 130, height: 70, borderRadius: "4px" }}
          />
          <Typography
            variant="body2"
            sx={{
              flex: 1,
              lineHeight: 1.4,
              maxWidth: 250,
              transition: "color 0.3s ease-in-out",
              "&:hover": { color: "#006400", cursor: "pointer" },
            }}
          >
            NordVPN Vs Kaspersky VPN: Choosing the Best VPN Of 2024
          </Typography>
        </Stack>

        {/* Second Item */}
        <Stack
          direction="row"
          alignItems="flex-start"
          spacing={2}
          sx={{ borderTop: "1px solid rgba(204, 204, 204, 0.5)", mt: 1, pt: 1 }}
        >
          <Box
            component="img"
            src={securityvpn}
            alt="Security VPN"
            sx={{ width: 130, height: 70, borderRadius: "4px" }}
          />
          <Typography
            variant="body2"
            sx={{
              flex: 1,
              lineHeight: 1.4,
              maxWidth: 250,
              transition: "color 0.3s ease-in-out",
              "&:hover": { color: "#006400", cursor: "pointer" },
            }}
          >
            Stay Safe Online With NordVPN Security Features
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Footer;

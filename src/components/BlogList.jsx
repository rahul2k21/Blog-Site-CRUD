import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";

const BlogList = ({ blogs }) => {
  const navigate = useNavigate();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding={3}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/add")}
        sx={{ mb: 3 }}
      >
        Add Blog
      </Button>

      <Grid container spacing={3} justifyContent="center">
        {blogs.map((blog) => (
          <Grid
            item
            xs={12} // Full width on small screens (mobile)
            sm={6} // Two cards per row on tablets
            md={4} // Three cards per row on medium screens and larger
            key={blog.id}
            display="flex"
            justifyContent="center"
          >
            <Card
              onClick={() => navigate(`/blog/${blog.id}`)}
              sx={{
                cursor: "pointer",
                width: "100%",
                maxWidth: 350,
                display: "flex",
                flexDirection: "column",
                mx: "auto",
              }}
            >
              <CardMedia
                component="img"
                image={blog.image}
                alt={blog.title || "No Image Available"}
                sx={{ objectFit: "cover", aspectRatio: "16/9" }}
              />
              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.description
                    ? blog.description.slice(0, 80)
                    : "No description available"}
                  ...
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogList;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@mui/material";

const BlogDetails = ({ blogs, setBlogs }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const foundBlog = blogs.find((b) => b.id === parseInt(id));

  const [title, setTitle] = useState(foundBlog?.title || "");
  const [description, setDescription] = useState(foundBlog?.description || "");

  useEffect(() => {
    if (!foundBlog) {
      navigate("/"); 
    }
  }, [foundBlog, navigate]);

  // Handle Save
  const handleSave = () => {
    setBlogs(
      blogs.map((b) =>
        b.id === foundBlog.id ? { ...b, title, description } : b
      )
    );
    navigate("/");
  };

  // Handle Delete
  const handleDelete = () => {
    setBlogs(blogs.filter((b) => b.id !== foundBlog.id));
    navigate("/");
  };

  if (!foundBlog) {
    return (
      <div style={{ padding: 20, textAlign: "center" }}>
        <Typography variant="h5" color="error">
          Blog not found!
        </Typography>
        <Button variant="contained" onClick={() => navigate("/")}>
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20, maxWidth: 350, margin: "0 auto" }}>
      <Card>
        <CardMedia
          component="img"
          height="200" // Reduced image height
          image={foundBlog.image}
          alt={foundBlog.title}
          style={{ objectFit: "cover" }} // Prevents distortion
        />
        <CardContent>
          <TextField
            label="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Description"
            fullWidth
            multiline
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            margin="normal"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Button variant="contained" color="primary" onClick={handleSave}>
              Edit
            </Button>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Back to Home Button */}
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <Button variant="outlined" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default BlogDetails;

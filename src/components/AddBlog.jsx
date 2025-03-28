import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Card, CardContent } from "@mui/material";

const AddBlog = ({ setBlogs }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = () => {
    if (!title || !description || !image) return;
    setBlogs((prevBlogs) => [
      ...prevBlogs,
      { id: prevBlogs.length + 1, title, description, image },
    ]);
    navigate("/");
  };

  return (
    <div style={{ padding: 20 }}>
      <Card>
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
          <TextField
            label="Image URL"
            fullWidth
            value={image}
            onChange={(e) => setImage(e.target.value)}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            style={{ marginTop: 10 }}
          >
            Add Blog
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddBlog;

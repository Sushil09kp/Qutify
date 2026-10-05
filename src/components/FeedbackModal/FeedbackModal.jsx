import React, { useState } from "react";
import { Modal, Box, TextField, Typography } from "@mui/material";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  maxWidth: "90vw",
  bgcolor: "#fff",
  borderRadius: "10px",
  p: 3,
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

const emptyForm = { name: "", email: "", subject: "", description: "" };

function FeedbackModal({ open, onClose }) {
  const [form, setForm] = useState(emptyForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(emptyForm);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box component="form" sx={boxStyle} onSubmit={handleSubmit}>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Feedback
        </Typography>
        <TextField label="Full name" name="name" value={form.name} onChange={handleChange} required size="small" />
        <TextField label="Email ID" name="email" type="email" value={form.email} onChange={handleChange} required size="small" />
        <TextField label="Subject" name="subject" value={form.subject} onChange={handleChange} required size="small" />
        <TextField label="Description" name="description" value={form.description} onChange={handleChange} required multiline rows={4} size="small" />
        <button
          type="submit"
          style={{
            background: "#121212",
            color: "#34c94b",
            border: "none",
            borderRadius: "8px",
            padding: "10px",
            cursor: "pointer",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Submit Feedback
        </button>
      </Box>
    </Modal>
  );
}

export default FeedbackModal;
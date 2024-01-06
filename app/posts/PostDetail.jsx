"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "@mui/material/Modal";
import { FaEye } from "react-icons/fa";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PostDetail = ({ post }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>
        <FaEye />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 className="text-yellow-500">{post.title}</h2>
          <p className="text-white text-sm">Created by: User {post.userId}</p>
          <p className="text-white mt-6">{post.body}</p>
        </Box>
      </Modal>
    </div>
  );
};

export default PostDetail;

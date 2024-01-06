"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { MdDelete } from "react-icons/md";
import axios from "axios";

const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";
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

const DeletePost = ({ id, setPosts, posts }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const router = useRouter();

  const handleDelete = async (postId) => {
    await axios.delete(apiEndPoint + "/" + postId);
    setPosts(posts.filter((p) => p.id !== postId));
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen}>
        <MdDelete />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 className="text-white">Are you sure to delete Post {id}?</h2>
          <div className="flex gap-2">
            <button className="btn-danger" onClick={() => handleDelete(id)}>
              Delete
            </button>
            <button className="btn" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default DeletePost;

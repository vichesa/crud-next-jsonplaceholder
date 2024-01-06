"use client";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "@mui/material/Modal";
import { MdEdit } from "react-icons/md";
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

const EditPost = ({ post, setPosts, posts }) => {
  // console.log(post);
  // const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [userId, setUserId] = useState(post.userId);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // const maxId = Math.max(...posts.map((post) => post.id), 0);
    post.title = title;
    post.body = body;
    post.userId = userId;

    await axios.put(apiEndPoint + "/" + post.id);
    const postsClone = [...posts];
    const index = postsClone.indexOf(post);
    postsClone[index] = { ...post };
    setPosts(postsClone);

    router.refresh();
    router.push("/posts");
    setIsLoading(false);
    setTitle("");
    setBody("");
    setUserId("");
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen}>
        <MdEdit />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleUpdate} className="w-full">
            <h2 className="text-white mb-6">Edit Post {post.id}</h2>
            <div className="mb-6">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Javascript"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="body">Body</label>
              <textarea
                type="text"
                placeholder="A programming langauge ..."
                name="body"
                className="bg-[#18191E] border border-[#33353F] hover:border-yellow-600 text-gray-100 text-sm rounded-lg block w-full p-2.5"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="userId">User Id</label>
              <input
                type="number"
                placeholder="Javascript"
                name="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>

            {isLoading ? (
              <button
                type="submit"
                disabled
                className="bg-yellow-200  text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
                Updating...
              </button>
            ) : (
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
                Update
              </button>
            )}
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default EditPost;

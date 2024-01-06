// import { useState } from "react";
import PostsSection from "./PostsSection";
import AddPost from "./AddPost";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditPost from "./EditPost";
import DeletePost from "./DeletePost";

// const getPosts = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch topics");
//     }

//     return res.json();
//   } catch (error) {
//     console.log("Error loading topics: ", error);
//   }
// };

export default function PostList() {
  // const posts = await getPosts();

  return (
    <div className="flex flex-col gap-6">
      {/* <AddPost /> */}
      <PostsSection />
    </div>
  );
}

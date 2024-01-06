"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditPost from "./EditPost";
import DeletePost from "./DeletePost";
import PostDetail from "./PostDetail";
import AddPost from "./AddPost";

export const dynamic = "force-dynamic";

const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";

const PostsSection = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setPosts(res);
      if (posts.length === 0)
        return <h2> there are no post in the Database </h2>;
    };
    getPosts();
  }, []);

  const column = [
    {
      field: "id",
      headerName: "No",
      headerClassName: "super-app-theme--header",
      width: 50,
    },
    {
      field: "title",
      headerName: "Title",
      headerClassName: "super-app-theme--header",
      width: 150,
    },
    {
      field: "body",
      headerName: "Body",
      headerClassName: "super-app-theme--header",
      width: 250,
    },
    {
      field: "userId",
      headerName: "User",
      headerClassName: "super-app-theme--header",
      width: 80,
    },
    {
      field: "action",
      headerName: "Action",
      headerClassName: "super-app-theme--header",
      width: 100,
      renderCell: (val) => {
        // console.log("value", val);
        return (
          <div className="flex gap-2">
            <PostDetail post={val.row} className="w-6" />
            <EditPost
              post={val.row}
              setPosts={setPosts}
              posts={posts}
              className="w-6"
            />
            <DeletePost
              id={val.row.id}
              setPosts={setPosts}
              posts={posts}
              className="w-6"
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <AddPost setPosts={setPosts} posts={posts} />
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={posts}
          columns={column}
          sx={{
            "& .super-app-theme--header": {
              backgroundColor: "#2F4F4F",
              color: "white",
            },
            "& .MuiDataGrid-cell:hover": {
              color: "primary.main",
            },
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
        />
      </Box>
    </div>
  );
};

export default PostsSection;

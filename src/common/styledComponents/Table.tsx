import React from "react";
import { useGetPosts } from "../../api/post";
import { log } from "console";
import { DataGrid, GridColDef, GridValueGetter } from "@mui/x-data-grid";
import { Box } from "@mui/material";

interface Props {}

function Table(props: Props) {
  const {} = props;

  const { data: posts = [] } = useGetPosts();
  console.log(posts);

  const columns: GridColDef[] = [
    {
      field: "userId",
      headerName: "User Id",
      width: 130,
    },
    { field: "title", headerName: "Title", width: 200 },
    {
      field: "body",
      headerName: "Body",
      width: 160,
    },
  ];

  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={posts} columns={columns} getRowId={(row) => row.id} pageSizeOptions={[25,50,100]} />
      </div>
    </>
  );
}

export default Table;

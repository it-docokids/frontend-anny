import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

export default function PaginationBlog(props: {
  count: number;
  lengthBlogItem: number;
}) {
  const count: number = Math.round(props.count / 4);
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  let i = count * (page - 1);
  let f = i + props.lengthBlogItem - page;
  return (
    <Grid container justifyContent="center" alignContent={"center"}>
      <Grid item xs={12}>
        <Stack spacing={2} sx={{ mt: 3 }}>
          <Pagination
            count={count}
            variant="outlined"
            sx={{ display: "flex", justifyContent: "center" }}
            onChange={handleChange}
          />
        </Stack>
      </Grid>
    </Grid>
  );
}

import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

export default function PaginationBlog(props: {
  count: number;
  lengthBlogItem: number;
  handleClick: any;
}) {
  const [page, setPage] = React.useState(1);

  let start = 4 * (page - 1);
  let end = start + 4;
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    props.handleClick(start, end, page);
  };
  return (
    <Grid container justifyContent="center" alignContent={"center"}>
      <Grid item xs={12}>
        <Stack spacing={2} sx={{ mt: 3 }}>
          <Pagination
            count={Math.ceil(props.count / 4)}
            variant="outlined"
            sx={{ display: "flex", justifyContent: "center" }}
            onChange={handleChange}
          />
        </Stack>
      </Grid>
    </Grid>
  );
}

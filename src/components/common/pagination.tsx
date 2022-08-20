import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

export default function PaginationBlog(props: { count: number }) {
  const count: number = Math.round(props.count / 5);
  return (
    <Grid container justifyContent="center" alignContent={"center"}>
      <Grid item xs={12}>
        <Stack spacing={2} sx={{ mt: 3 }}>
          <Pagination
            count={count}
            variant="outlined"
            sx={{ display: "flex", justifyContent: "center" }}
          />
        </Stack>
      </Grid>
    </Grid>
  );
}

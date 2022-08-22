import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Progress(props: { marginT: number }) {
  return (
    <Box
      sx={{
        display: "flex",
        margin: "auto",
      }}
    >
      <CircularProgress
        sx={{ color: "#20c997", mt: props.marginT, mb: props.marginT }}
        size={50}
      />
    </Box>
  );
}

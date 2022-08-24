import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Container from "@mui/material/Container";
const Arrow = (props: any) => {
  const [showScroll, setShowScroll] = useState(false);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  return (
    <Container sx={{ sm: { display: "none" } }}>
      <IconButton
        onClick={scrollTop}
        sx={{
          display: showScroll ? "" : "none",

          zIndex: 100,
          top: "90%",
          left: "90%",
          backgroundColor: "#18b4b0",
          color: "black",
          border: "1px solid white",

          position: "fixed",
        }}
      >
        <Icon fontSize="small" sx={{ color: "white" }}>
          navigation_icon
        </Icon>
      </IconButton>
    </Container>
  );
};
export default Arrow;

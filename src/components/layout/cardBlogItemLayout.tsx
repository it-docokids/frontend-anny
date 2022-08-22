import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectId } from "../../store/store";
import { DataBlog } from "../../services/blogServices";
import { blogs } from "../../types/api";
import CardMedia from "@mui/material/CardMedia";
import imagen from "../../assets/blog_vacuna.png";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
export default function CardBlogItemLayout() {
  const [article, setArticle] = useState<blogs[]>([]);
  let id = useSelector(selectId);
  useEffect(() => {
    DataBlog.getArticle(id)
      .then((response) => {
        setArticle(response);
        console.log(article);
      })
      .catch((err: any) => {});
    return () => {};
  }, []);
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      maxWidth="1320px"
      sx={{ backgroundColor: "white" }}
    >
      {" "}
      <Grid container sx={{ mt: 10 }}>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ color: "#20c997", mb: "8px" }}>
            Lo que estamos conversando
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              fontSize: "2.5rem",
              color: "#262B47",
              mb: "48px",
            }}
          >
            Blog
          </Typography>
        </Grid>
      </Grid>
      <Card
        sx={{
          borderRadius: "10px",
          height: "100% !important",
        }}
      ></Card>
    </Grid>
  );
}

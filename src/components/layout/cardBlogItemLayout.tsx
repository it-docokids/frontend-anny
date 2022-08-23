import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectId } from "../../store/store";
import { DataBlog } from "../../services/blogServices";
import { blogItem } from "../../types/api";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Progress from "../common/progress";
export default function CardBlogItemLayout() {
  const [article, setArticle] = useState<blogItem[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  let id = useSelector(selectId);
  useEffect(() => {
    DataBlog.getArticle(id)
      .then((response) => {
        setArticle(response);
        console.log(article[0].content, "Data");
      })
      .catch((err: any) => {
        setIsError(true);
      });
    return () => {};
  }, []);
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      maxWidth="1320px"
      sx={{ backgroundColor: "white", height: "auto" }}
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
        <>
          {isError ? (
            <Grid item xs={12}>
              Oops, ha ocurrido un error!
            </Grid>
          ) : article.length ? (
            article.map((item: blogItem, index: number) => <></>)
          ) : (
            <Progress marginT={12} />
          )}
        </>
      </Grid>
    </Grid>
  );
}

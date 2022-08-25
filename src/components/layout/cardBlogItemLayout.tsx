import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectId } from "../../store/store";
import { DataBlog } from "../../services/blogServices";
import { blogItem } from "../../types/api";
import blogImages from "../../types/images";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Progress from "../common/progress";
export default function CardBlogItemLayout() {
  const [article, setArticle] = useState<blogItem[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  function htmlTag(item: string) {
    var temp = document.createElement("div");
    temp.innerHTML = item;
    var htmlObject = temp.firstChild;
    return htmlObject;
  }
  let id = useSelector(selectId);

  useEffect(() => {
    DataBlog.getArticle(id)
      .then((response) => {
        setArticle(response);
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
      alignContent="center"
      sx={{
        backgroundColor: "white",
        paddingButton: "192px",
        textAlign: "center",
        height: "100%",
      }}
    >
      {" "}
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ color: "#18b4b0", mb: "8px" }}>
            Blog
          </Typography>
        </Grid>

        <>
          {isError ? (
            <Grid item xs={12}>
              Oops, ha ocurrido un error!
            </Grid>
          ) : article.length ? (
            article.map((item: blogItem, index: number) => (
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "center",
                    fontWeight: "800",
                    color: "#262B47",
                  }}
                >
                  {item.title}
                </Typography>
                <img
                  src={blogImages[index]}
                  id="image-article"
                  style={{ borderRadius: "10px" }}
                />{" "}
                <Typography
                  sx={{ textAlign: "justify" }}
                  id="content-blog-item"
                >
                  {item.content}
                </Typography>
              </Grid>
            ))
          ) : (
            <Progress marginT={12} />
          )}
        </>
      </Grid>
    </Grid>
  );
}

import React, { useEffect, useState } from "react";
import CardBlog from "../common/cardBlog";
import Grid from "@mui/material/Grid";
import imagen from "../../assets/blog_pico.png";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PaginationBlogs from "../common/pagination";
import { DataBlog } from "../../services/blogServices";
import { blogs } from "../../types/api";
import blogImages from "../../types/images";
export default function CardBlogLayout() {
  const [blogItems, setBlogItems] = useState<blogs[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  useEffect(() => {
    DataBlog.getItemsBlog()
      .then((response) => {
        console.log(response, "data:");
        setBlogItems(response);
        console.log(blogItems, "variable de estado");
      })
      .catch((err: any) => {
        setIsError(true);
      });
    return () => {};
  }, []);
  return (
    <Grid container>
      {" "}
      <Grid container sx={{ mt: 10 }}>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ color: "#20c997" }}>
            Lo que estamos conversando
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 800, fontSize: "2.5rem", color: "#262B47" }}
          >
            Blog
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
      >
        <>
          {isError ? (
            <Grid item xs={12}>
              Oops, ha ocurrido un error!
            </Grid>
          ) : (
            blogItems.map((item: blogs, index: number) => (
              <>
                {
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <CardBlog
                      id={item.id}
                      title={item.title}
                      image={blogImages[index]}
                      author={item.author}
                      created_at={item.created_at}
                      intro={item.intro}
                    />
                  </Grid>
                }
              </>
            ))
          )}
        </>
      </Grid>
      <Grid item xs={12}>
        {" "}
        <PaginationBlogs count={5} />
      </Grid>
    </Grid>
  );
}

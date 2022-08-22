import React, { useEffect, useState } from "react";
import CardBlog from "../common/cardBlog";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PaginationBlogs from "../common/pagination";
import { DataBlog } from "../../services/blogServices";
import { blogs } from "../../types/api";
import blogImages from "../../types/images";
import Progress from "../common/progress";

export default function CardBlogLayout() {
  const [blogItems, setBlogItems] = useState<blogs[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<Boolean>(false);
  let start, end;
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
      <Grid container direction="row" sx={{ maxWidth: "920px" }} spacing={3}>
        <>
          {isError ? (
            <Grid item xs={12}>
              Oops, ha ocurrido un error!
            </Grid>
          ) : blogItems.length ? (
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
          ) : (
            <Progress marginT={12} />
          )}
        </>
      </Grid>
      <Grid item xs={12}>
        {" "}
        <PaginationBlogs count={8} lengthBlogItem={blogItems.length} />
      </Grid>
    </Grid>
  );
}

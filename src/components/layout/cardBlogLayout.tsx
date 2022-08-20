import React from "react";
import CardBlog from "../common/cardBlog";
import Grid from "@mui/material/Grid";
import imagen from "../../assets/blog_pico.png";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PaginationBlogs from "../common/pagination";
export default function CardBlogLayout() {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 900,
        flexGrow: 1,
        boxShadow: "none",
      }}
    >
      {" "}
      <Grid
        container
        flexDirection="row"
        spacing={3}
        alignItems="stretch"
        justifyContent="center"
        alignContent={"center"}
      >
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
        <Grid item xs={12} sm={6} md={6}>
          <CardBlog
            id={0}
            image={imagen}
            title={" ¡Este pico está terrible! "}
            intro={
              " Soy pediatra y cofundadora de Docokids, llevo escuchando sobre gripas muchos años y he vivido picos respiratorios en el invierno de Estados Unidos. Puedo decir ¡este pico respiratorio en Colombia, está terrible! "
            }
            author={{ first_name: "Natalia", last_name: "Cano" }}
            created_at={"01/02"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <CardBlog
            id={0}
            image={imagen}
            title={" ¡Este pico está terrible! "}
            intro={
              " Soy pediatra y cofundadora de Docokids, llevo escuchando sobre gripas muchos años y he vivido picos respiratorios en el invierno de Estados Unidos. Puedo decir ¡este pico respiratorio en Colombia, está terrible! "
            }
            author={{ first_name: "Natalia", last_name: "Cano" }}
            created_at={"01/02"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <CardBlog
            id={0}
            image={imagen}
            title={" ¡Este pico está terrible! "}
            intro={
              " Soy pediatra y cofundadora de Docokids, llevo escuchando sobre gripas muchos años y he vivido picos respiratorios en el invierno de Estados Unidos. Puedo decir ¡este pico respiratorio en Colombia, está terrible! "
            }
            author={{ first_name: "Natalia", last_name: "Cano" }}
            created_at={"01/02"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <CardBlog
            id={0}
            image={imagen}
            title={" ¡Este pico está terrible! "}
            intro={
              " Soy pediatra y cofundadora de Docokids, llevo escuchando sobre gripas muchos años y he vivido picos respiratorios en el invierno de Estados Unidos. Puedo decir ¡este pico respiratorio en Colombia, está terrible! "
            }
            author={{ first_name: "Natalia", last_name: "Cano" }}
            created_at={"01/02"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <CardBlog
            id={0}
            image={imagen}
            title={" ¡Este pico está terrible! "}
            intro={
              " Soy pediatra y cofundadora de Docokids, llevo escuchando sobre gripas muchos años y he vivido picos respiratorios en el invierno de Estados Unidos. Puedo decir ¡este pico respiratorio en Colombia, está terrible! "
            }
            author={{ first_name: "Natalia", last_name: "Cano" }}
            created_at={"01/02"}
          />
        </Grid>
      </Grid>
      <PaginationBlogs count={5} />
    </Paper>
  );
}

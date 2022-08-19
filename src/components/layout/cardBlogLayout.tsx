import React from "react";
import CardBlog from "../common/cardBlog";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import imagen from "../../assets/blog_pico.png";
import Paper from "@mui/material/Paper";
export default function CardBlogLayout() {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 960,
        flexGrow: 1,
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
    </Paper>
  );
}

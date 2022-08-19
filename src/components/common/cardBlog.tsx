import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Icon } from "@mui/material";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { blogs } from "../../types/api";
import { Link } from "react-router-dom";
export default function CardBlog(props: blogs) {
  return (
    <Card
      sx={{
        maxWidth: 420,
        borderRadius: "10px",
        fontFamily: `"Heebo",sansSerif'`,
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt={props.title}
        sx={{ height: "auto !important" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <b>{props.title}</b>
        </Typography>
        <Typography variant="subtitle2" color="text.primary">
          <Link to="#">
            <i>
              {props.author.first_name} {props.author.last_name}-
              {props.created_at}
            </i>
          </Link>
        </Typography>

        <Icon sx={{ color: "#919294" }}>visibility_outlined_icon</Icon>
        <Typography variant="subtitle1" color="text.secondary">
          {props.intro}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          color="primary"
          sx={{
            color: "white",
            background: "#18b4b0",
            borderRadius: "10px",
            padding: ".375rem .75rem",
            textTransform: "capitalize",
          }}
        >
          Leer más
        </Button>
      </CardActions>
    </Card>
  );
}

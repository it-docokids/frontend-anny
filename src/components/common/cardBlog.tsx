import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { blogs } from "../../types/api";

export default function CardBlog(props: blogs) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: "10px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          //image={props.image}
          alt={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.author.first_name} {props.author.last_name}-
            {props.created_at}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.intro}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Leer más
        </Button>
      </CardActions>
    </Card>
  );
}

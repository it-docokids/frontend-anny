import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Icon } from "@mui/material";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { blogs } from "../../types/api";
import Grid from "@mui/material/Grid";
import { updateID, updateView } from "../../store/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectId } from "../../store/store";
import { Link } from "react-router-dom";
export default function CardBlog(props: blogs) {
  const dispatch = useDispatch();
  let id = useSelector(selectId);
  console.log(id, "redux");

  return (
    <Card
      sx={{
        borderRadius: "10px",
        height: "100% !important",
      }}
    >
      <CardMedia component="img" image={props.image} alt={props.title} />
      <Grid container>
        <Grid item xs={12}>
          {" "}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <b>{props.title}</b>
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.primary"
              sx={{ textTransform: "capitalize !important" }}
            >
              <i>
                {props.author.first_name} {props.author.last_name} -
              </i>

              {props.created_at}
            </Typography>

            <Icon sx={{ color: "#919294" }}>visibility_outlined_icon</Icon>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ fontWeight: "400" }}
            >
              {props.intro}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12}>
          <CardActions>
            <Link to={`/blog`} style={{ textDecoration: "none !important" }}>
              {" "}
              <Button
                size="small"
                sx={{
                  color: "white",
                  background: "#18b4b0",
                  borderRadius: "10px",
                  padding: ".375rem .75rem",
                  textTransform: "capitalize",
                  fontSize: "0.9rem",
                  xs: { width: "100%" },
                }}
                onClick={() => {
                  dispatch(updateID(props.id));
                  dispatch(updateView());
                }}
              >
                Leer más
              </Button>
            </Link>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}

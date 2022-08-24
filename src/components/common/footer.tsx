import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import figure from "../../assets/figure.svg";
import icon_1 from "../../assets/icon-instagram.png";
import icon_2 from "../../assets/icon-tik-tok.png";
import icon_3 from "../../assets/icon-facebook.png";
import icon_4 from "../../assets/icon-youtube.png";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Icon } from "@mui/material";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
interface State {
  text: string;
}
export default function Footer() {
  const [values, setValues] = React.useState<State>({
    text: "",
  });
  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  return (
    <Grid
      container
      sx={{
        backgroundImage: `url(${figure})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        height: "650px",
        backgroundColor: "#18b4b0",
        pt: "192px",
        pr: "48px",
        pl: "48px",
      }}
    >
      <Grid
        container
        alignContent="center"
        sx={{
          color: "white",

          sx: { textAlign: "center" },
        }}
      >
        <Grid item xs={12} sm={12} md={4} sx={{ fontWeight: 700 }}>
          <Typography variant="h6"> Encuentranos en:</Typography>
          <IconButton aria-label="f1">
            <img src={icon_1} />
          </IconButton>
          <IconButton aria-label="f2">
            <img src={icon_2} />
          </IconButton>
          <IconButton aria-label="f3">
            <img src={icon_3} />
          </IconButton>
          <IconButton aria-label="f4">
            <img src={icon_4} />
          </IconButton>
          <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
            <a> info@docokids.com</a>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
            }}
          >
            {" "}
            Acceso rápido
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 400 }}>
            <a> &gt; Preguntas frecuentes</a>
            <a>&gt;Otros servicios</a>
            <a>&gt;Terminos y condiciones</a>
            <a>&gt;Política de datos</a>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {" "}
            Newsletter
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 400, mb: 2 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            debitis tempora sapiente, saepe eos aspernatur.
          </Typography>
          <FormControl
            sx={{
              width: "25ch",
              opacity: "none !important",
            }}
          >
            <FilledInput
              sx={{
                borderRadius: "20px",
                opacity: "none !important",
                height: "40px",
                backgroundColor: "white",
              }}
              id="send"
              onChange={handleChange("text")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <Icon sx={{ color: "#18b4b0" }}>send_icon</Icon>
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          sx={{
            paddingTop: "20px",
            borderTop: "1px solid rgba(256, 256, 256, .1)",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700, mt: 2, mb: 2 }}
          >
            {" "}
            Hecho por: Anny Rondón
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

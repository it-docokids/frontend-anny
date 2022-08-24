import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";
import logo from "../../assets/logo.png";
import Grid from "@mui/material/Grid";
const pages = ["Inicio", "¿Cómo funciona?", "Planes", "Nosotros", "Blog"];
const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="absolute"
      sx={{
        background: "white",
        boxShadow: "0 0.125rem 0.25rem rgb(0 0 0 / 8%) !important",
        width: "100%",
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Grid container>
            {" "}
            <img
              src={logo}
              style={{
                width: "170px",
                height: "44px",
              }}
            />
            <Grid item xs={6} sx={{ display: { md: "none" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "#343a40",
                    display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Grid>
            <Grid item xs={2}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{
                  display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
                }}
              >
                <Icon
                  sx={{
                    color: "#343a40",
                  }}
                >
                  menu_icon
                </Icon>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: "none",
                  color: "#343a40 !important",
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      color: "#343a40 !important",
                    }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Grid>
            <Grid item xs={2} md={6}>
              <Button
                sx={{
                  color: "#343a40",
                  display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                }}
              >
                Iniciar Sesión
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;

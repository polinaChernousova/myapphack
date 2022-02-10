import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Logout } from "@mui/icons-material";

import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";

import { AuthContext } from "../contexts/AuthProvider";
import { ClientContext } from "../contexts/ClientProvider";

// import { ClientContext } from "../context/ClientProvider";
// import { AuthContext } from "../context/AuthProvider";

const pages = [
  { name: "Главная", url: "/" },
  { name: "Комиксы", url: "/products" },
  { name: "Корзина", url: "/cart" },
];

const Navbar = () => {
  const { cartCount, favoriteCount } = React.useContext(ClientContext);
  const { authWithGoogle, user, logout } = React.useContext(AuthContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const navigate = useNavigate();
  const handleCloseNavMenu = (url) => {
    navigate(url);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        className="navbar"
        sx={{
          position: "fixed",
          background: "rgb(149, 165, 184)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Gravitas One",
                }}
              >
                homy vibe
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
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
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.name}
                    onClick={() => handleCloseNavMenu(page.url)}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Link to="/">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  fontFamily: "Gravitas One",
                }}
              >
                homy vibe
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link to="/products">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Наши комиксы
                </Button>
              </Link>

              <Link to="/gallery">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Галерея
                </Button>
              </Link>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Link to="/cart">
                <IconButton size="large" color="inherit">
                  <Badge color="error" badgeContent={favoriteCount}>
                    <img
                      width={28}
                      src="https://cdn-icons-png.flaticon.com/512/6805/6805318.png"
                      alt=""
                    />
                  </Badge>
                </IconButton>
              </Link>
              <Link to="/cart">
                <IconButton size="large" color="inherit">
                  <Badge color="error" badgeContent={cartCount}>
                    <img width={28} src="/images/favoritte.png" alt="" />
                  </Badge>
                </IconButton>
              </Link>

              {user ? (
                <>
                  <IconButton>{user.displayName}</IconButton>
                  <IconButton sx={{ p: 0 }}>
                    <Avatar alt={user.displayName} src={user.photoURL} />
                  </IconButton>
                  <IconButton onClick={logout} size="large" color="inherit">
                    <Logout />
                  </IconButton>
                </>
              ) : (
                <IconButton
                  className="enter"
                  style={{ color: "#fff" }}
                  onClick={authWithGoogle}
                  size="small"
                >
                  Войти
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Navbar;

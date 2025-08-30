import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import NavBarLogo from "../assets/home_images/navbar_logo.png";

const navItems = [
  "Home",
  "About",
  "Offerings",
  "Testimonials",
  "Join Now",
  "Contact",
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        px: 2,
      }}
    >
      <Toolbar>
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
        >
          <img
            src={NavBarLogo}
            alt="Spiritual Citizens"
            style={{ height: "40px" }}
          />
        </Typography>

        {/* Desktop Nav */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item}
              sx={{
                color: "hsla(0, 43%, 3%, 1)",
                fontWeight: 500,
                textTransform: "none",
              }}
            >
              {item}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu Button */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon sx={{ color: "hsla(0, 43%, 3%, 1)" }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            keepMounted
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: "#fff",
                color: "#000",
              },
            }}
          >
            {navItems.map((item) => (
              <MenuItem key={item} onClick={handleMenuClose}>
                {item}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

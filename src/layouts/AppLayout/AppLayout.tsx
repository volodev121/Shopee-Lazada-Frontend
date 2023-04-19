import * as React from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  Toolbar,
  List,
  CssBaseline,
  Divider,
  IconButton,
  Tooltip,
  Avatar,
  Box,
  ListItemText,
  Collapse,
  ListItemButton,
  ListItemIcon,
  Drawer,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import {
  Menu as IconMenu,
  ChevronLeft as IconChevronLeft,
  ChevronRight as IconChevronRight,
  // Group as IconGroup,
  Dashboard as IconDashboard,
  // List as IconList,
  Inventory as IconInventory,
} from "@mui/icons-material";
import { AppBar, DrawerHeader, Main } from "./AppLayoutStyled";

const drawerWidth = 240;
export default function AppLayout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [open1, setOpen1] = React.useState(true);

  const handleClick = () => {
    setOpen1(!open1);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: "#FFFFFF",
          boxShadow: "none",
          border: "solid 1px #e2e2e2",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <IconMenu sx={{ color: "#2e2e2e" }} />
          </IconButton>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
          >
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/assets/imgs/logo1.png" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <img
            src="/assets/imgs/logo.png"
            alt=""
            width={"200px"}
            height={"64px"}
          />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <IconChevronRight />
            ) : (
              <IconChevronLeft />
            )}
          </IconButton>
        </DrawerHeader>
        <Box sx={{ backgroundColor: "#e2e2e2", width: "100%", height: "100%" }}>
          <Divider />
          <List>
            <ListItemButton>
              <ListItemIcon>
                <IconDashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard " />
            </ListItemButton>
            <Divider />
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <IconInventory />
              </ListItemIcon>
              <ListItemText primary="Inventory " />
              {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Singapore" />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton>
              <ListItemIcon>
                <IconDashboard />
              </ListItemIcon>
              <ListItemText primary="Expiry Date Management " />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <IconDashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard " />
            </ListItemButton>
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}

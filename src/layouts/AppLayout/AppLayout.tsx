import * as React from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  Toolbar,
  CssBaseline,
  IconButton,
  Tooltip,
  Avatar,
  Box,
  Drawer,
  List,
  Paper,
} from "@mui/material";
import {  ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Menu as IconMenu,
  ChevronLeft as IconChevronLeft,
  ChevronRight as IconChevronRight,
} from "@mui/icons-material";
import { AppBar, DrawerHeader, Main } from "./AppLayoutStyled";
import { menuItems } from "./SidebarMenu";
import CollapseMenuItem from "../../components/CollapsableMenu";

const drawerWidth = 240;

export default function AppLayout() {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState("");
  const [selectedItem, setSelectedItem] = React.useState(
    menuItems[0].Items[0].title
  );
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={openDrawer}
        sx={{
          backgroundColor: "transparent",
          opacity: "0.8",
          boxShadow: "none",
          borderBottom: "solid 0.5px #e2e2e2",
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
              ...(openDrawer && { display: "none" }),
            }}
          >
            <IconMenu sx={{ color: "#000000" }} />
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
          backgroundColor: "transparent",
        }}
        variant="persistent"
        anchor="left"
        open={openDrawer}
        style={{ backgroundColor: "transparent" }}
      >
        <DrawerHeader
          sx={{
            backgroundColor: "transparent",
            borderBottom: "solid 0.5px #e2e2e2",
          }}
        >
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

        <ThemeProvider
          theme={createTheme({
            components: {
              MuiListItemButton: {
                defaultProps: {
                  disableTouchRipple: true,
                },
              },
            },
            palette: {
              mode: "dark",
              primary: { main: "rgb(102, 157, 246)" },
              background: { paper: "rgb(5, 30, 52)" },
            },
          })}
        >
          <Paper
            elevation={0}
            sx={{ width: "100%", height: "100%", overflowY: "auto" }}
          >
            <List>
              {menuItems.map((menu, index) => (
                <CollapseMenuItem
                  menu={menu}
                  key={`menu-${index}`}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  selectedItem={selectedItem}
                  setSelectedItem={setSelectedItem}
                />
              ))}
            </List>
          </Paper>
        </ThemeProvider>
      </Drawer>
      <Main open={openDrawer}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}

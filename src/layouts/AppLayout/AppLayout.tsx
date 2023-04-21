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
  Grow,
  Popper,
  ClickAwayListener,
  Typography,
  Button,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Menu as IconMenu,
  ChevronLeft as IconChevronLeft,
  ChevronRight as IconChevronRight,
} from "@mui/icons-material";
import { AppBar, DrawerHeader, Main } from "./AppLayoutStyled";
import { menuItems } from "./SidebarMenu";
import CollapseMenuItem from "../../components/CollapsableMenu";
import LanguagePopover from "./LanguagePopver";

const drawerWidth = 240;

export default function AppLayout() {
  const theme = useTheme();
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const [openDrawer, setOpenDrawer] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState("");
  const [selectedItem, setSelectedItem] = React.useState(
    menuItems[0].Items[0].title
  );
  const [openMenu, setOpenMenu] = React.useState(false);
  const prevOpen = React.useRef(openMenu);
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  const handleCloseMenu = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpenMenu(false);
  };
  const handleOpenMenu = () => {
    setOpenMenu((prevOpen) => !prevOpen);
  };

  // function handleListKeyDown(event: React.KeyboardEvent) {
  //   if (event.key === "Tab") {
  //     event.preventDefault();
  //     setOpenMenu(false);
  //   } else if (event.key === "Escape") {
  //     setOpenMenu(false);
  //   }
  // }

  React.useEffect(() => {
    if (prevOpen.current === true && openMenu === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = openMenu;
  }, [openMenu]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={openDrawer}
        sx={{
          backgroundColor: "rgba(249, 250, 251, 0.8)",
          opacity: "0.8",
          borderBottom: "solid 0.5px #e2e2e2",
          boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12) !important",
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
            <Box pr={2}>
              <LanguagePopover />
            </Box>
            <Tooltip title="Open settings">
              <IconButton
                sx={{ p: 0 }}
                onClick={handleOpenMenu}
                ref={anchorRef}
              >
                <Avatar alt="Remy Sharp" src="/assets/imgs/avatar/1 (91).jpg" />
              </IconButton>
            </Tooltip>

            <Popper
              open={openMenu}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleCloseMenu}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          pb: 2,
                          zIndex: 9999,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            pt: 4,
                            pb: 2,
                            px: { sm: 10, xs: 3 },
                            zIndex: 9999,
                          }}
                        >
                          <Avatar
                            alt="Remy Sharp"
                            src="/assets/imgs/avatar/1 (91).jpg"
                            sx={{ width: "100px", height: "100px" }}
                          />
                          <Typography
                            sx={{ fontSize: "20px", pt: 1, fontWeight: 700 }}
                          >
                            Alexandr Bliakh
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "12px",
                            }}
                          >
                            JhonDoe@gmail.com
                          </Typography>
                          <Box sx={{ pt: 2 }}>
                            <Button variant="outlined" color="info">
                              Manage Your Account
                            </Button>
                          </Box>
                        </Box>

                        <hr style={{ width: "100%" }} />

                        <Box sx={{ pt: 1 }}>
                          <Button variant="contained" color="info">
                            Sign Out
                          </Button>
                        </Box>
                      </Box>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
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
            boxShadow:
              "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12) !important",
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
            className="sidebar"
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

import React from "react";
import { useNavigate } from "react-router";
import {
  Collapse,
  ListItemIcon,
  ListItemText,
  ListItem,
  ListItemButton,
  List,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface PageProps {
  menu: {
    menutitle: string;
    Items: LinkMenuType[];
  };
  isOpen: string;
  setIsOpen: (a: string) => void;
  selectedItem: string;
  setSelectedItem: (a: string) => void;
}

type LinkMenuType = {
  title: string;
  icon?: React.ReactNode;
  path?: string;
  type: string;
  dropdownItems?: SubMenu[];
};
type SubMenu = {
  title: string;
  path: string;
};
const CollapseMenuItem = (props: PageProps) => {
  const navigate = useNavigate();
  //   const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ListItem>
        <ListItemText
          primaryTypographyProps={{
            color: "primary",
            fontWeight: "medium",
            variant: "body2",
          }}
          primary={props.menu.menutitle}
        ></ListItemText>
      </ListItem>
      {props.menu.Items.map((item, index) => {
        return item.type === "link" ? (
          <ListItem
            key={`link-${index}`}
            onClick={() => item?.path && navigate(item?.path)}
          >
            <ListItemButton
              onClick={() => props.setSelectedItem(item.title)}
              selected={props.selectedItem === item.title}
              sx={{ py: 0, minHeight: 32, color: "rgba(255,255,255,.8)" }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{
                  fontWeight: "medium",
                  variant: "body2",
                }}
              ></ListItemText>
            </ListItemButton>
          </ListItem>
        ) : (
          <List key={`sub-${index}`}>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  props.setIsOpen(
                    props.isOpen === item.title ? "" : item.title
                  );
                }}
                sx={{
                  py: 0,
                  minHeight: 32,
                  color: "rgba(255,255,255,.8)",
                }}
              >
                <ListItemIcon sx={{ color: "inherit" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    fontWeight: "medium",
                    variant: "body2",
                  }}
                />
                {props.isOpen === item.title ? (
                  <ExpandLessIcon sx={{ color: "inherit" }} />
                ) : (
                  <ExpandMoreIcon sx={{ color: "inherit" }} />
                )}
              </ListItemButton>
            </ListItem>
            <Collapse in={props.isOpen === item.title} timeout="auto">
              {item.dropdownItems?.map((m, ind) => (
                <ListItem key={ind} onClick={() => navigate(m.path)}>
                  <ListItemButton
                    key={ind}
                    sx={{
                      pl: 4,
                      py: 0,
                      minHeight: 32,
                      color: "rgba(255,255,255,.8)",
                    }}
                    onClick={() => props.setSelectedItem(m.title)}
                    selected={props.selectedItem === m.title}
                  >
                    <ListItemText
                      primary={m.title}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </Collapse>
          </List>
        );
      })}
    </>
  );
};
export default CollapseMenuItem;

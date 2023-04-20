import {
  Group as IconGroup,
  Inventory as IconInventory,
  AccountCircle as IconAccountCircle,
} from "@mui/icons-material";

type MenuType = {
  menutitle: string;
  Items: LinkMenuType[];
};
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
export const menuItems: MenuType[] = [
  {
    menutitle: "Dashboard",
    Items: [
      {
        title: "Dashboard",
        icon: <IconGroup />,
        path: "/",
        type: "link",
      },
    ],
  },

  {
    menutitle: "Inventory Management",
    Items: [
      {
        title: "Inventory",
        icon: <IconInventory />,
        type: "sub",
        dropdownItems: [
          {
            title: "Explore",
            path: "routes.vote",
          },
          {
            title: "Vote with pools",
            path: "routes.proposals",
          },
          {
            title: "Create proposal",
            path: "routes.createProposal",
          },
        ],
      },
    ],
  },
  {
    menutitle: "User Management",
    Items: [
      {
        title: "My Account",
        icon: <IconAccountCircle />,
        type: "sub",
        dropdownItems: [
          {
            title: "My Profile",
            path: "profile",
          },
        ],
      },
    ],
  },
];

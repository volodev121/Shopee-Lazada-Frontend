import {
  Group as IconGroup,
  Inventory as IconInventory,
  AccountCircle as IconAccountCircle,
  Telegram as IconTelegram,
  Dashboard as IconDashboard,
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
        icon: <IconDashboard />,
        path: "/",
        type: "link",
      },
    ],
  },
  {
    menutitle: "Expiration date management",
    Items: [
      {
        title: "Expiry Telegram ",
        icon: <IconTelegram />,
        path: "/",
        type: "link",
      },
      {
        title: "Expiry FIFO ",
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
            title: "Online Marketplaces",
            path: "online-marketplaces",
          },
          {
            title: "Reordering & Replenishment",
            path: "recordering&replenshement",
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

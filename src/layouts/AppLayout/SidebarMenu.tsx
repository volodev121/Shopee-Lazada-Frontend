import {
  Group as IconGroup,
  Dashboard as IconDashboard,
  // List as IconList,
  Inventory as IconInventory,
} from "@mui/icons-material";
export const MenuItems = [
  {
    menutitle: "MAIN",
    Items: [
      {
        path: `/`,
        icon: <IconDashboard />,
        type: "link",
        active: true,
        selected: false,

        title: "Dashboard",
      },
    ],
  },
  {
    menutitle: "User Management",
    Items: [
      {
        path: `/users`,
        icon: <IconGroup />,
        type: "link",
        active: true,
        selected: false,

        title: "Users",
      },
    ],
  },
  {
    menutitle: "Inventory Management",
    Items: [
      {
        title: "Authentication",
        icon: <IconInventory />,
        type: "sub",
        children: [
          {
            path: `/inventory`,
            type: "link",

            active: false,
            selected: false,
            title: "Inventory",
          },
        ],
      },
    ],
  },
];

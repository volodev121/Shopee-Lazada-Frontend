import { useState, useEffect } from "react";
// @mui
import { alpha } from "@mui/material/styles";
import { Box, MenuItem, Stack, IconButton, Popover } from "@mui/material";

// ----------------------------------------------------------------------

interface LanguageType {
  value: string;
  label: string;
  icon: string;
}

const LANGS: LanguageType[] = [
  {
    value: "en",
    label: "English",
    icon: "./assets/icons/flags/ic_flag_us.svg",
  },
  {
    value: "sg",
    label: "Singapore",
    icon: "./assets/icons/flags/ic_flag_sg.svg",
  },
  {
    value: "my",
    label: "Malaysia ",
    icon: "./assets/icons/flags/ic_flag_my.svg",
  },
  {
    value: "th",
    label: "Thailand",
    icon: "./assets/icons/flags/ic_flag_th.svg",
  },
];

// ----------------------------------------------------------------------

export default function LanguagePopover(): JSX.Element {
  const [open, setOpen] = useState<null | HTMLElement>(null);
  const [language, setLanguage] = useState(LANGS[0].value);
  const [displayLanguageFlag, setDisplayLanguageFlag] = useState(LANGS[0]);
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  const handleSelectLanguage = (e: string) => {
    setLanguage(e);
    handleClose();
  };
  useEffect(() => {
    const selected = LANGS.filter((lang) => lang.value === language);
    setDisplayLanguageFlag(selected[0]);
  }, [language]);

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          padding: 0,

          width: 44,
          height: 44,
          ...(open && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.focusOpacity
              ),
          }),
        }}
      >
        <img
          src={displayLanguageFlag.icon}
          alt={displayLanguageFlag.label}
          width={"28px"}
          height={"20px"}
        />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 1,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            "& .MuiMenuItem-root": {
              px: 1,
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Stack spacing={0.75}>
          {LANGS.map((option: LanguageType) => (
            <MenuItem
              key={option.value}
              selected={option.value === language}
              onClick={() => handleSelectLanguage(option.value)}
            >
              <Box
                component="img"
                alt={option.label}
                src={option.icon}
                sx={{ width: 28, mr: 2 }}
              />

              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </Popover>
    </>
  );
}

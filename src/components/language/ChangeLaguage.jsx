// components/language/LanguageSelect.jsx
import * as React from "react";
import {
    Box,
    Button,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
    SvgIcon,
} from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import { useTranslation } from "react-i18next";

// простые флаги-эмодзи (можешь заменить на svg)
const FLAGS = {
    en: "🇺🇸",
    es: "🇪🇸",
    fr: "🇫🇷",
    hi: "🇮🇳",
    it: "🇮🇹",
    ja: "🇯🇵",
    ko: "🇰🇷",
    pt: "🇵🇹",
    ru: "🇷🇺",
    vi: "🇻🇳",
    de: "🇩🇪",
};

const LANGS = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "fr", label: "Français" },
    { code: "hi", label: "हिन्दी" },
    { code: "it", label: "Italiano" },
    { code: "ja", label: "日本語" },
    { code: "ko", label: "한국어" },
    { code: "pt", label: "Português" },
    { code: "ru", label: "Русский" },
    { code: "vi", label: "Tiếng Việt" },
    { code: "de", label: "Deutsch" },
];

export default function LanguageSelect() {
    const { i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const current =
        LANGS.find((l) => l.code === i18n.language?.slice(0, 2)) ?? LANGS[0];

    const handleOpen = (e) => setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const change = async (lng) => {
        document.documentElement.lang = lng; // фикс опечатки: lang, не "lange"
        await i18n.changeLanguage(lng); // i18next сам сохранит i18nextLng в localStorage
        handleClose();
    };

    return (
        <Box>
            <Button
                onClick={handleOpen}
                disableRipple
                endIcon={
                    open ? <KeyboardArrowUp fontSize="small" /> : <KeyboardArrowDown fontSize="small" />
                }
                sx={{
                    gap: 1,
                    pr: 1.25,
                    pl: 1,
                    py: 0.5,
                    borderRadius: 2.5,
                    border: "1px solid",
                    borderColor: "divider",
                    color: "text.primary",
                    textTransform: "none",
                    backgroundColor: "#fff",
                    boxShadow: 0,
                    "&:hover,&:active,&.Mui-focusVisible": {
                        backgroundColor: "#fff",
                    },
                }}
            >
                <span style={{ fontSize: 20, lineHeight: 1 }}>{FLAGS[current.code]}</span>
                <span style={{ fontWeight: 600 }}>{current.label}</span>
            </Button>

            <Menu
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                elevation={6}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                PaperProps={{
                    sx: {
                        mt: 1,
                        borderRadius: 2.5,
                        border: "1px solid",
                        borderColor: "divider",
                        width: 240,
                    },
                }}
            >
                {LANGS.map((l) => (
                    <MenuItem
                        key={l.code}
                        onClick={() => change(l.code)}
                        disableRipple
                        selected={current.code === l.code}
                        sx={{
                            py: 1
                        }}
                    >
                        <ListItemIcon sx={{ minWidth: 34, color: 'black' }}>
                            <span style={{ fontSize: 20, lineHeight: 1 }}>{FLAGS[l.code]}</span>
                        </ListItemIcon>
                        <ListItemText
                            primary={l.label}
                            primaryTypographyProps={{
                                fontWeight: current.code === l.code ? 700 : 500,
                                color: "black !important",
                            }}
                        />
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}
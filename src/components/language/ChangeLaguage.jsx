import * as React from "react";
import {
    Box,
    Button,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText, SvgIcon,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Squircle } from "@squircle-js/react";
import enFlag from "../../assets/flags/en.webp";
import esFlag from "../../assets/flags/es.webp";
import frFlag from "../../assets/flags/fr.webp";
import hiFlag from "../../assets/flags/hi.webp";
import itFlag from "../../assets/flags/it.webp";
import koFlag from "../../assets/flags/ko.webp";
import ptFlag from "../../assets/flags/pt.webp";
import ruFlag from "../../assets/flags/ru.webp";
import viFlag from "../../assets/flags/vi.webp";
import deFlag from "../../assets/flags/de.webp";
import jpFlag from "../../assets/flags/jp.webp";
import ArrowIcon from "../../assets/also/arrowLang.svg";
import ArrowIcon2 from "../../assets/also/arrowLang2.svg";

const SquirclePaper = React.forwardRef(
    ({ className, style, children, ...rest }, ref) => {
        return (
            <div ref={ref} className={className} style={{ ...style, background: "transparent", borderRadius: 0 }} {...rest}>
                <Squircle
                    cornerRadius={14}
                    cornerSmoothing={1}
                    style={{
                        background: "#fff",
                        overflow: "hidden",
                        boxShadow: "0 12px 28px rgba(19,33,68,.08)",
                        border: "1.5px solid #DDE3EA",
                    }}
                >
                    {children}
                </Squircle>
            </div>
        );
    }
);
SquirclePaper.displayName = "SquirclePaper";

const FLAGS = {
    en: enFlag,
    es: esFlag,
    fr: frFlag,
    hi: hiFlag,
    it: itFlag,
    jp: jpFlag,
    ko: koFlag,
    pt: ptFlag,
    ru: ruFlag,
    vi: viFlag,
    de: deFlag,
};

const LANGS = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "fr", label: "Français" },
    { code: "hi", label: "हिन्दी" },
    { code: "it", label: "Italiano" },
    { code: "jp", label: "日本語" },
    { code: "ko", label: "한국어" },
    { code: "pt", label: "Português" },
    { code: "ru", label: "Русский" },
    { code: "vi", label: "Tiếng Việt" },
    { code: "de", label: "Deutsch" },
];

export default function LanguageSelect() {
    const { i18n } = useTranslation();
    const btnRef = React.useRef(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [menuWidth, setMenuWidth] = React.useState(null);
    const open = Boolean(anchorEl);

    React.useEffect(() => {
        if (!btnRef.current) return;
        const el = btnRef.current;

        const compute = () => {
            const w = Math.round(el.getBoundingClientRect().width);
            setMenuWidth(w);
        };

        const ro = new ResizeObserver(compute);
        ro.observe(el);
        compute();

        return () => ro.disconnect();
    }, []);

    const handleOpen = () => {
        if (btnRef.current) {
            setAnchorEl(btnRef.current);
            setMenuWidth(Math.round(btnRef.current.getBoundingClientRect().width));
        }
    };

    const handleClose = () => setAnchorEl(null);
    const change = async (lng) => {
        document.documentElement.lang = lng;
        await i18n.changeLanguage(lng);
        handleClose();
    };

    const current =
        LANGS.find((l) => l.code === i18n.language?.slice(0, 2)) ?? LANGS[0];

    return (
        <Squircle cornerRadius={10} cornerSmoothing={1} style={{ border: "1.5px solid #DDE3EA" }}>
            <Button
                ref={btnRef}
                onClick={handleOpen}
                className="changeLangBtn"
                disableRipple
                endIcon={
                    <SvgIcon
                        viewBox="0 0 24 24"
                        sx={{
                            width: { xs: 15, md: 18, sm: 18, lg: 20 },
                            height: { xs: 15, md: 18, sm: 18, lg: 20 },
                            transition: "transform .25s ease",
                            transformOrigin: "center",
                            transform: open ? "rotate(-180deg)" : "rotate(0deg)",
                            color: open ? "#272B37" : "white !important",
                        }}
                    >
                        <image href={open ? ArrowIcon : ArrowIcon2} width="24" height="24" />
                    </SvgIcon>
                }
                sx={{
                    p: { md: "6px 10px 6px 8px", sm: "8px 14px 8px 10px", lg: "9px 20px 9px 12px" },
                    gap: { md: "10px", sm: "16px", lg: "28px" },
                    color: "text.primary",
                    width: { xs: '150px', md: "200px", sm: "200px", lg: "auto" },
                    textTransform: "none",
                    justifyContent: "space-between",
                    boxShadow: 0,
                    whiteSpace: "nowrap",
                    "&:hover,&:active,&.Mui-focusVisible": { backgroundColor: "transparent" },
                    "& .MuiButton-endIcon": { ml: { md: 0.5, sm: 1, lg: 2 } },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        minWidth: 0,
                        columnGap: { md: "6px", sm: "8px", lg: "9px", xs: "6px" },
                        flex: "1 1 auto",
                    }}
                >
                    <Box
                        component="img"
                        src={FLAGS[current.code]}
                        alt={current.label}
                        sx={{
                            width: {xs: 31, md: 28, sm: 36, lg: 44, xl: 44 },
                            height: {xs: 20, md: 18, sm: 24, lg: 28, xl: 28 },
                            objectFit: "cover",
                            borderRadius: "3px",
                            flex: "0 0 auto",
                        }}
                    />
                    <Box
                        component="span"
                        sx={{
                            fontWeight: 600,
                            minWidth: 0,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            maxWidth: { md: "100%", sm: "100%", lg: "100%" },
                        }}
                    >
                        {current.label}
                    </Box>
                </Box>
            </Button>

            <Menu
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                elevation={0}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                PaperProps={{
                    component: SquirclePaper,
                    sx: {
                        mt: { xs: 4, md: 1 },
                        width: menuWidth ?? undefined,
                        boxSizing: "border-box",
                        bgcolor: "transparent",
                        borderRadius: 0,
                    },
                }}
                MenuListProps={{ disablePadding: true, sx: { maxWidth: "100%" } }}
            >
                {LANGS.map((l) => (
                    <MenuItem
                        key={l.code}
                        onClick={() => change(l.code)}
                        disableRipple
                        selected={current.code === l.code}
                        sx={{
                            display: "flex",
                            gap: "9px",
                            px: "12px",
                            py: "8px",
                            my: "4px",
                            borderRadius: 1.5,
                            transition: "background-color .2s ease",
                            "&:hover": { backgroundColor: "rgba(246,248,251,1)" },
                            "&.Mui-selected": { backgroundColor: "rgba(239,245,252,1)" },
                            "&.Mui-selected:hover": { backgroundColor: "rgba(236,244,255,1)" },
                            "& .MuiListItemText-primary": {
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            },
                        }}
                    >
                        <ListItemIcon sx={{ minWidth: { xs: 28, sm: 34 } }}>
                            <Box
                                component="img"
                                src={FLAGS[l.code]}
                                alt={l.label}
                                sx={{
                                    width: {xs: 31, md: 28, sm: 36, lg: 44, xl: 44 },
                                    height: {xs: 20, md: 18, sm: 24, lg: 28, xl: 28 },
                                    objectFit: "cover",
                                    borderRadius: 1,
                                    display: "block"
                                }}
                            />
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
        </Squircle>
    );
}
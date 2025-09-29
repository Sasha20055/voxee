import * as React from "react";
import {Box, Avatar, Typography, SvgIcon, useMediaQuery, useTheme} from "@mui/material";
import { keyframes } from "@mui/system";
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
import {Squircle} from "@squircle-js/react";
import MarkSvg from "../../assets/also/mark.svg"

const slide = keyframes`
    0%   { transform: translateX(0); }
    100% { transform: translateX(calc(-100% / var(--loops))); }
`;

const langs = [
    { code: "en", label: "English", flag: enFlag },
    { code: "de", label: "Deutsch", flag: deFlag },
    { code: "es", label: "Español", flag: esFlag },
    { code: "fr", label: "Français", flag: frFlag },
    { code: "hi", label: "हिन्दी", flag: hiFlag },
    { code: "it", label: "Italiano", flag: itFlag },
    { code: "jp", label: "日本語", flag: jpFlag },
    { code: "ko", label: "한국어", flag: koFlag },
    { code: "pt", label: "Português", flag: ptFlag },
    { code: "ru", label: "Русский", flag: ruFlag },
    { code: "vi", label: "Tiếng Việt", flag: viFlag },
];

function LangChip({ label, code, flag }) {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
    const displayText = isMdUp ? label : code;
    const active = code === "en";

    return (
        <Squircle
            cornerRadius={10}
            cornerSmoothing={1}
            style={{
                background: !active ? '#fff' : '#F6F8FB',
                overflow: "hidden",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: "1.5px solid #DDE3EA",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: { xs: "72px", md: "156px" },
                    padding: {xs: "6px", md: "9px 12px"},
                    pointerEvents: "none",
                }}
            >
                <Avatar
                    src={flag}
                    alt={displayText}
                    sx={{ width: {xs: 31, md: 44}, height: {xs: 20, md: 28}, borderRadius: 0.8, flex: "0 0 auto" }}
                    imgProps={{ loading: "lazy" }}
                />

                <Typography
                    component="span"
                    fontWeight={600}
                    sx={{ color: "#272B37 !important", m: 0, lineHeight: 1.2, pointerEvents: "auto", whiteSpace: "nowrap", paddingLeft: {xs: "6px", md: "9px"} }}
                >
                    {displayText}
                </Typography>


                {!active ? <Box
                    aria-hidden
                    sx={{
                        ml: "auto",
                        width: {xs: 6, md: 16},
                        height: {xs: 6, md: 16},
                        borderRadius: "999px",
                        border: "1.5px solid #E1E8F0",
                        backgroundColor: "#fff",
                        boxShadow: "0 0 0 0 rgba(0,0,0,0)",
                        flex: "0 0 auto",
                        pointerEvents: "none",
                    }}
                /> : <SvgIcon
                    viewBox="0 0 20 20"
                    sx={{
                        width: {xs: 10, md: 20},
                        height: {xs: 10, md: 20},
                        transition: "transform .25s ease",
                        transformOrigin: "center",
                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                >
                    <image href={MarkSvg} width="20" height="20" />
                </SvgIcon>}
            </Box>
        </Squircle>
    );
}

export default function LanguageMarquee({
                                            speed = 30,
                                            gap = 2,
                                            pauseOnHover = true,
                                            reverse = false,
                                        }) {
    const LOOPS = 3;
    const items = React.useMemo(
        () => Array.from({ length: LOOPS }, () => langs).flat(),
        []
    );

    return (
        <Box
            sx={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
                py: 1,
                userSelect: "none",
            }}
        >
            <Box
                sx={{
                    "--loops": LOOPS,
                    display: "inline-flex",
                    gap,
                    paddingInline: gap,
                    animation: `${slide} ${speed}s linear infinite`,
                    animationDirection: reverse ? "reverse" : "normal",
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                    ...(pauseOnHover && { "&:hover": { animationPlayState: "paused" } }),
                    "@media (prefers-reduced-motion: reduce)": { animation: "none" },
                }}
            >
                {items.map((l, i) => (
                    <LangChip key={`${l.code}-${i}`} label={l.label} flag={l.flag} code={l.code} />
                ))}
            </Box>
        </Box>
    );
}
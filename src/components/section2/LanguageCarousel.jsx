// LanguageMarquee.jsx
import * as React from "react";
import { Box, Chip, Avatar } from "@mui/material";
import { keyframes } from "@mui/system";
import EnFlag from "../../assets/flags/6501230_61 2.webp";
import DeFlag from "../../assets/flags/6501230_61 3.webp";
import EsFlag from "../../assets/flags/6501230_61 4.webp";
import FrFlag from "../../assets/flags/6501230_61 5.webp";
import ItFlag from "../../assets/flags/6501230_61 7.webp";
import JaFlag from "../../assets/flags/6501230_61 8.webp";
import KoFlag from "../../assets/flags/6501230_61 9.webp";
import PtFlag from "../../assets/flags/de.webp";
import RuFlag from "../../assets/flags/en.webp";


const slide = keyframes`
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const langs = [
    { code: "en", label: "English", flag: EnFlag },
    { code: "de", label: "Deutsch", flag: DeFlag },
    { code: "es", label: "Español", flag: EsFlag },
    { code: "fr", label: "Français", flag: FrFlag },
    { code: "hi", label: "हिन्दी", flag: FrFlag },
    { code: "it", label: "Italiano", flag: ItFlag },
    { code: "ja", label: "日本語", flag: JaFlag },
    { code: "ko", label: "한국어", flag: KoFlag },
    { code: "pt", label: "Português", flag: PtFlag },
    { code: "ru", label: "Русский", flag: RuFlag },
];

function LangChip({ label, flag }) {
    return (
        <Chip
            label={label}
            variant="outlined"
            sx={{
                px: 1,
                borderRadius: 2.5,
                "& .MuiChip-label": { fontWeight: 600 },
            }}
            avatar={
                <Avatar
                    src={flag}
                    alt={label}
                    sx={{ width: 24, height: 16, borderRadius: 0.8 }}
                    imgProps={{ loading: "lazy" }}
                />
            }
        />
    );
}

export default function LanguageMarquee({
                                            speed = 30,
                                            gap = 2,
                                            pauseOnHover = true,
                                            reverse = false,
                                        }) {

    const items = React.useMemo(() => [...langs, ...langs], []);

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
                    display: "flex",
                    gap,
                    width: "max-content",
                    animation: `${slide} ${speed}s linear infinite`,
                    animationDirection: reverse ? "reverse" : "normal",
                    ...(pauseOnHover && {
                        "&:hover": { animationPlayState: "paused" },
                    }),
                    "@media (prefers-reduced-motion: reduce)": {
                        animation: "none",
                    },
                }}
            >
                {items.map((l, i) => (
                    <LangChip key={`${l.code}-${i}`} label={l.label} flag={l.flag} />
                ))}
            </Box>
        </Box>
    );
}
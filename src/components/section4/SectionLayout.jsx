import {Box, SvgIcon, Typography, useMediaQuery, useTheme} from "@mui/material";
import {Phone} from "./FouthSectionComponent.jsx";
import {motion} from "framer-motion";
import * as React from "react";
import {slides} from "../../assets/slides/imports.jsx";
import {Squircle} from "@squircle-js/react";
import MarkSvg from "../../assets/also/mark.svg";
import {useEffect} from "react";

const STEPS = 5;


export default function SectionLayout({ step, stepMV, frameSrc, meta, isBottom }) {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

    const items = isBottom
        ? [
            "Listen to stories, dialogues, and monologues — choose speaker accent and level.",
            "Quiz types: image choice, true/false, short answer.",
            "Answer and get instant feedback — build listening comprehension fast.",
        ]
        : [
            "Choose a scenario — or invent your own (say, a dragon flight).",
            "Make it yours: set roles, goals, and extra instructions.",
            "Instant corrections with clear explanations (in your language).",
            "Get phrase ideas to keep the conversation flowing.",
        ];

    useEffect(() => {
        console.log(isMdUp)
    }, [isMdUp]);

    return (
        <Box
            id="exercisesSection"
            sx={{
                position: "absolute",
                ...(isBottom
                ? { bottom: { xs: -55, md: 270 }, top: "auto" }
                : { top: { xs: 105, md: 88 }, bottom: "auto" }),
                left: 0,
                right: 0,
                px: { xs: 2, md: 0 },
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "7fr 5fr" },
                alignItems: "start",
                gap: { xs: 3, md: 6 },
            }}
        >
            <Squircle
                cornerRadius={50}
                cornerSmoothing={1}
                style={{height: '100%', maxWidth: 640, background: '#F6F8FB'}}
                className="sqlFouthSection"
            >
                <Box sx={{ pointerEvents: "auto", pr: { md: 4 }, width: "100%", height: "100%" }}>
                    <motion.h2
                        key={step}
                        initial={{opacity: 0, y: 12}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.35}}
                    >
                        <Typography
                            component="h2"
                        >
                            {[
                                "Dialogue Practice",
                                "Parallel Stories",
                                "Ask & Answer",
                                "Learn to Describe",
                                "Listening Practice",
                            ][step]}
                        </Typography>
                    </motion.h2>

                    <motion.ul
                        key={`bullets-${step}`}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.35, delay: 0.05}}
                        style={{listStyle: "none", padding: 0, margin: isMdUp ? "20px 0 0 0" : 0}}
                    >
                        {items.map((b) => (
                            <Typography
                                component="li"
                                key={b}
                                sx={{
                                    padding: { xs: "5px 0", md: "10px 0" },
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    gap: {xs: "12px", md: '16px'},
                                    color: "#515C69",
                                    m: 0
                                }}
                            >
                                <SvgIcon
                                    viewBox="0 0 20 20"
                                    sx={{
                                        width: {xs: 13, md: 20},
                                        height: {xs: 13, md: 20},
                                        transition: "transform .25s ease",
                                        transformOrigin: "center",
                                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                                    }}
                                >
                                    <image href={MarkSvg} width="20" height="20" />
                                </SvgIcon>
                                <Typography component="h4" sx={{color: "#3A4755", fontWeight: "400 !important"}}>{b}</Typography>
                            </Typography>
                        ))}
                    </motion.ul>
                </Box>
            </Squircle>
            <Box
                sx={{
                    pointerEvents: "none",
                    position: "relative",
                    minHeight: { xs: 420, md: 560 },
                    pr: { md: 2 },
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        left: { xs: "30%", sm: "30%", md: "-20%", lg: "-20%"},
                        top: { xs: -40, md: 20 },
                        transform: { xs: "translateX(-50%)", md: "none" },
                        zIndex: 1,
                        filter: "drop-shadow(0 10px 24px rgba(0,0,0,.12))",
                    }}
                >
                    <Phone
                        stepMV={stepMV}
                        col="0"
                        width={isMdUp ? 330 : 150}
                        isMdUp={isMdUp}
                        frameSrc={frameSrc}
                        meta={meta}
                        steps={STEPS}
                        screenSrcBuilder={(i, c) => slides[isBottom ? 4 : 0][Number(c)]}
                    />
                </Box>


                <Box
                    sx={{
                        position: "absolute",
                        left: { xs: "55%", sm: "45%", md: "15%" },
                        top: { xs: -10, md: 120 },
                        transform: { xs: "translateX(-50%)", md: "none" },
                        zIndex: 2,
                        filter: "drop-shadow(0 14px 30px rgba(0,0,0,.14))",
                    }}
                >
                    <Phone
                        stepMV={stepMV}
                        col="1"
                        width={isMdUp ? 330 : 150}
                        isMdUp={isMdUp}
                        frameSrc={frameSrc}
                        meta={meta}
                        steps={STEPS}
                        screenSrcBuilder={(i, c) => slides[isBottom ? 4 : 0][Number(c)]}
                    />
                </Box>


                <Box
                    sx={{
                        position: "absolute",
                        left: { xs: "80%", sm: "60%", md: "50%" },
                        top: { xs: 20, md: 220 },
                        transform: { xs: "translateX(-50%)", md: "none" },
                        zIndex: 3,
                        filter: "drop-shadow(0 18px 36px rgba(0,0,0,.18))",
                    }}
                >
                    <Phone
                        stepMV={stepMV}
                        col="2"
                        width={isMdUp ? 330 : 150}
                        isMdUp={isMdUp}
                        frameSrc={frameSrc}
                        meta={meta}
                        steps={STEPS}
                        screenSrcBuilder={(i, c) => slides[isBottom ? 4 : 0][Number(c)]}
                    />
                </Box>
            </Box>
        </Box>
    );
}
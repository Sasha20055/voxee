import {Box, Typography} from "@mui/material";
import {Phone} from "./FouthSectionComponent.jsx";
import {motion} from "framer-motion";
import * as React from "react";
import {slides} from "../../assets/slides/imports.jsx";

const STEPS = 5;


export default function SectionLayout({ step, stepMV, frameSrc, meta, isBottom }) {
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

    return (
        <Box
            id="exercisesSection"
            sx={{
                position: "absolute",
                ...(isBottom
                ? { bottom: { xs: 90, md: 350 }, top: "auto" }
                : { top: { xs: 55, md: 88 }, bottom: "auto" }),
                left: 0,
                right: 0,
                px: { xs: 2, md: 0 },
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "6fr 6fr" },
                alignItems: "start",
                gap: { xs: 3, md: 6 },
            }}
        >
            <Box sx={{ pointerEvents: "auto", pr: { md: 4 }, maxWidth: 640, background: '#F6F8FB', padding: {xs: "20px", md:"90px"}, borderRadius: '50px', height: '100%', marginLeft: '30px' }}>
                <Typography component="h4" sx={{fontWeight: '600 !Important'}}>
                    {isBottom ? "Listening Practice" : "Dialogue Practice"}
                </Typography>

                <motion.ul
                    key={`bullets-${step}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35, delay: 0.05 }}
                    style={{ listStyle: "none", padding: 0, margin: "20px 0 0 0" }}
                >
                    {items.map((b) => (
                        <Typography
                            component="li"
                            key={b}
                            sx={{
                                padding: { xs: "5px 0", md: "10px 0" },
                                display: "flex",
                                gap: '2px',
                                color: "#515C69",
                                m: 0
                            }}
                        >
          <span
              aria-hidden
              style={{
                  flex: "0 0 12px",
                  height: 12,
                  borderRadius: 999,
                  marginTop: 10,
                  marginRight: '10px',
                  background:
                      "radial-gradient(circle at 30% 30%, #BCDAF3 0%, #DCF7FB 60%, #C4F6FB 100%)",
                  boxShadow: "0 0 0 3px rgba(188,218,243,.25)",
              }}
          />
                            <span>{b}</span>
                        </Typography>
                    ))}
                </motion.ul>
            </Box>

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
                        left: { xs: "30%", md: "-20%" },
                        top: { xs: -20, md: 20 },
                        transform: { xs: "translateX(-50%)", md: "none" },
                        zIndex: 1,
                        filter: "drop-shadow(0 10px 24px rgba(0,0,0,.12))",
                    }}
                >
                    <Phone
                        stepMV={stepMV}
                        col="0"
                        width={240}
                        frameSrc={frameSrc}
                        meta={meta}
                        steps={STEPS}
                        screenSrcBuilder={(i, c) => slides[isBottom ? 4 : 0][Number(c)]}
                    />
                </Box>

                <Box
                    sx={{
                        position: "absolute",
                        left: { xs: "50%", md: "10%" },
                        top: { xs: 8, md: 120 },
                        transform: { xs: "translateX(-50%)", md: "none" },
                        zIndex: 2,
                        filter: "drop-shadow(0 14px 30px rgba(0,0,0,.14))",
                    }}
                >
                    <Phone
                        stepMV={stepMV}
                        col="1"
                        width={240}
                        frameSrc={frameSrc}
                        meta={meta}
                        steps={STEPS}
                        screenSrcBuilder={(i, c) => slides[isBottom ? 4 : 0][Number(c)]}
                    />
                </Box>

                <Box
                    sx={{
                        position: "absolute",
                        left: { xs: "70%", md: "40%" },
                        top: { xs: 36, md: 220 },
                        transform: { xs: "translateX(-50%)", md: "none" },
                        zIndex: 3,
                        filter: "drop-shadow(0 18px 36px rgba(0,0,0,.18))",
                    }}
                >
                    <Phone
                        stepMV={stepMV}
                        col="2"
                        width={240}
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
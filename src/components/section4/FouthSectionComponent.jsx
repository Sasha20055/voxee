import * as React from "react";
import { createPortal } from "react-dom";
import {Box, Container, SvgIcon, Typography, useMediaQuery, useTheme} from "@mui/material";
import {motion, useScroll, useTransform, useMotionValueEvent, useMotionValue, animate} from "framer-motion";
import {useRef} from "react";
import FramePng from "../../assets/also/mocap.png";
import SectionLayout from "./SectionLayout.jsx";
import {slides} from "../../assets/slides/imports.jsx";
import MarkSvg from "../../assets/also/mark.svg";
import {Squircle} from "@squircle-js/react";

const STEPS = 5;
const PIN_START = 0.005;
const PIN_END   = 0.999;


const FADE = 0.0001;

const VIS_THRESH = 0.01;

const FRAME_META = {
    w: 1290,
    h: 2640,
    inset: { top: 140, right: 90, bottom: 160, left: 90 },
};

export default function PhoneShowcase() {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

    const wrapRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: wrapRef,
        offset: ["start start", "end end"],
    });

    const pinOpacity = useTransform(
        scrollYProgress,
        [PIN_START - FADE, PIN_START + FADE, PIN_END - FADE, PIN_END + FADE],
        [0,                1,                1,               0],
        { clamp: true }
    );

    const placeholderOpacity = useTransform(
        scrollYProgress,
        [PIN_START - FADE, PIN_START + FADE],
        [1,                0],
        { clamp: true }
    );

    const pinVisible = useTransform(pinOpacity, (v) => (v > VIS_THRESH ? "visible" : "hidden"));

    const placeholderBottomOpacity = useTransform(scrollYProgress, (v) => {
        if (v >= PIN_END) return 1;
        return 0;
    });

    const [portalOn, setPortalOn] = React.useState(false);
    const [hidePlaceholder, setHidePlaceholder] = React.useState(false);


    const stepMV = useMotionValue(0);
    const [step, setStep] = React.useState(0);
    const stepMVStatic = useMotionValue(0);

    function progressToStep(v) {
        const start = 0.15, end = 0.85;
        if (v <= start) return 0;
        if (v >= end) return STEPS - 1;
        const rel = (v - start) / (end - start);
        const idx = Math.floor(rel * STEPS);
        return Math.max(0, Math.min(STEPS - 1, idx));
    }

    useMotionValueEvent(scrollYProgress, "change", (v) => {
        const show = v >= PIN_START - 0.01 && v <= PIN_END + 0.01;
        if (show !== portalOn) setPortalOn(show);


        const hide = v >= PIN_START + 0.02;
        if (hide !== hidePlaceholder) setHidePlaceholder(hide);
    });

    useMotionValueEvent(scrollYProgress, "change", (v) => {
        const idx = progressToStep(v);
        if (idx !== step) {
            setStep(idx);
            animate(stepMV, idx, { duration: 0.35, ease: "easeInOut" });
        }
    });

    const [rect, setRect] = React.useState({ left: 0, width: 0 });
    React.useLayoutEffect(() => {
        const update = () => {
            if (!wrapRef.current) return;
            const r = wrapRef.current.getBoundingClientRect();
            setRect({ left: r.left, width: r.width });
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    return (
        <Box
            maxWidth="xl"
            ref={wrapRef}
            component="section"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
                position: "relative",
                height: `${STEPS * 100}vh`,
            }}
        >
            <Container maxWidth="lg" sx={{ height: "100%" }} />

            <Box
                aria-hidden
                sx={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                }}

                component={motion.div}
                style={{ opacity: placeholderOpacity }}
            >
                <SectionLayout
                    step={0}
                    stepMV={stepMVStatic}
                    frameSrc={FramePng}
                    meta={IPHONE_15_PRO}
                />
            </Box>

            <Box
                aria-hidden
                sx={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    zIndex: 4
                }}
                component={motion.div}
                style={{ opacity: placeholderBottomOpacity }}
            >
                <SectionLayout
                    isBottom={true}
                    step={STEPS - 1}
                    stepMV={stepMVStatic}
                    frameSrc={FramePng}
                    meta={IPHONE_15_PRO}
                />
            </Box>

            {createPortal(
                <motion.div
                    style={{
                            position: "fixed",
                            left: rect.left,
                            width: rect.width,
                            top: -20,
                            pointerEvents: "none",
                            opacity: pinOpacity,
                            visibility: pinVisible,
                            zIndex: 5}}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            top: { xs: 36, md: 88 },
                            left: 0,
                            right: 0,
                            px: { xs: 2, md: 0 },
                            display: "grid",
                            height: { xs: "100vh", md: "auto" },
                            placeContent: { xs: "center", md: "unset" },
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
                                {getBullets(step).map((b) => (
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
                                    frameSrc={FramePng}
                                    meta={IPHONE_15_PRO}
                                    steps={STEPS}
                                    screenSrcBuilder={(i, c) => slides[Number(i)][Number(c)]}
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
                                    frameSrc={FramePng}
                                    meta={IPHONE_15_PRO}
                                    steps={STEPS}
                                    screenSrcBuilder={(i, c) => slides[Number(i)][Number(c)]}
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
                                    frameSrc={FramePng}
                                    meta={IPHONE_15_PRO}
                                    steps={STEPS}
                                    screenSrcBuilder={(i, c) => slides[Number(i)][Number(c)]}
                                />
                            </Box>
                        </Box>
                    </Box>
                </motion.div>,
                document.getElementById("pin-root")
                )}
        </Box>
    );
}

const IPHONE_15_PRO = {
    w: 1290,
        h: 2640,
        inset: { top: 140, right: 90, bottom: 160, left: 90 },
    radius: 30,
};

export function Phone({
                          stepMV,
                          col,
                          width = 320,
                          frameSrc,
                          meta,
                          steps,
                          screenSrcBuilder,
                          isMdUp,
                      }) {
    const k = width / meta.w;
    const height = meta.h * k;

    const screenLeft   = meta.inset.left   * k - (isMdUp ? 10 : 5);
    const screenRight  = meta.inset.right  * k;
    const screenTop    = meta.inset.top    * k - (isMdUp ? 28 : 13);
    const screenBottom = meta.inset.bottom * k;

    const screenW = width  - screenLeft - screenRight + (isMdUp ? 12 : 5);
    const screenH = height - screenTop  - screenBottom + (isMdUp ? 35 : 15);
    const radius  = (meta.radius ?? 0) * k;

    const W = isMdUp ? 310 : 140;
    const H = isMdUp ? 660 : 300;

    const tMV = useTransform(stepMV, (v) => {
        const clamped = Math.max(0, Math.min(steps - 1, v));
        const base = Math.floor(clamped);
        return clamped - base;
    });


    const xMV = useTransform(tMV, (t) => Math.round((1 - t) * W));
    const showTopMV = useTransform(tMV, (t) => (t > 0 ? 1 : 0));

    const baseIdxRef = React.useRef(0);
    const nextIdxRef = React.useRef(1);

    const baseImgRef = React.useRef(null);
    const topImgRef  = React.useRef(null);

    useMotionValueEvent(stepMV, "change", (v) => {
        const clamped = Math.max(0, Math.min(steps - 1, v));
        const base = Math.floor(clamped);
        const next = Math.min(base + 1, steps - 1);

        if (base !== baseIdxRef.current && baseImgRef.current) {
            baseIdxRef.current = base;
            baseImgRef.current.src = screenSrcBuilder(base, col);
        }
        if (next !== nextIdxRef.current && topImgRef.current) {
            nextIdxRef.current = next;
            topImgRef.current.src = screenSrcBuilder(next, col);
        }
    });

    useMotionValueEvent(tMV, "change", (t) => {
        if (t >= 0.999 && baseImgRef.current && topImgRef.current) {
            baseImgRef.current.src = topImgRef.current.src;
            baseIdxRef.current = nextIdxRef.current;
        }
    });

    return (
        <Box sx={{ width, height, position: "relative" }}>

            <Box
                sx={{
                    position: "absolute",
                    left: screenLeft,
                    top: screenTop,
                    width: screenW,
                    height: screenH,
                    overflow: "hidden",
                    borderRadius: radius,
                    background: "transparent",
                    boxShadow: "inset 0 0 0 1px rgba(0,0,0,.06)",
                    contain: "paint",
                }}
            >

                <img
                    ref={baseImgRef}
                    src={screenSrcBuilder(0, col)}
                    alt=""
                    decoding="async"
                    style={{
                        position: "absolute",
                        inset: 0,
                        margin: "auto",
                        width: W,
                        height: H,
                        objectFit: "cover",
                        display: "block",
                        backfaceVisibility: "hidden",
                    }}
                />


                <motion.img
                    ref={topImgRef}
                    src={screenSrcBuilder(1, col)}
                    alt=""
                    decoding="async"
                    style={{
                        position: "absolute",
                        inset: 0,
                        margin: "auto",
                        width: W,
                        height: H,
                        objectFit: "cover",
                        display: "block",
                        x: xMV,
                        opacity: showTopMV,
                        willChange: "transform, opacity",
                        backfaceVisibility: "hidden",
                        pointerEvents: "none",
                    }}
                    transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }}
                />
            </Box>


            <Box
                component="img"
                src={frameSrc}
                alt=""
                sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    pointerEvents: "none",
                    display: "block",
                    filter: "drop-shadow(0 12px 36px rgba(0,0,0,.18))",
                }}
            />
        </Box>
    );
}

function getBullets(step) {
    const data = [
        ["Choose a scenario — or invent your own (say, a dragon flight).", "Make it yours: set roles, goals, and extra instructions. ", "Instant corrections with clear explanations (in your language).", "Get phrase ideas to keep the conversation flowing."],
        ["Use ready stories", "Generate your own from a prompt. You control length & level.", "Parallel view: target on top, native below. Hide or reveal."],
        ["Learn to ask questions", "Ask by voice — get instant feedback.", "Corrected version + more natural version, with explanations in your language.", "Now answer by voice — get the same clear feedback."],
        ["Build vocabulary & connected speech — describe the picture. ", "Need ideas? Tap smart hints for details", "Speak your description — get accuracy, instant fixes, and explanations in your language. "],
        ["Listen to stories, dialogues, and monologues — choose speaker accent and level.", "Quiz types: image choice, true/false, short answer.", "Answer and get instant feedback — build listening comprehension fast."],
    ];
    return data[step] ?? [];
}
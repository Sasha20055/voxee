import * as React from "react";
import { createPortal } from "react-dom";
import {Box, Container, Typography} from "@mui/material";
import {motion, useScroll, useTransform, useMotionValueEvent, useMotionValue, animate} from "framer-motion";
import {useRef} from "react";
import FramePng from "../../assets/also/mocap.png";
import SectionLayout from "./SectionLayout.jsx";
import {slides} from "../../assets/slides/imports.jsx";

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

    useMotionValueEvent(placeholderBottomOpacity, "change", (v) => {
        if (v > 0.5) {
            console.log("Компонент виден");
        } else {
            console.log("Компонент скрыт");
        }
    });

    return (
        <Box
            ref={wrapRef}
            component="section"
            sx={{
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
                // плавная прозрачность
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
                            top: { xs: 56, md: 88 },
                            left: 0,
                            right: 0,
                            px: { xs: 2, md: 0 },
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", md: "6fr 6fr" },
                            alignItems: "start",
                            gap: { xs: 3, md: 6 },
                        }}
                    >
                        <Box sx={{ pointerEvents: "auto", pr: { md: 4 }, maxWidth: 640, background: '#F6F8FB', padding: {xs: "20px", md:"90px"}, borderRadius: '50px', height: '100%', marginLeft: "30px" }}>
                            <motion.h4
                                key={step}
                                initial={{opacity: 0, y: 12}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.35}}
                            >
                                <Typography
                                    component="h4"
                                >
                                    {[
                                        "Dialogue Practice",
                                        "Parallel Stories",
                                        "Ask & Answer",
                                        "Learn to Describe",
                                        "Listening Practice",
                                    ][step]}
                                </Typography>
                            </motion.h4>

                            <motion.ul
                                key={`bullets-${step}`}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.35, delay: 0.05}}
                                style={{listStyle: "none", padding: 0, margin: "20px 0 0 0"}}
                            >
                                {getBullets(step).map((b) => (
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
                                    frameSrc={FramePng}
                                    meta={IPHONE_15_PRO}
                                    steps={STEPS}
                                    screenSrcBuilder={(i, c) => slides[Number(i)][Number(c)]}
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
                                    frameSrc={FramePng}
                                    meta={IPHONE_15_PRO}
                                    steps={STEPS}
                                    screenSrcBuilder={(i, c) => slides[Number(i)][Number(c)]}
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
                          width = 240,
                          frameSrc,
                          meta,
                          steps,
                          screenSrcBuilder,
                      }) {
    const k = width / meta.w;
    const height = meta.h * k;

    const screenLeft   = meta.inset.left   * k - 10;
    const screenRight  = meta.inset.right  * k;
    const screenTop    = meta.inset.top    * k - 20;
    const screenBottom = meta.inset.bottom * k;

    const screenW = width  - screenLeft - screenRight + 10;
    const screenH = height - screenTop  - screenBottom + 25;
    const radius  = (meta.radius ?? 0) * k;

    const xPx = useTransform(stepMV, (s) => `-${s * 100}%`);

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
                    background: "#000",
                    boxShadow: "inset 0 0 0 1px rgba(0,0,0,.06)",
                }}
            >
                <motion.div
                    style={{display: "flex", width: `${steps * 100}%`, height: "100%", x: xPx}}
                    transition={{type: "tween", ease: "easeInOut", duration: 0.35}}
                >
                    {Array.from({length: steps}).map((_, i) => (
                        <Box key={i} sx={{flex: "0 0 100%", height: "100%", position: "relative"}}>
                            <Box
                                component="img"
                                src={screenSrcBuilder(i, col)}
                                alt=""
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    width: "225px",
                                    height: "495px",
                                    display: "block",
                                    objectFit: "cover"
                                }}
                            />
                        </Box>
                    ))}
                </motion.div>
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
        ["Build vocabulary & connected speech — describe the picture. ", "Need ideas? Tap smart hints for details", "Speak your description — get accuracy, instant fixes, and explanations in your language. ", "Review your mistakes — open each fix to see the rule and examples.", "Learn the more natural version and sound fluent."],
        ["Listen to stories, dialogues, and monologues — choose speaker accent and level.", "Quiz types: image choice, true/false, short answer.", "Answer and get instant feedback — build listening comprehension fast."],
    ];
    return data[step] ?? [];
}
import * as React from "react";
import {
    AppBar, Box, Toolbar, IconButton, Typography,
    Button, Container, SvgIcon, Collapse, Divider
} from "@mui/material";
import LogoSvg from "../assets/logo.svg";
import MenuIconImg from "../assets/also/menuIconOpen.svg";
import MenuIconCloseImg from "../assets/also/menuIconClose.svg";
import ChangeLaguage from "./language/ChangeLaguage.jsx";
import {Squircle} from "@squircle-js/react";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const pages = ["Languages", "Why Voxee", "Exercises", "Support & Safety", "FAQ"];


const anchors = {
    "Languages":       "languagesSection",
    "Why Voxee":       "whyVoxeeSection",
    "Exercises":       "exercisesSection",
    "Support & Safety":"supportSection",
    "FAQ":             "faqSection",
};

function ResponsiveAppBar() {
    const menuBtnRef = React.useRef(null);
    const [activePage, setActivePage] = React.useState(null);
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const toggleMobile = () => setMobileOpen((v) => !v);

    const scrollToId = React.useCallback((id) => {
        const el = document.getElementById(id);
        if (!el) return;


        const appbar = document.querySelector("header.MuiAppBar-root");
        const offset = appbar ? appbar.getBoundingClientRect().height : 0;

        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const top = el.getBoundingClientRect().top + window.scrollY - offset - 8;

        window.scrollTo({
            top,
            behavior: prefersReduced ? "auto" : "smooth",
        });
    }, []);

    const onClickPage = (page) => {
        setActivePage(page);
        const id = anchors[page];
        if (id) scrollToId(id);
        setMobileOpen(false);
    };

    return (
        <AppBar position="block" color="transparent" elevation={0}>
            <Container maxWidth="xl" sx={{ overflow: 'visible' }}>
                <Box sx={{ m: { xs: '20px 5px', md: '40px 40px 0 40px' }, position: 'relative', zIndex: 6 }}>

                <Box sx={{ zIndex: "6", position: 'relative' }}>
                    <Squircle
                        cornerRadius={23}
                        cornerSmoothing={1}
                        style={{ width: '100%', height: 'auto', display: 'block',

                                background: 'white',
                                padding: '10px 46px',


                                cornerStroke: 'rgba(39,43,55,0.12)',
                                cornerStrokeWidth: 0,
                                overflow: 'hidden',    }}
                    >
                        <Toolbar
                            disableGutters
                        >

                            <Typography
                                component="a"
                                href="#top"
                                sx={{ mr: 2, display: { xs: "none", md: "flex" }, color: "inherit", textDecoration: "none" }}
                            >
                                <SvgIcon viewBox="0 0 64 24" sx={{ width: {md: 111, lg:145}, height: "auto", display: "block" }}>
                                    <image href={LogoSvg} width="64" height="24" />
                                </SvgIcon>
                            </Typography>


                            <Typography
                                component="a"
                                href="#homeSection"
                                sx={{
                                    mr: 2,
                                    display: { xs: "flex", md: "none" },
                                    flexGrow: 1,
                                    alignItems: "center",
                                }}
                            >
                                <SvgIcon viewBox="0 0 64 24" sx={{ width: 100, height: "auto", display: "block" }}>
                                    <image href={LogoSvg} width="64" height="24" />
                                </SvgIcon>
                            </Typography>

                            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "flex-end" }}>
                                <IconButton ref={menuBtnRef} onClick={toggleMobile} aria-label={mobileOpen ? "Close menu" : "Open menu"}>
                                    {mobileOpen ? (
                                        <SvgIcon viewBox="0 0 38 24" sx={{ width: 38, height: "auto", display: "block" }}>
                                            <image href={MenuIconCloseImg} width={38} height={24} />
                                        </SvgIcon>
                                    ) : (
                                        <SvgIcon viewBox="0 0 38 24" sx={{ width: 38, height: "auto", display: "block" }}>
                                            <image href={MenuIconImg} width={38} height={24} />
                                        </SvgIcon>
                                    )}
                                </IconButton>
                            </Box>

                            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center", gap: 1 }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        disableRipple
                                        onClick={() => onClickPage(page)}
                                        sx={{
                                            position: "relative",
                                            px: {lg: 2.25, md: 0},
                                            py: {lg: 1.25, md: 0},
                                            textTransform: "none",
                                            color: "text.primary",
                                            whiteSpace: "nowrap",
                                            "&:hover": { bgcolor: "transparent" },
                                            "&:hover ._label": {
                                                textShadow: `
                                                0  0.015em 0 currentColor,
                                                0 -0.015em 0 currentColor,
                                                0.015em 0 0 currentColor,
                                               -0.015em 0 0 currentColor
                                              `,
                                            },

                                            "& ._label": {
                                                transition: "text-shadow .2s ease",
                                            },
                                            "&::after": {
                                                content: '""',
                                                position: "absolute",
                                                left: 8,
                                                right: 8,
                                                bottom: 0,
                                                height: 4,
                                                borderRadius: 999,
                                                background:
                                                    "linear-gradient(\n" +
                                                    "          90deg,\n" +
                                                    "          rgba(188, 218, 243, 0.61) 0%,\n" +
                                                    "          rgba(220, 247, 251, 0.68) 45%,\n" +
                                                    "          rgba(196, 246, 251, 0.43) 100%\n" +
                                                    "  );",
                                                transform: "scaleX(0)",
                                                transformOrigin: "center",
                                                opacity: 0,
                                                transition: "transform .35s ease, opacity .35s ease",
                                                pointerEvents: "none",
                                                boxShadow: "0 4px 18px rgba(160,210,255,0.35)",
                                            },
                                            "&:hover::after, &:focus-visible::after": {
                                                transform: "scaleX(1)",
                                                opacity: 1,
                                            },
                                        }}
                                    >
                                        <span className="_label">{page}</span>
                                    </Button>
                                ))}
                            </Box>
                            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                                <ChangeLaguage />
                            </Box>
                        </Toolbar>
                    </Squircle>
                </Box>
                    <ClickAwayListener
                        onClickAway={(event) => {
                            if (menuBtnRef.current?.contains(event.target)) return;
                            if (mobileOpen) setMobileOpen(false);
                        }}
                        mouseEvent="onMouseDown"
                        touchEvent="onTouchStart"
                    >
                <Collapse
                    in={mobileOpen}
                    timeout="auto"
                    unmountOnExit
                    sx={{ position: 'absolute',
                        left: 0,
                        right: 0,
                        top: '50px',
                        zIndex: 5, }}
                >
                    <Box>
                        <Box
                            sx={{
                                bgcolor: 'white',
                                px: '46px',
                                pt: 2,
                                pb: 1.25,
                                zIndex: 2,
                                position: 'relative',
                                paddingTop: "50px",
                            }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25, alignItems: 'center' }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        fullWidth
                                        disableRipple
                                        onClick={() => onClickPage(page)}
                                        sx={{
                                            textTransform: 'none',
                                            fontWeight: 600,
                                            color: 'text.primary',
                                            py: 1,
                                            '&:hover,&:active,&.Mui-focusVisible': { bgcolor: 'transparent' },
                                        }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>
                        </Box>

                        <Squircle
                            cornerRadius={23}
                            cornerSmoothing={1}
                            style={{
                                display: 'block',
                                position: "relative",
                                top: "-50px",
                                zIndex: 1,
                                width: '100%',
                                background: 'white',
                                height: 'auto',
                                paddingTop: '50px',
                                overflow: 'hidden',
                            }}
                        >
                            <Box sx={{ px: '46px', pb: 2, textAlign: 'center' }}>
                                <Divider sx={{ my: 1.25, width: '100%' }} />
                                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                                    <ChangeLaguage />
                                </Box>
                            </Box>
                        </Squircle>
                    </Box>
                </Collapse>
                    </ClickAwayListener>
                </Box>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
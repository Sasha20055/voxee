import * as React from "react";
import {
    AppBar, Box, Toolbar, IconButton, Typography,
    Button, Container, SvgIcon, Collapse, Divider
} from "@mui/material";
import LogoSvg from "../assets/logo.svg";
import MenuIconImg from "../assets/also/menuIconOpen.svg";
import MenuIconCloseImg from "../assets/also/menuIconClose.svg";
import ChangeLaguage from "./language/ChangeLaguage.jsx";

const pages = ["Languages", "Why Voxee", "Exercises", "Support & Safety", "FAQ"];

function ResponsiveAppBar() {
    const [activePage, setActivePage] = React.useState(null);
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const toggleMobile = () => setMobileOpen((v) => !v);
    const onClickPage = (page) => {
        setActivePage(page);
        setMobileOpen(false);
    };

    return (
        <AppBar position="block" color="transparent" elevation={0}>
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{ m: "40px 40px 0 40px", bgcolor: "white", px: "46px", py: "10px", borderRadius: 2 }}
                >

                    <Typography
                        component="a"
                        href="#top"
                        sx={{ mr: 2, display: { xs: "none", md: "flex" }, color: "inherit", textDecoration: "none" }}
                    >
                        <SvgIcon viewBox="0 0 64 24" sx={{ width: 100, height: "auto", display: "block" }}>
                            <image href={LogoSvg} width="64" height="24" />
                        </SvgIcon>
                    </Typography>


                    <Typography
                        component="a"
                        href="#top"
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

                    {/* Кнопка меню: mobile */}
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "flex-end" }}>
                        <IconButton onClick={toggleMobile} aria-label={mobileOpen ? "Close menu" : "Open menu"}>
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
                                className={activePage === page ? "active" : ""}
                                sx={{
                                    position: "relative",
                                    px: 2.25,
                                    py: 1.25,
                                    textTransform: "none",
                                    "&:hover": { bgcolor: "transparent" },
                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        left: 8,
                                        right: 8,
                                        bottom: -8,
                                        height: 4,
                                        background:
                                            "linear-gradient(90deg, rgb(173,216,230), rgb(176,224,230), rgb(221,241,250), rgb(200,200,255))",
                                        borderRadius: "999px",
                                        transform: "scaleX(0)",
                                        opacity: 0,
                                        transition: "transform .35s ease, opacity .35s ease",
                                    },
                                    "&.active::after": { transform: "scaleX(1)", opacity: 1 },
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        <ChangeLaguage />
                    </Box>
                </Toolbar>

                {/* Панель мобильного меню — выезжает вниз */}
                <Collapse sx={{ position: 'relative',
                    top: '-20px',}} in={mobileOpen} timeout={350} unmountOnExit>
                    <Box
                        sx={{
                            mx: "40px",
                            mb: 3,
                            px: "46px",
                            py: 2,
                            bgcolor: "white",
                            display: { xs: "block", md: "none" },
                        }}
                    >
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25, alignItems: "center" }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    fullWidth
                                    disableRipple
                                    onClick={() => onClickPage(page)}
                                    sx={{
                                        textTransform: "none",
                                        fontWeight: 600,
                                        color: "text.primary",
                                        py: 1,
                                        "&:hover,&:active,&.Mui-focusVisible": { bgcolor: "transparent" },
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                            <Divider sx={{ my: 1.25, width: "100%" }} />
                            <ChangeLaguage />
                        </Box>
                    </Box>
                </Collapse>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
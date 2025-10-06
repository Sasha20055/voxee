import * as React from "react";
import {
    Box,
    Container,
    Divider,
    Grid,
    Link as MuiLink,
    Stack,
    SvgIcon,
    Typography,
} from "@mui/material";
import LogoSvg from "../../assets/logo.svg";
import {Squircle} from "@squircle-js/react";
import {useTranslation} from "react-i18next";


const NAV_KEYS = ["languages", "whyVoxee", "exercises", "support", "faq"];

const anchors = {
    languages: "languagesSection",
    whyVoxee: "whyVoxeeSection",
    exercises: "exercisesSection",
    support: "supportSection",
    faq: "faqSection",
};

function useSmoothScroll() {
    return React.useCallback((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const appbar = document.querySelector("header.MuiAppBar-root");
        const offset = appbar ? (appbar).getBoundingClientRect().height : 0;
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const top = el.getBoundingClientRect().top + window.scrollY - offset - 8;
        window.scrollTo({ top, behavior: prefersReduced ? "auto" : "smooth" });
    }, []);
}

export default function Footer() {
    const { t: footer } = useTranslation("common", { keyPrefix: "footer" });
    const pages = React.useMemo(
        () => NAV_KEYS.map((key) => ({ key, label: footer(key) })),
        [footer]
    );

    const scrollToId = useSmoothScroll();

    return (
        <Squircle
            cornerRadius={30}
            cornerSmoothing={1}
            className="section"
            style={{
                width: "100%",
                height: "auto",
                background:
                    "linear-gradient(90deg, rgba(188,218,243,.61) 0%, rgba(220,247,251,.68) 45%, rgba(196,246,251,.43) 100%)",
            }}
        >
            <Box component="footer" sx={{ padding: { xs: "14px", md: "50px 90px" } }}>
                <Squircle
                    cornerRadius={27}
                    cornerSmoothing={1}
                    style={{ maxWidth: "1536px", textAlign: "center", margin: "0 auto" }}
                >
                    <Container maxWidth="xl" sx={{ padding: "0 !important" }}>
                        <Box
                            sx={{
                                bgcolor: "background.paper",
                                px: { xs: 2, md: 4 },
                                py: { xs: 2, md: 3 },
                            }}
                        >
                            <Grid
                                container
                                spacing={2}
                                alignItems="center"
                                sx={{ justifyContent: { xs: "center", md: "space-between" } }}
                            >
                                <Grid item xs={12} md={4}>
                                    <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                                        <SvgIcon viewBox="0 0 64 24" sx={{ width: 120, height: "auto", display: { xs: "none", md: "block" } }}>
                                            <image href={LogoSvg} width="64" height="24" />
                                        </SvgIcon>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    <Stack
                                        direction="row"
                                        spacing={{ xs: 2, md: 3 }}
                                        justifyContent="center"
                                        sx={{
                                            display: { xs: "none", md: "flex" },
                                            "& a": {
                                                color: "text.primary",
                                                textDecoration: "none",
                                                fontWeight: 600,
                                                whiteSpace: "nowrap",
                                                "&:hover": { textDecoration: "underline" },
                                            },
                                        }}
                                    >
                                        {pages.map(({ key, label }) => (
                                            <MuiLink
                                                key={key}
                                                component="button"
                                                type="button"
                                                onClick={() => scrollToId(anchors[key])}
                                                sx={{
                                                    cursor: "pointer",
                                                    textDecoration: "none",
                                                    color: "black",
                                                    "&:hover ._label": {
                                                        textShadow: `
                              0  0.015em 0 currentColor,
                              0 -0.015em 0 currentColor,
                              0.015em 0 0 currentColor,
                             -0.015em 0 0 currentColor
                            `,
                                                    },
                                                    "& ._label": { transition: "text-shadow .2s ease" },
                                                }}
                                            >
                                                <span className="_label">{label}</span>
                                            </MuiLink>
                                        ))}
                                    </Stack>
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            position: "relative",
                                            left: { xs: "-10px", md: "0" },
                                        }}
                                    >
                                        <a href="https://play.google.com/" target="_blank" rel="noreferrer" className="googlePlaySvg footer" />
                                        <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer" className="appStoreSvg footer" />
                                    </Box>
                                </Grid>
                            </Grid>

                            <Divider sx={{ my: { xs: 2, md: 3 }, opacity: 0.4 }} />

                            <Grid
                                container
                                spacing={2}
                                sx={{ display: "flex", flexWrap: "nowrap" }}
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Grid item xs={12} md={4}>
                                    <SvgIcon viewBox="0 0 64 24" sx={{ width: 105, height: "auto", display: { xs: "block", md: "none" } }}>
                                        <image href={LogoSvg} width="64" height="24" />
                                    </SvgIcon>
                                    <Typography
                                        variant="p"
                                        sx={{ whiteSpace: "nowrap" }}
                                        color="text.secondary"
                                        textAlign={{ xs: "center", md: "left" }}
                                    >
                                        © {new Date().getFullYear()} Voxee
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} md={8}>
                                    <Stack
                                        direction="row"
                                        justifyContent={{ xs: "end", md: "flex-end" }}
                                        sx={{
                                            flexWrap: "wrap",
                                            flexDirection: { xs: "column", md: "row" },
                                            paddingRight: { xs: "30px", md: "auto" },
                                            textAlign: { xs: "start", md: "center" },
                                            gap: { xs: "12px", md: 3 },
                                            "& a, & button": {
                                                color: "text.secondary",
                                                textDecoration: "none",
                                                whiteSpace: "nowrap",
                                            },
                                        }}
                                    >
                                        <MuiLink
                                            component="button"
                                            type="button"
                                            onClick={() => window.open("/terms.html")}
                                            sx={{
                                                cursor: "pointer",
                                                "&:hover ._label": {
                                                    textShadow: `
                            0  0.015em 0 currentColor,
                            0 -0.015em 0 currentColor,
                            0.015em 0 0 currentColor,
                           -0.015em 0 0 currentColor
                          `,
                                                },
                                                "& ._label": { transition: "text-shadow .2s ease" },
                                            }}
                                        >
                      <span className="_label">
                        <Typography component="span">{footer("termsOfUse")}</Typography>
                      </span>
                                        </MuiLink>
                                        <MuiLink
                                            component="button"
                                            type="button"
                                            onClick={() => window.open("/privacy.html")}
                                            sx={{
                                                cursor: "pointer",
                                                "&:hover ._label": {
                                                    textShadow: `
                            0  0.015em 0 currentColor,
                            0 -0.015em 0 currentColor,
                            0.015em 0 0 currentColor,
                           -0.015em 0 0 currentColor
                          `,
                                                },
                                                "& ._label": { transition: "text-shadow .2s ease" },
                                            }}
                                        >
                      <span className="_label">
                        <Typography component="span" sx={{ fontSize: { xs: "12px", md: "14px" } }}>
                          {footer("privacyPolicy")}
                        </Typography>
                      </span>
                                        </MuiLink>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
            </Squircle>
        </Box>
        </Squircle>
    );
}
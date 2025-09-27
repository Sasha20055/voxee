import * as React from "react";
import {
    Box,
    Container,
    Grid,
    Stack,
    Divider,
    Typography,
    Link as MuiLink,
    SvgIcon,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@mui/material";
import LogoSvg from "../../assets/logo.svg";
import {Squircle} from "@squircle-js/react";

const pages = ["Languages", "Why Voxee", "Exercises", "Support & Safety", "FAQ"];

const anchors = {
    "Languages":       "languagesSection",
    "Why Voxee":       "whyVoxeeSection",
    "Exercises":       "exercisesSection",
    "Support & Safety":"supportSection",
    "FAQ":             "faqSection",
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
    const scrollToId = useSmoothScroll();

    const [open, setOpen] = React.useState(null);
    const handleOpen = (k) => () => setOpen(k);
    const handleClose = () => setOpen(null);

    return (
        <Squircle
            cornerRadius={30}
            cornerSmoothing={1}
            className="section"
            style={{ width: '100%', height: 'auto', background:
                    "linear-gradient(90deg, rgba(188,218,243,.61) 0%, rgba(220,247,251,.68) 45%, rgba(196,246,251,.43) 100%)"}}
        >
        <Box
            component="footer"
            sx={{padding: {xs: "14px", md: "50px 90px"}}}
        >
            <Squircle
                cornerRadius={27}
                cornerSmoothing={1}
                style={{maxWidth: "1536px", textAlign: "center", margin: "0 auto"}}
            >
            <Container maxWidth="xl" sx={{padding: "0 !important"}}>
                <Box
                    sx={{
                        bgcolor: "background.paper",
                        px: { xs: 2, md: 4 },
                        py: { xs: 2, md: 3 }
                    }}
                >
                    <Grid container spacing={2} alignItems="center" justifyContent="space-between">
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
                                {pages.map((p) => (
                                    <MuiLink
                                        key={p}
                                        component="button"
                                        type="button"
                                        onClick={() => anchors[p] && scrollToId(anchors[p])}
                                        sx={{ cursor: "pointer", textDecoration: 'none', color: "black",
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
                                        }}
                                    >
                                        <span className="_label">{p}</span>
                                    </MuiLink>
                                ))}
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
                                variant="body2"
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
                                    gap: { xs: 2, md: 3 },
                                    "& a, & button": {
                                        color: "text.secondary",
                                        textDecoration: "none",
                                        whiteSpace: "nowrap",
                                    },
                                }}
                            >
                                <MuiLink component="button" type="button" onClick={handleOpen("terms")} sx={{ cursor: "pointer","&:hover ._label": {
                                        textShadow: `
                                                0  0.015em 0 currentColor,
                                                0 -0.015em 0 currentColor,
                                                0.015em 0 0 currentColor,
                                               -0.015em 0 0 currentColor
                                              `,
                                    },

                                    "& ._label": {
                                        transition: "text-shadow .2s ease",
                                    },  }}>
                                    <span className="_label">Terms of Use</span>
                                </MuiLink>
                                <MuiLink component="button" type="button" onClick={handleOpen("privacy")} sx={{ cursor: "pointer","&:hover ._label": {
                                        textShadow: `
                                                0  0.015em 0 currentColor,
                                                0 -0.015em 0 currentColor,
                                                0.015em 0 0 currentColor,
                                               -0.015em 0 0 currentColor
                                              `,
                                    },

                                    "& ._label": {
                                        transition: "text-shadow .2s ease",
                                    }, }}>
                                    <span className="_label">Privacy Policy</span>
                                </MuiLink>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            {/* МОДАЛКИ */}
            <Dialog open={open === "terms"} sx={{borderRadius: "50px"}} onClose={handleClose} fullWidth maxWidth="md" keepMounted scroll="body">
                <DialogTitle>Terms of Use</DialogTitle>
                <DialogContent dividers>
                    <section aria-labelledby="policy-title" style={{lineHeight: 1.6}}>
                        <header>
                            <h1 id="policy-title" style={{marginBottom: "0.5em"}}>Privacy Policy</h1>
                            <p><strong>Last updated:</strong> May 27, 2025</p>
                        </header>

                        <p>
                            Welcome to AppName (“Company,” “we,” “our,” or “us”).<br/>
                            Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose,
                            and safeguard your information when you use AppName (the “Service”).
                        </p>

                        <hr/>

                        <h2 style={{marginTop: "1.5em"}}>1. Information We Collect</h2>

                        <h3>1.1 Information you provide</h3>
                        <ul>
                            <li><strong>Account details</strong> – name, email address, password, and any profile data
                                you choose to add.
                            </li>
                            <li><strong>Content</strong> – messages, photos, documents, or other materials you upload or
                                create.
                            </li>
                            <li><strong>Support queries</strong> – information you include when you contact us for help.
                            </li>
                        </ul>

                        <h3>1.2 Information collected automatically</h3>
                        <ul>
                            <li><strong>Device data</strong> – model, operating system, unique device identifiers,
                                mobile network.
                            </li>
                            <li><strong>Usage data</strong> – features you use, pages viewed, access dates and times,
                                crash logs.
                            </li>
                            <li><strong>Location data</strong> – precise or coarse location (only if you grant
                                permission).
                            </li>
                        </ul>

                        <h3>1.3 Information from third parties</h3>
                        <p>
                            If you link or sign in via a third-party service (e.g., Google, Apple), we may receive basic
                            profile information and authentication tokens.
                        </p>

                        <hr/>

                        <h2 style={{marginTop: "1.5em"}}>2. How We Use Your Information</h2>

                        <table
                            role="table"
                            style={{
                                width: "100%",
                                borderCollapse: "collapse",
                                marginTop: "1em",
                                marginBottom: "1em",
                            }}
                        >
                            <thead>
                            <tr>
                                <th style={{
                                    textAlign: "left",
                                    borderBottom: "1px solid #ddd",
                                    padding: "8px"
                                }}>Purpose
                                </th>
                                <th style={{
                                    textAlign: "left",
                                    borderBottom: "1px solid #ddd",
                                    padding: "8px"
                                }}>Examples
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style={{verticalAlign: "top", padding: "8px"}}>Provide &amp; maintain the Service
                                </td>
                                <td style={{verticalAlign: "top", padding: "8px"}}>Create and manage your account,
                                    deliver core features.
                                </td>
                            </tr>
                            <tr>
                                <td style={{verticalAlign: "top", padding: "8px"}}>Improve &amp; develop</td>
                                <td style={{verticalAlign: "top", padding: "8px"}}>Monitor performance, fix bugs,
                                    conduct analytics.
                                </td>
                            </tr>
                            <tr>
                                <td style={{verticalAlign: "top", padding: "8px"}}>Communicate</td>
                                <td style={{verticalAlign: "top", padding: "8px"}}>Send updates, security alerts, and
                                    support responses.
                                </td>
                            </tr>
                            <tr>
                                <td style={{verticalAlign: "top", padding: "8px"}}>Personalize</td>
                                <td style={{verticalAlign: "top", padding: "8px"}}>Tailor content, recommendations, and
                                    advertising (where applicable).
                                </td>
                            </tr>
                            <tr>
                                <td style={{verticalAlign: "top", padding: "8px"}}>Legal &amp; security</td>
                                <td style={{verticalAlign: "top", padding: "8px"}}>Detect fraud, enforce terms, comply
                                    with legal obligations.
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <p>
                            Our legal bases under the EU GDPR are consent, contract performance, legitimate interests,
                            and compliance with legal duties (as relevant).
                        </p>

                        <hr/>

                        <h2 style={{marginTop: "1.5em"}}>3. Sharing Your Information</h2>
                        <p>We never sell your personal data. We share it only:</p>
                        <ol>
                            <li><strong>Service providers</strong> – cloud hosting, analytics, customer support, and
                                similar vendors bound by confidentiality agreements.
                            </li>
                            <li><strong>Legal &amp; safety</strong> – when required by law or to protect rights,
                                property, or safety of users, the public, or Company.
                            </li>
                            <li><strong>Business transfers</strong> – in connection with a merger, acquisition, or asset
                                sale (you will be notified beforehand).
                            </li>
                        </ol>

                        <hr/>

                        <h2 style={{marginTop: "1.5em"}}>4. Data Retention</h2>
                        <p>
                            We keep your information only as long as necessary for the purposes described above, unless
                            a longer retention period is required or permitted by law. When data is no longer needed, we
                            securely delete or anonymize it.
                        </p>

                        <hr/>

                        <h2 style={{marginTop: "1.5em"}}>5. Your Rights</h2>
                        <p>Depending on your location, you may have the right to:</p>
                        <ul>
                            <li>Access, correct, or delete your personal data.</li>
                            <li>Object to or restrict processing.</li>
                            <li>Withdraw consent at any time (without affecting prior processing).</li>
                            <li>Data portability (receive a copy in a structured, machine-readable format).</li>
                            <li>Lodge a complaint with a supervisory authority.</li>
                        </ul>
                        <p>You can exercise these rights via the in-app settings or by contacting us (see Section
                            10).</p>

                        <hr/>

                        <h2 style={{marginTop: "1.5em"}}>6. Security</h2>
                        <p>
                            We use administrative, technical, and physical safeguards—such as encryption at rest and in
                            transit, access controls, and regular security audits—to protect your information. No system
                            is 100% secure, but we continuously work to improve our defences.
                        </p>

                        <hr/>

                        <h2 style={{marginTop: "1.5em"}}>7. International Transfers</h2>
                        <p>
                            Your information may be processed and stored outside your country of residence. Where
                            required, we rely on Standard Contractual Clauses or other approved safeguards to protect
                            transferred data.
                        </p>

                        <hr/>

                        <h2 style={{marginTop: "1.5em"}}>8. Children’s Privacy</h2>
                        <p>
                            The Service is not directed to children under 13 (or under the minimum age required by your
                            jurisdiction). We do not knowingly collect data from children. If you believe a child has
                            provided us personal information, please contact us so we can delete it.
                        </p>

                        <hr/>

                        <h2 style={{marginTop: "1.5em"}}>9. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. If changes are material, we will notify
                            you through the Service or by email before they take effect. Continued use after the
                            effective date constitutes acceptance of the revised policy.
                        </p>

                        <hr/>

                        <h2 style={{marginTop: "1.5em"}}>10. Contact Us</h2>
                        <address style={{fontStyle: "normal", lineHeight: 1.6}}>
                            <strong>Privacy Team – AppName</strong><br/>
                            Email: <a href="mailto:privacy@example.com">privacy@example.com</a><br/>
                            Address: 1234 App Lane, Suite 100, City, State 00000, Country
                        </address>

                        <hr/>

                        <p>Thank you for trusting AppName with your information.</p>
                    </section>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained">Close</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={open === "privacy"} sx={{borderRadius: "50px"}} onClose={handleClose} fullWidth maxWidth="md"
                    keepMounted scroll="body">
                <DialogTitle>Privacy Policy</DialogTitle>
                <DialogContent dividers>
                    <section aria-labelledby="policy-title" style={{lineHeight: 1.6}}>
                        <header>
                            <h1 id="policy-title" style={{marginBottom: "0.5em"}}>Terms of Use</h1>
                            <p><strong>Last updated:</strong> May 27, 2025</p>
                        </header>

                        <p>
                            Welcome to AppName (“Company,” “we,” “our,” or “us”).<br/>
                            Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose,
                            and safeguard your information when you use AppName (the “Service”).
                        </p>

                        <hr/>

                        <h2 style={{marginTop: "1.5em"}}>1. Information We Collect</h2>

                        <h3>1.1 Information you provide</h3>
                        <ul>
                            <li><strong>Account details</strong> – name, email address, password, and any profile data
                                you choose to add.
                            </li>
                            <li><strong>Content</strong> – messages, photos, documents, or other materials you upload or
                                create.
                            </li>
                            <li><strong>Support queries</strong> – information you include when you contact us for help.
                            </li>
                        </ul>

                        <h3>1.2 Information collected automatically</h3>
                        <ul>
                            <li><strong>Device data</strong> – model, operating system, unique device identifiers,
                                mobile network.
                            </li>
                            <li><strong>Usage data</strong> – features you use, pages viewed, access dates and times,
                                crash logs.
                            </li>
                            <li><strong>Location data</strong> – precise or coarse location (only if you grant
                                permission).
                            </li>
                        </ul>

                        <h3>1.3 Information from third parties</h3>
                        <p>
                            If you link or sign in via a third-party service (e.g., Google, Apple), we may receive basic
                            profile information and authentication tokens.
                        </p>

                        <hr/>

                        <h2 style={{marginTop: "1.5em"}}>2. How We Use Your Information</h2>

                        <table
                            role="table"
                            style={{
                                width: "100%",
                                borderCollapse: "collapse",
                                marginTop: "1em",
                                marginBottom: "1em",
                            }}
                        >
                            <thead>
                            <tr>
                                <th style={{
                                    textAlign: "left",
                                    borderBottom: "1px solid #ddd",
                                    padding: "8px"
                                }}>Purpose
                                </th>
                                <th style={{
                                    textAlign: "left",
                                    borderBottom: "1px solid #ddd",
                                    padding: "8px"
                                }}>Examples
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style={{verticalAlign: "top", padding: "8px"}}>Provide &amp; maintain the Service
                                </td>
                                <td style={{verticalAlign: "top", padding: "8px"}}>Create and manage your account,
                                    deliver core features.
                                </td>
                            </tr>
                            <tr>
                                <td style={{verticalAlign: "top", padding: "8px"}}>Improve &amp; develop</td>
                                <td style={{verticalAlign: "top", padding: "8px"}}>Monitor performance, fix bugs,
                                    conduct analytics.
                                </td>
                            </tr>
                            <tr>
                                <td style={{verticalAlign: "top", padding: "8px"}}>Communicate</td>
                                <td style={{verticalAlign: "top", padding: "8px"}}>Send updates, security alerts, and
                                    support responses.
                                </td>
                            </tr>
                            <tr>
                                <td style={{verticalAlign: "top", padding: "8px"}}>Personalize</td>
                                <td style={{verticalAlign: "top", padding: "8px"}}>Tailor content, recommendations, and
                                    advertising (where applicable).
                                </td>
                            </tr>
                            <tr>
                                <td style={{verticalAlign: "top", padding: "8px"}}>Legal &amp; security</td>
                                <td style={{verticalAlign: "top", padding: "8px"}}>Detect fraud, enforce terms, comply
                                    with legal obligations.
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <p>
                            Our legal bases under the EU GDPR are consent, contract performance, legitimate interests,
                            and compliance with legal duties (as relevant).
                        </p>

                        <hr/>

                        <h2 style={{marginTop: "1.5em"}}>3. Sharing Your Information</h2>
                        <p>We never sell your personal data. We share it only:</p>
                        <ol>
                            <li><strong>Service providers</strong> – cloud hosting, analytics, customer support, and
                                similar vendors bound by confidentiality agreements.
                            </li>
                            <li><strong>Legal &amp; safety</strong> – when required by law or to protect rights,
                                property, or safety of users, the public, or Company.
                            </li>
                            <li><strong>Business transfers</strong> – in connection with a merger, acquisition, or asset
                                sale (you will be notified beforehand).
                            </li>
                        </ol>

                        <hr/>

                        <h2 style={{marginTop: "1.5em"}}>4. Data Retention</h2>
                        <p>
                            We keep your information only as long as necessary for the purposes described above, unless
                            a longer retention period is required or permitted by law. When data is no longer needed, we
                            securely delete or anonymize it.
                        </p>

                        <hr/>

                        <h2 style={{marginTop: "1.5em"}}>5. Your Rights</h2>
                        <p>Depending on your location, you may have the right to:</p>
                        <ul>
                            <li>Access, correct, or delete your personal data.</li>
                            <li>Object to or restrict processing.</li>
                            <li>Withdraw consent at any time (without affecting prior processing).</li>
                            <li>Data portability (receive a copy in a structured, machine-readable format).</li>
                            <li>Lodge a complaint with a supervisory authority.</li>
                        </ul>
                        <p>You can exercise these rights via the in-app settings or by contacting us (see Section
                            10).</p>

                        <hr/>

                        <h2 style={{marginTop: "1.5em"}}>6. Security</h2>
                        <p>
                            We use administrative, technical, and physical safeguards—such as encryption at rest and in
                            transit, access controls, and regular security audits—to protect your information. No system
                            is 100% secure, but we continuously work to improve our defences.
                        </p>

                        <hr/>

                        <h2 style={{marginTop: "1.5em"}}>7. International Transfers</h2>
                        <p>
                            Your information may be processed and stored outside your country of residence. Where
                            required, we rely on Standard Contractual Clauses or other approved safeguards to protect
                            transferred data.
                        </p>

                        <hr/>

                        <h2 style={{marginTop: "1.5em"}}>8. Children’s Privacy</h2>
                        <p>
                            The Service is not directed to children under 13 (or under the minimum age required by your
                            jurisdiction). We do not knowingly collect data from children. If you believe a child has
                            provided us personal information, please contact us so we can delete it.
                        </p>

                        <hr/>

                        <h2 style={{marginTop: "1.5em"}}>9. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. If changes are material, we will notify
                            you through the Service or by email before they take effect. Continued use after the
                            effective date constitutes acceptance of the revised policy.
                        </p>

                        <hr/>

                        <h2 style={{marginTop: "1.5em"}}>10. Contact Us</h2>
                        <address style={{fontStyle: "normal", lineHeight: 1.6}}>
                            <strong>Privacy Team – AppName</strong><br/>
                            Email: <a href="mailto:privacy@example.com">privacy@example.com</a><br/>
                            Address: 1234 App Lane, Suite 100, City, State 00000, Country
                        </address>
                        <hr/>
                        <p>Thank you for trusting AppName with your information.</p>
                    </section>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained">Close</Button>
                </DialogActions>
            </Dialog>
            </Squircle>
        </Box>
        </Squircle>
    );
}
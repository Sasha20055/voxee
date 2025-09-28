import './FirstSectionComponent.module.css'
import {Box, Container, SvgIcon, Typography} from "@mui/material";
import CardSvg from "../../assets/also/card.svg";
import * as React from "react";
import ResponsiveNav from "../HeaderComponent.jsx";
import {Squircle} from "@squircle-js/react";
import StarSvg from "../../assets/also/star.svg";


const FirstSectionComponent = () => {

    function useKickSquircleOnMount() {
        React.useLayoutEffect(() => {
            window.dispatchEvent(new Event("resize"));
        }, []);

        React.useEffect(() => {
            if (document.fonts?.ready) {
                document.fonts.ready.then(() => {
                    window.dispatchEvent(new Event("resize"));
                });
            }
        }, []);
    }

    useKickSquircleOnMount();

    return (
        <Squircle
            cornerRadius={40}
            cornerSmoothing={1}
            className="firstSquircle section"
            style={{ width: '100%', height: 'auto'}}
        >
        <Box id="homeSection" className="firstSection">
            <ResponsiveNav/>
            <Container maxWidth="xl" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', padding: '50px 20px'}}>
                <Typography component="h1" sx={{textAlign: 'center', width: {xs: '100%', md: '80% '}, display: "inline-block"}}>Voxee — Learn languages by practicing  with AI
                    <SvgIcon viewBox="0 0 30 30" className="starSvg" sx={{ width: 22, height: "auto", display: "inline-block", position: "relative", top: "-50px", right: "5px" }}>
                        <image href={StarSvg} width="30" height="30" />
                    </SvgIcon>
                </Typography>
                <Typography component="p" sx={{textAlign: 'center', width: {xs: '100%', md: '50% '}}}>Live conversations, parallel stories, listening quizzes, and image descriptions — with AI feedback.</Typography>
                <Squircle
                    cornerRadius={10}
                    cornerSmoothing={1}
                    style={{ width: 'auto', height: 'auto', padding: '5px 10px', border: '1.5px solid rgba(39, 43, 55, 0.54)', textAlign: "center"}}
                >
                <Box sx={{display: 'inline-flex', margin: 0, justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
                    <SvgIcon viewBox="0 0 30 30" sx={{ width: 26, height: "auto", display: "block", position: "relative", top: "3px" }}>
                        <image href={CardSvg} width="30" height="30" />
                    </SvgIcon>
                        <Typography component="span" sx={{color: 'rgba(39, 43, 55, 0.54)', position: "relative", top: "2px"}}>Start with free credits — try every exercise. No card required.</Typography>
                </Box>
                </Squircle>
                <Box
                    sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', flexWrap: 'nowrap'}}>
                    <a href="https://www.apple.com/app-store/" target="_blank" className="appStoreSvg"/>
                    <a href="https://play.google.com/" target="_blank" className="googlePlaySvg"/>
                </Box>
                <Box className="firstPreviewImg"/>
            </Container>
        </Box>
        </Squircle>
    )
}

export default FirstSectionComponent
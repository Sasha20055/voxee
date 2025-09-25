import './FirstSectionComponent.module.css'
import {Box, Container, SvgIcon, Typography} from "@mui/material";
import CardSvg from "../../assets/also/card.svg";
import * as React from "react";
import ResponsiveNav from "../HeaderComponent.jsx";


const FirstSectionComponent = () => {
    return (
        <Box id="homeSection" className="firstSection section">
            <ResponsiveNav/>
            <Container maxWidth="xl" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', padding: '50px 20px'}}>
                <Typography component="h1" sx={{textAlign: 'center', width: {xs: '100%', md: '80% '}}}>Voxee — Learn languages by practicing  with AI</Typography>
                <Typography component="p" sx={{textAlign: 'center', width: {xs: '100%', md: '50% '}}}>Live conversations, parallel stories, listening quizzes, and image descriptions — with AI feedback.</Typography>
                <Box sx={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: '10px', padding: '5px 10px', border: '1px solid rgba(39, 43, 55, 0.54)', borderRadius: '10px'}}>
                    <SvgIcon viewBox="0 0 30 30" sx={{ width: 26, height: "auto", display: "block" }}>
                        <image href={CardSvg} width="30" height="30" />
                    </SvgIcon>
                    <span style={{color: 'rgba(39, 43, 55, 0.54)'}}>Start with free credits — try every exercise. No card required.</span>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="https://www.apple.com/app-store/" target="_blank" className="appStoreSvg"/>
                    <a href="https://play.google.com/" target="_blank" className="googlePlaySvg"/>
                </Box>
                <Box className="firstPreviewImg"/>
            </Container>
        </Box>
    )
}

export default FirstSectionComponent
import './FirstSectionComponent.module.css'
import {Box, Container, SvgIcon, Typography} from "@mui/material";
import CardSvg from "../../assets/also/card.svg";
import * as React from "react";
import ResponsiveNav from "../HeaderComponent.jsx";
import {Squircle} from "@squircle-js/react";
import StarSvg from "../../assets/also/star.svg";
import {useTranslation} from "react-i18next";


const FirstSectionComponent = () => {
    const {t: home} = useTranslation("common", {keyPrefix: "home"});

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
                <Typography component="h1" sx={{textAlign: 'center', width: {xs: '100%', md: '80% '}, display: "inline-block"}}>{home("title")}
                    <SvgIcon viewBox="0 0 30 30" className="starSvg" sx={{ width: 22, height: "auto", display: "inline-block", position: "relative", top: "-50px", right: "5px" }}>
                        <image href={StarSvg} width="30" height="30" />
                    </SvgIcon>
                </Typography>
                <Typography component="p" sx={{textAlign: 'center', width: {xs: '100%', md: '50% '}}}>{home("subtitle")}</Typography>
                <Box sx={{width: 'auto', height: 'auto', padding: '5px 10px 10px 10px', border: '1.5px solid rgba(39, 43, 55, 0.54)', textAlign: "center", display: 'inline-flex', margin: 0, justifyContent: 'center', alignItems: 'center', gap: '10px', borderRadius: "10px"}}>
                    <SvgIcon viewBox="0 0 30 30" sx={{ width: 26, height: "auto", display: "block", position: "relative", top: "3px" }}>
                        <image href={CardSvg} width="30" height="30" />
                    </SvgIcon>
                        <Typography component="span" sx={{color: 'rgba(39, 43, 55, 0.54)', position: "relative", top: "2px"}}>{home("span")}</Typography>
                </Box>
                <Box
                    sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', flexWrap: 'nowrap'}}>
                    <a href="https://apps.apple.com/app/id6754035630" target="_blank" className="appStoreSvg"/>
                    <a href="https://play.google.com/store/apps/details?id=com.evermintlabs.voxee" target="_blank" className="googlePlaySvg"/>
                </Box>
                <Box className="firstPreviewImg"/>
            </Container>
        </Box>
        </Squircle>
    )
}

export default FirstSectionComponent
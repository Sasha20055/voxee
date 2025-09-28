import {Box, Container, Typography} from "@mui/material";

import ParallaxLanguages from "./LanguageCarousel.jsx";


const SecondSectionComponent = () => {
    return (
    <>
        <Box id="languagesSection" className="secondSection section">
            <Container maxWidth="xl" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', padding: '50px 20px 0 20px'}}>
                <Box>
                    <Typography component="h2" textAlign='center'>
                        Learn one or many languages.
                    </Typography>
                    <Typography component="h2" textAlign='center'>
                        Voices with different accents
                    </Typography>
                </Box>
                <Box sx={{display: 'flex', flexWrap: 'nowrap', gap: '10px', color: '#272B37'}}>
                    <Typography component="p" sx={{color:"#272B37 !important", fontWeight: "400 !important"}}>
                        English now
                    </Typography>
                    <Typography component="p" sx={{fontWeight: "400 !important"}}>
                        · More languages soon...
                    </Typography>
                </Box>
            </Container>
        </Box>
        <ParallaxLanguages speedTop={26} speedBot={34} gap={2} pauseOnHover />

    </>
    )
}

export default SecondSectionComponent;
import {Box, Container, Typography} from "@mui/material";

import ParallaxLanguages from "./LanguageCarousel.jsx";


const SecondSectionComponent = () => {
    return (
        <Box id="languagesSection" className="secondSection section">
            <Container maxWidth="xl" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', padding: '50px 20px'}}>
                <Typography component="h2" textAlign='center'>
                    Learn one or many languages. Voices with different accents
                </Typography>
                <Box sx={{display: 'flex', flexWrap: 'nowrap', gap: '10px', color: '#272B37'}}>
                    <Typography component="p">
                        English now
                    </Typography>
                    <Typography component="p">
                        · More languages soon...
                    </Typography>
                </Box>
                <ParallaxLanguages
                    speedTop={26}
                    speedBot={34}
                    gap={2}
                    pauseOnHover
                />

            </Container>
        </Box>
    )
}

export default SecondSectionComponent;
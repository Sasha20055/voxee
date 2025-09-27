import CustomizedAccordion from "./CustomizedAccordion.jsx";
import {Box, Container, Typography} from "@mui/material";


export default function SixthSectionComponent() {
    return (
        <Box id="faqSection" className="sixthSection section">
            <Container sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
                <Typography component="h2">
                    FAQ
                </Typography>
                <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
                    <div className='lastPreviewImg'/>
                    <CustomizedAccordion/>
                </Box>
            </Container>
        </Box>
    )
}
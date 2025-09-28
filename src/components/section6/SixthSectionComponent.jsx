import CustomizedAccordion from "./CustomizedAccordion.jsx";
import { Box, Container, Typography } from "@mui/material";
import {Squircle} from "@squircle-js/react";

export default function SixthSectionComponent() {
    return (
        <Box id="faqSection" className="sixthSection section">
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                }}
            >
                <Typography component="h2">FAQ</Typography>

                <Box
                    className="faqRow"
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: { xs: "center", md: "stretch" },
                        gap: "20px",
                        width: "100%",
                    }}
                >
                    <Squircle
                        cornerRadius={13}
                        cornerSmoothing={1}
                        className="sqlSixthSection"

                    >
                        <Box className="lastPreviewImg" sx={{width: {xs: "100%", md: "auto"}}}/>
                    </Squircle>

                        <Box className="faqAccordion" sx={{ width: "100%" }}>
                            <CustomizedAccordion />
                        </Box>
                </Box>
            </Container>
        </Box>
    );
}
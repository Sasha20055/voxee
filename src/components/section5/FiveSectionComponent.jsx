import {Box, Card, CardContent, CardMedia, Container, Grid, SvgIcon, Typography} from "@mui/material";
import Card1 from "../../assets/supportSvgs/support1.svg";
import Card2 from "../../assets/supportSvgs/support2.svg";
import Card3 from "../../assets/supportSvgs/support3.svg";
import Card4 from "../../assets/supportSvgs/support4.svg";
import * as React from "react";

const items = [
    { icon: Card1, title: "Privacy:",      text: "Your recordings and corrections are visible only to you." },
    { icon: Card2, title: "Payments:",     text: "Top-ups are handled by Apple and Google. No external links, no direct card forms." },
    { icon: Card3, title: "Support:",      text: "In-app Help & Feedback or email support@voxee.app." },
    { icon: Card4, title: "Availability:", text: "iOS and Android (Web — coming soon)." },
];

const FiveSectionComponent = () => {
    return (
        <Box id="supportSection" className="fiveSection section">
            <Container maxWidth="xl" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', padding: '50px 20px'}}>
                <Typography component="h2">
                    Safe, Simple, and Accessible
                </Typography>
                <Grid container spacing={3} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: { xs: "auto", md: "400px", lg: "320px", xl: "auto" }}}>
                    {items.map(item => {
                        return (
                            <Grid item xs={12} md={6} sx={{width: { xs: "100%", md: "48%" }, height: { xs: "20%", md: "40%" }  }}>
                                <Card className="card">
                                    <SvgIcon viewBox="0 0 97 97" sx={{ width: { xs: "56px", md: "97px"}, height: "auto", display: "block", background: '#F6F8FB', padding: {xs: '5px 10px', md: '11px 34px'}, borderRadius: '14px' }}>
                                        <image href={item.icon} width="97" height="97" />
                                    </SvgIcon>
                                    <CardContent sx={{background: '#F6F8FB', borderRadius: '14px'}}>
                                        <Typography gutterBottom variant="h4">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="span" color="text.secondary">
                                            {item.text}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </Box>
    )
}

export default FiveSectionComponent;
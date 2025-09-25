import {Box, Card, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import Card1 from "../../assets/cards/card1.webp"
import Card2 from "../../assets/cards/card2.webp"
import Card3 from "../../assets/cards/card3.webp"

const ThirdSectionComponent = () => {
    return (
        <Box id="whyVoxeeSection" className="thirdSection section">
            <Container maxWidth="xl" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', padding: '50px 20px'}}>
                <Typography component="h2">
                    Why Voxee
                </Typography>
                <Grid container spacing={3} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Grid item xs={12} md={4} sx={{width: { xs: "100%", md: "31%" }, height: { xs: "auto", md: "320px", lg: "300px", xl: "auto" } }}>
                        <Card className="card">
                            <CardMedia
                                component="img"
                                height="140"
                                image={Card1}
                                alt="Card 1"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4">
                                    Exercises That Really Work
                                </Typography>
                                <Typography variant="span" color="text.secondary">
                                    Interesting, well-designed exercises help you improve speaking, listening, and vocabulary for everyday life.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4} sx={{width: { xs: "100%", md: "31%" }, height: { xs: "auto", md: "320px", lg: "300px", xl: "auto" } }}>
                        <Card className="card">
                            <CardMedia
                                component="img"
                                height="140"
                                image={Card2}
                                alt="Card 2"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4">
                                    Powered by Advanced AI
                                </Typography>
                                <Typography variant="span" color="text.secondary">
                                    We use powerful, leading-edge AI for natural voices and smart help — like a tutor, anytime.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4} sx={{width: { xs: "100%", md: "31%" }, height: { xs: "auto", md: "320px", lg: "300px", xl: "auto" } }}>
                        <Card className="card">
                            <CardMedia
                                component="img"
                                height="140"
                                image={Card3}
                                alt="Card 3"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4">
                                    Clear Feedback & Smart Hints
                                </Typography>
                                <Typography variant="span" color="text.secondary">
                                    Get quick corrections with simple explanations — plus hints that help you keep practicing.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default ThirdSectionComponent
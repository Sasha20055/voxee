import {Box, Card, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import Card1 from "../../assets/cards/card1.webp"
import Card2 from "../../assets/cards/card2.webp"
import Card3 from "../../assets/cards/card3.webp"
import {Squircle} from "@squircle-js/react";

const ThirdSectionComponent = () => {
    return (
        <Box id="whyVoxeeSection" className="thirdSection section" sx={{background: "#F6F8FB", margin: "30px 0"}}>
            <Container maxWidth="xl" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '40px', padding: '50px 20px'}}>
                <Typography component="h2">
                    Why Voxee
                </Typography>
                <Grid
                    container
                    spacing={3}
                    sx={{ alignItems: "stretch", display: "flex", flexWrap: "nowrap", flexDirection: {xs: "column", md: "row"}, justifyContent: "center" }}   // <— растягивает item до максимальной высоты
                >
                    {[Card1, Card2, Card3].map((img, idx) => (
                        <Grid item xs={12}
                              md={4}
                              sx={{
                                  width: { xs: "100%", md: "31%" },
                                  display: "flex",
                              }}>
                            <Box sx={{ flex: 1, display: "flex" }}>
                                <Squircle
                                    cornerRadius={25}
                                    cornerSmoothing={1}
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        flex: 1,
                                        background: "#fff",
                                        border: "4px solid white",
                                        overflow: "hidden",
                                        boxShadow: "3px 4px 9.6px 0px #F2F5F9",
                                    }}
                                >
                                    <Card
                                        sx={{
                                            flex: 1,
                                            display: "flex",
                                            flexDirection: "column",
                                            boxShadow: "inset 0.1px 4px 9.6px 0 rgba(242, 245, 249, 0.5)"
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={img}
                                            alt={`Card ${idx + 1}`}
                                            sx={{
                                                width: "100%",
                                                height: {xs: 180, md: "auto"},
                                                objectFit: "contain",
                                                objectPosition: "center",
                                            }}
                                        />
                                        <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", padding: '0 16px 16px 16px !important' }}>
                                            <Typography gutterBottom variant="h4">
                                                {[
                                                    "Exercises That Really Work",
                                                    "Powered by Advanced AI",
                                                    "Clear Feedback & Smart Hints",
                                                ][idx]}
                                            </Typography>
                                            <Typography variant="span" sx={{ flexGrow: 1 }}>
                                                {[
                                                    "Interesting, well-designed exercises help you improve speaking, listening, and vocabulary for everyday life.",
                                                    "We use powerful, leading-edge AI for natural voices and smart help — like a tutor, anytime.",
                                                    "Get quick corrections with simple explanations — plus hints that help you keep practicing.",
                                                ][idx]}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Squircle>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default ThirdSectionComponent
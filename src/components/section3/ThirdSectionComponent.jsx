import {Box, Card, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import Card1 from "../../assets/cards/card1.webp"
import Card2 from "../../assets/cards/card2.webp"
import Card3 from "../../assets/cards/card3.webp"
import {Squircle} from "@squircle-js/react";
import * as React from "react";
import TitleWithStar from "../../helpers/TitleWithStar.jsx";
import {useTranslation} from "react-i18next";

const ThirdSectionComponent = () => {
    const { t: whyVoxee, i18n } = useTranslation("common", { keyPrefix: "whyVoxee" });

    React.useEffect(() => {
        const squircles = document.querySelectorAll("[style*='clip-path']");
        squircles.forEach(el => {
            el.style.clipPath = "none";
        });
    }, [i18n.language]);

    const titles = [
        whyVoxee("cards.0.title"),
        whyVoxee("cards.1.title"),
        whyVoxee("cards.2.title"),
    ];

    return (
        <Box id="whyVoxeeSection" className="thirdSection section" sx={{background: "#F6F8FB", margin: "30px 0"}}>
            <Container maxWidth="xl" sx={{
                display: 'flex', flexDirection: 'column',
                justifyContent: 'center', alignItems: 'center',
                gap: {xs: "26px", md:'40px'},
                padding: {xs: "30px 14px", md:'50px 20px'}
            }}>
                <Typography component="h2">{whyVoxee("title")}</Typography>
                <Grid container spacing={3}
                      sx={{ alignItems: "stretch", display: "flex", flexWrap: "nowrap",
                          flexDirection: {xs: "column", md: "row"}, justifyContent: "center" }}>
                    {[Card1, Card2, Card3].map((img, idx) => (
                        <Grid item xs={12} md={4} key={idx}
                              sx={{ width: { xs: "100%", md: "31%" }, display: "flex" }}>
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
                                    <Card sx={{ flex: 1, display: "flex", flexDirection: "column",
                                        boxShadow: "inset 0.1px 4px 9.6px 0 rgba(242, 245, 249, 0.5)" }}>
                                        <CardMedia
                                            component="img"
                                            image={img}
                                            alt={`Card ${idx + 1}`}
                                            onLoad={() => window.dispatchEvent(new Event("resize"))}
                                            sx={{
                                                width: "100%",
                                                height: { xs: 180, md: 200 },
                                                objectFit: "contain",
                                                objectPosition: "center",
                                            }}
                                        />
                                        <CardContent sx={{ flex: 1, display: "inline-flex",
                                            flexDirection: "column",
                                            padding: '0 16px 16px 16px !important' }}>
                                            <Typography gutterBottom variant="h4" sx={{ lineHeight: 1.2 }}>
                                                {idx === 1 ? <TitleWithStar text={titles[idx]}/> : titles[idx]}
                                            </Typography>
                                            <Typography variant="span" sx={{ flexGrow: 1 }}>
                                                {[
                                                    whyVoxee("cards.0.text"),
                                                    whyVoxee("cards.1.text"),
                                                    whyVoxee("cards.2.text"),
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
    );
};

export default ThirdSectionComponent;
import {Box, Card, CardContent, CardMedia, Container, Grid, SvgIcon, Typography} from "@mui/material";
import Card1 from "../../assets/cards/card1.webp"
import Card2 from "../../assets/cards/card2.webp"
import Card3 from "../../assets/cards/card3.webp"
import {Squircle} from "@squircle-js/react";
import * as React from "react";
import StarColorSvg from "../../assets/also/starColor.svg";

function TitleWithStar({ text }) {
    const words = text.trim().split(" ");
    const last = words.pop();
    const first = words.join(" ");

    return (
        <>
            {first}{" "}
            <Box
                component="span"
                sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                    columnGap: 0.5,
                }}
            >
                {last}
                <SvgIcon
                    viewBox="0 0 30 30"
                    sx={{
                        position: "relative",
                        top: { xs: "-12px", md: "-15px" },
                        left: { xs: "-8px", md: "-8px" },
                        fontSize: { xs: 17, md: 16 },
                        transform: { xs: "translateY(1px)", md: "translateY(2px)" },
                        flex: "0 0 auto",
                    }}
                >
                    <image href={StarColorSvg} width="30" height="30" />
                </SvgIcon>
            </Box>
        </>
    );
}

const ThirdSectionComponent = () => {
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

    const titles = [
        "Exercises That Really Work",
        "Powered by Advanced AI",
        "Clear Feedback & Smart Hints",
    ];


    return (
        <Box id="whyVoxeeSection" className="thirdSection section" sx={{background: "#F6F8FB", margin: "30px 0"}}>
            <Container maxWidth="xl" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: {xs: "26px", md:'40px'}, padding: {xs: "30px 14px", md:'50px 20px'}}}>
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
                                            onLoad={() => window.dispatchEvent(new Event("resize"))}
                                            sx={{
                                                width: "100%",
                                                height: { xs: 180, md: 200 },
                                                objectFit: "contain",
                                                objectPosition: "center",
                                            }}
                                        />
                                        <CardContent sx={{ flex: 1, display: "inline-flex", flexDirection: "column", padding: '0 16px 16px 16px !important' }}>
                                            <Typography gutterBottom variant="h4" sx={{lineHeight: 1.2}}>
                                                {idx === 1 ? <TitleWithStar text={titles[idx]}/> : titles[idx]}
                                            </Typography>
                                        <Typography variant="span" sx={{flexGrow: 1}}>
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
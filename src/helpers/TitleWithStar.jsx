import {Box, SvgIcon} from "@mui/material";
import StarColorSvg from "../assets/also/starColor.svg";
import * as React from "react";

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

export default TitleWithStar;
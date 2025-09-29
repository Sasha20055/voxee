import * as React from "react";
import {
    Accordion as MuiAccordion,
    AccordionDetails as MuiDetails,
    AccordionSummary as MuiSummary,
    accordionSummaryClasses,
    Box,
    Typography,
    Stack, SvgIcon,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowIcon from "../../assets/also/arrowLang.svg";
import ArrowIcon2 from "../../assets/also/arrowLang2.svg";
import {Squircle} from "@squircle-js/react";
import {useEffect} from "react";

const ACC_BG_BASE  = "#F6F8FB";
const ACC_BG_OPEN  = "#F6F8FB";

const Accordion = styled(MuiAccordion)(() => ({
    border: "none",
    boxShadow: "none",
    background: "transparent",
    "&:before": { display: "none" },
    marginBottom: 14,
    "&:last-of-type": { marginBottom: 0 },
}));

const Summary = styled(MuiSummary)(({ theme }) => ({
    minHeight: 84,
    background: ACC_BG_BASE,
    transition: "background .2s ease",
    flexDirection: "row",
    "&.Mui-expanded": { minHeight: 84, background: ACC_BG_OPEN },

    [`& .${accordionSummaryClasses.content}`]: { margin: 0, alignItems: "center" },

    [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
        marginLeft: "auto",
        width: 48,
        height: 48,
        display: "grid",
        placeItems: "center",
        transition: "transform .25s ease",
        "& svg": { fontSize: 36 },
    },
    [`& .${accordionSummaryClasses.expandIconWrapper}.Mui-expanded`]: {
        transform: "rotate(180deg)",
    },
}));

const Details = styled(MuiDetails)(({ theme }) => ({
    marginTop: theme.spacing(1.5),
    padding: theme.spacing(2.25, 2.75),
    lineHeight: 1.6,
    color: theme.palette.text.secondary,
}));

export default function FaqAccordion({faq}) {
    const DATA = [
        { q: faq("items.0.q"), a: faq("items.0.a") },
        { q: faq("items.1.q"), a: faq("items.1.a") },
        { q: faq("items.2.q"), a: faq("items.2.a") },
        { q: faq("items.3.q"), a: faq("items.3.a") },
        { q: faq("items.4.q"), a: faq("items.4.a") },
    ];
    const [expanded, setExpanded] = React.useState(DATA[0].q);

    useEffect(() => {
        setExpanded(DATA[0].q);
    }, [faq]);

    const onChange = (id) => (_e, isOpen) => {
        setExpanded(isOpen ? id : null);
    };

    return (
        <Box>
            <Stack>
                {DATA.map(({ q, a }) => {
                    const open = expanded === q;
                    return (
                    <Accordion
                        key={q}
                        disableGutters
                        expanded={expanded === q}
                        onChange={onChange(q)}
                    >
                        <Squircle
                            cornerRadius={20}
                            cornerSmoothing={1}
                        >
                        <Summary
                            sx={{
                                padding: {xs: '16px', md: '0 40px'},
                            }}
                            expandIcon={
                                <SvgIcon
                                    viewBox="0 0 24 24"
                                    sx={{
                                        width: { md: 32, xs: 18 },
                                        height: { md: 32, xs: 18 },
                                        transition: "transform .25s ease",
                                        transformOrigin: "center",
                                        color: open ? "#272B37" : "white !important",
                                    }}
                                >
                                    <image href={open ? ArrowIcon : ArrowIcon2} width="24" height="24" />
                                </SvgIcon>
                            }
                            aria-controls={`${q}-content`}
                            id={`${q}-header`}
                        >
                            <Typography
                                component="h4"
                                sx={{fontWeight: "500 !important"}}
                            >
                                {q}
                            </Typography>
                        </Summary>
                        </Squircle>
                        <Squircle
                            cornerRadius={20}
                            cornerSmoothing={1}
                            style={{
                                border: '4px solid #F6F8FB',
                                marginTop: "8px"
                            }}
                        >
                        <Details sx={{margin: 0, padding: {md: '20px 40px', xs: '16px'}}}>
                            <Typography component="p" sx={{fontWeight: '400 !important'}}>
                                {a}
                            </Typography>
                        </Details>
                        </Squircle>
                    </Accordion>
                    )})}
            </Stack>
        </Box>
    );
}
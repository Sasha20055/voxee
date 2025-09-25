// FaqAccordion.tsx
import * as React from "react";
import {
    Accordion as MuiAccordion,
    AccordionDetails as MuiDetails,
    AccordionSummary as MuiSummary,
    accordionSummaryClasses,
    Box,
    Typography,
    Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const DATA = [
    { q: "Is there a free trial period?", a: "Yes — you start with a free balance to try every exercise. No card required." },
    { q: "How do payments work?", a: "Top-ups are handled by Apple and Google. No external links, no direct card forms." },
    { q: "Which levels is it for?", a: "Beginner to advanced — content adapts to your level and goals." },
    { q: "Which languages can I learn now?", a: "English, Spanish, French, German, Italian, Japanese, Korean, Portuguese, Russian, Vietnamese." },
    { q: "How do I contact support?", a: "In-app Help & Feedback or email support@voxee.app." },
];

/** Цвета/радиусы под макет */
const ACC_BG_BASE  = "rgba(6,20,38,.04)";
const ACC_BG_OPEN  = "rgba(6,20,38,.08)";
const BODY_BG      = "#F6F8FB";
const RADIUS_OUTER = 24;
const RADIUS_INNER = 16;

/** Корень аккордеона без собственных фонов/теней */
const Accordion = styled(MuiAccordion)(() => ({
    border: "none",
    boxShadow: "none",
    background: "transparent",
    "&:before": { display: "none" },
    marginBottom: 16,
    "&:last-of-type": { marginBottom: 0 },
}));

/** Шапка вопроса */
const Summary = styled(MuiSummary)(({ theme }) => ({
    padding: '0 30px',
    minHeight: 84,
    borderRadius: RADIUS_OUTER,
    background: ACC_BG_BASE,
    transition: "background .2s ease",
    flexDirection: "row",
    "&.Mui-expanded": { minHeight: 84, background: ACC_BG_OPEN },

    [`& .${accordionSummaryClasses.content}`]: { margin: 0, alignItems: "center" },

    [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
        marginLeft: "auto",
        width: 48,
        height: 48,
        borderRadius: 12,
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
    borderRadius: RADIUS_INNER,
    border: '4px solid #F6F8FB',
    lineHeight: 1.6,
    color: theme.palette.text.secondary,
}));

export default function FaqAccordion() {
    const [expanded, setExpanded] = React.useState(DATA[0].q);

    const onChange =
        (id) =>
            (_e, isOpen) => {
                if (isOpen) setExpanded(id);
            };

    return (
        <Box>
            <Stack>
                {DATA.map(({ q, a }) => (
                    <Accordion
                        key={q}
                        disableGutters
                        expanded={expanded === q}
                        onChange={onChange(q)}
                    >
                        <Summary
                            expandIcon={<KeyboardArrowDownRoundedIcon />}
                            aria-controls={`${q}-content`}
                            id={`${q}-header`}
                        >
                            <Typography
                                component="h4"
                            >
                                {q}
                            </Typography>
                        </Summary>

                        <Details>
                            <Typography component="p">
                                {a}
                            </Typography>
                        </Details>
                    </Accordion>
                ))}
            </Stack>
        </Box>
    );
}
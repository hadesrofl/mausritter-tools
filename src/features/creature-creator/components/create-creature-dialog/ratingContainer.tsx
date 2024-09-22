import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ReactNode } from "react";

interface RatingContainer {
    children: ReactNode;
    title: string;
    hoverText: string;
}

export default function RatingContainer({ children, title, hoverText }: RatingContainer) {
    return <Grid container>
        <Grid size={12}>
            <Typography variant="body2" fontWeight="bold">{title}</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
            {children}
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
            <Typography component="span" sx={{ verticalAlign: "top" }}>{hoverText}</Typography>
        </Grid>
    </Grid>
}
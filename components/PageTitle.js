import { useTheme } from "@mui/material";
import { tokens } from "../theme/theme";
import Typography from "@mui/material/Typography";

const PageTitle = ({ children, ...props }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Typography
            textAlign="center"
            sx={{
                fontFamily: "Proxima Nova",
                fontSize: "1.75rem",
                fontWeight: "700",
                textTransform: "uppercase",
                marginBottom: "2rem",
                wordSpacing: "0.25rem",
                color: colors.primary[100],
                "& span": {
                    color: colors.accent,
                },
                "@media screen and (max-width: 900px)": {
                    fontSize: "1.5rem",
                },
            }}
            {...props}
        >
            {children}
        </Typography>
    )
}

export default PageTitle;
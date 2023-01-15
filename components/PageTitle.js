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
                fontSize: "1.75rem",
                lineHeight: "1",
                fontWeight: "700",
                textTransform: "uppercase",
                mt: "1rem",
                mb: "1.5rem",
                wordSpacing: "0.25rem",
                color: colors.primary[100],
                transition: "all 0.25s ease-in-out",
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
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme/theme";

const ResponsiveFormBox = ({ children, onSubmit, ...props }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
            maxWidth={{
                xs: "100%",
                sm: "600px",
                md: "600px",
                lg: "600px",
                xl: "600px",
            }}
            bgcolor={{
                xs: 'transparent',
                sm: colors.dialog,
                md: colors.dialog,
                lg: colors.dialog,
            }}
            padding={{
                xs: '1.5rem 1rem',
                sm: '1.5rem 1.5rem',
                md: '1.5rem 1.5rem',
                lg: "1.5rem 2rem",
            }}
            overflow="hidden"
            borderRadius="0.5rem"
            transition="all 0.3s ease"
            boxShadow={{
                xs: 'none',
                sm: "0 0.1rem 0.5rem rgba(0, 0, 0, 0.08)",
                md: "0 0.1rem 0.5rem rgba(0, 0, 0, 0.08)",
                lg: "0 0.1rem 0.5rem rgba(0, 0, 0, 0.08)",
                xl: "0 0.1rem 0.5rem rgba(0, 0, 0, 0.08)",
            }}
        >
            <form onSubmit={onSubmit} {...props}
                style={{
                    width: '100%',
                    maxWidth: '600px',
                }}
            >
                {children}
            </form>
        </Box>
    )
}

export default ResponsiveFormBox;
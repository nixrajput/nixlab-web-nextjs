import Head from 'next/head';
import { Box, useTheme } from "@mui/material";
import AppWrap from "../../components/AppWrap";
import ExpandedBox from "../../components/ExpandedBox";
import ResponsiveBox from "../../components/ResponsiveBox";
import PageTitle from "../../components/PageTitle";
import { tokens } from "../../theme/theme";

const CommunityGuideLines = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <ExpandedBox
            justifyContent="flex-start"
            alignItems="stretch"
        >
            <Head>
                <title>
                    Community Guidelines
                </title>
            </Head>

            <PageTitle>
                Community <span>Guidelines</span>
            </PageTitle>

            {/* <ResponsiveBox>
            </ResponsiveBox> */}
        </ExpandedBox>
    )
}

export default AppWrap(CommunityGuideLines);
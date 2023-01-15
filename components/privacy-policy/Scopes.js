import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const Scopes = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="stretch"
        >
            <h3
                style={{
                    color: colors.primary[100],
                }}
            >
                1. Scope
            </h3>

            <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="stretch"
                ml="1rem"
            >
                <Box
                    display='flex'
                    flexDirection='row'
                    alignItems='flex-start'
                    justifyContent='flex-start'
                    m='0.5rem 0'
                >
                    <p
                        style={{
                            color: colors.primary[100],
                            marginRight: '0.5rem',
                        }}
                    >
                        1.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        {`This Privacy Policy applies to the Services, 
                                Application, or any online application or service 
                                that refers to or links to this Privacy Policy. 
                                This Privacy Policy applies regardless of whether 
                                you have downloaded or accessed or used the Application 
                                from your mobile telephone or handheld device or any 
                                other computer resource to access our Services.`}
                    </p>
                </Box>

                <Box
                    display='flex'
                    flexDirection='row'
                    alignItems='flex-start'
                    justifyContent='flex-start'
                    m='0.5rem 0'
                >
                    <p
                        style={{
                            color: colors.primary[100],
                            marginRight: '0.5rem',
                        }}
                    >
                        2.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        {`Rippl is a public, social media platform. The users acknowledge 
                        and understand that any content (including their user handle, 
                        profile picture and published posts) created by the users, is 
                        publicly available and searchable by anyone around the world. 
                        It is advised that Users do not post any personal (or sensitive) 
                        information on the Application.You should be careful of what you 
                        are posting on the Application, as the updates will reflect in 
                        your feed and will be visible to other Users of the Application, 
                        or anyone else who accesses our Services, depending upon the 
                        privacy setting specifically chosen by you for your account.`}
                    </p>
                </Box>

                <Box
                    display='flex'
                    flexDirection='row'
                    alignItems='flex-start'
                    justifyContent='flex-start'
                    m='0.5rem 0'
                >
                    <p
                        style={{
                            color: colors.primary[100],
                            marginRight: '0.5rem',
                        }}
                    >
                        3.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        {`You acknowledge and agree that by providing public Content on 
                        Rippl, you are authorizing and advising us to disclose that 
                        information on the Application and allow for wide circulation. 
                        When you are using hashtags, our APIs, and that of other 
                        third-party service providers will also have access to such 
                        information. We do not govern the operations of these entities, 
                        and you may be required to adhere to their policies, hence, 
                        we urge you to refer to their policies and familiarize yourself 
                        with the same, prior to engaging with such third-party platforms.`}
                    </p>
                </Box>
            </Box>

        </Box>
    )
}

export default Scopes;
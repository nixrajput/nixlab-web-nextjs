import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const ThirdPartyServices = () => {
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
                4. THIRD PARTY SERVICES
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
                        You note that during your usage of our Services,
                        Company can place advertisement or other types of
                        commercial information on the Application. You also
                        agree to receive advertisement or other relevant
                        commercial information from us via e-mail or other
                        authorized means. The Company may provide its Users
                        with links to, or contact information for,
                        third-party sites or services. Please note that
                        we do not control such third-party websites, and
                        their interactions with you. We have not reviewed,
                        and do not review, all the material, including
                        goods or services, made available through
                        third-party sites. We therefore urge you to kindly
                        make an informed choice in interacting with such
                        third-party sites and ensure that you are familiar
                        with the policies of such sites before you proceed
                        with engaging, interacting, with such third-party
                        sites.
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
                        The Company is not responsible for, and does not
                        endorse, any third-party content, sites, or services
                        mentioned on the Application. Third party materials
                        accessed through or used by means of the third-party
                        sites may also be protected by copyright and other
                        intellectual property laws.
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
                        In compliance with legal requirements, advertisements
                        or promotional content will be dealt in accordance
                        with our Advertiser Guidelines. By using the Rippl
                        App, you agree to the measures implemented by us in
                        this regard.
                    </p>
                </Box>
            </Box>
        </Box>
    )
}

export default ThirdPartyServices;
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const InfoWeCollect = () => {
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
                2. Information We Collect
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
                        {`At the time of registration: When you choose to register on 
                        the Application, we will seek certain identifiers which qualify 
                        as personal data (as defined at law), and some of these 
                        identifiers will have to be mandatorily collected, and some 
                        will have to be collected only upon your discretion, 
                        and consent.`}
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
                        {`The information which you provide to us, mandatorily are:`}
                    </p>
                </Box>

                {/* ---------------------- */}

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
                            •
                        </p>

                        <p style={{
                            color: colors.primary[100],
                        }}
                        >
                            {`Mobile number and/or E-mail address: For creation of a 
                            unique profile, identification, authentication via OTP and 
                            any communications from us or on our behalf or by any third 
                            parties engaged by us to provide the Service.`}
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
                            •
                        </p>

                        <p style={{
                            color: colors.primary[100],
                        }}
                        >
                            {`Username or e-mail address or profile photo: If you sign 
                            up/sign in to your Rippl account using a One-Tap/Single Sign 
                            On (SSO) from any supported third party service which allows 
                            authentication of your identity and allows you to share 
                            personal information with us (such as your name or email or 
                            profile photo) to pre-populate signup/sign into the Rippl 
                            platform.`}
                        </p>
                    </Box>
                </Box>

                {/* ---------------------- */}

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
                        {`The information which you provide to us, on your discretion,
                        are:`}
                    </p>
                </Box>

                {/* ---------------------- */}

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    ml="1rem"
                >
                    {
                        [
                            "Name: for purposes of displaying on your profile.",
                            "User handle preference: for the purposes of identification on the Application.",
                            "Date of Birth: for the purposes of identification and/or displaying on your profile.",
                            "Gender: for the purposes of displaying on your profile.",
                            "Profile Picture: for the purposes of displaying on your profile.",
                            "Location: for the purposes of customising your experience on the Application.",
                            "The language that you wish to communicate in: for the purposes of posting content on Rippl.",
                            "Language preference: for the purposes of customisation of the Content, and other services offered to you.",
                            "Professional details: for the purposes of displaying on your profile and for customisation of the Content, and oth8er services offered to you.",
                            "Description of Self: for the purposes of displaying on your profile.",
                            "Relationship Status: for the purposes of displaying on your profile.",
                            "Website: for the purposes of displaying on your profile.",
                            "Access to information on your device to optimize your use and access of the Services. You can restrict the access granted to the Application, from the device settings. No device permission will be taken from you without your explicit consent."
                        ].map((text, index) => (
                            <Box
                                key={`text-${index}`}
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
                                    •
                                </p>

                                <p style={{
                                    color: colors.primary[100],
                                }}
                                >
                                    {text}
                                </p>
                            </Box>
                        ))
                    }
                </Box>

                {/* ---------------------- */}

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
                        4.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        {`At the time of profile verification – In order to verify your 
                        profile, we may collect the following information from you:`}
                    </p>
                </Box>

                {/* ---------------------- */}

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    ml="1rem"
                >
                    {
                        [
                            "Your name.",
                            "Email address.",
                            "Phone number.",
                            "Government-issued identification document(s). We will ask you for this information only when you seek to become an authenticated profile on the Application, while using our Services, and such information is not disclosed to the public.",
                            "In you log into to your Rippl account using a One-Tap/Single Sign On (SSO) from any supported third party service which allows authentication of your identity and allows you to share personal information, then we collect your name or email or profile photo as approved by you to pre-populate signup/sign into the Rippl platform."
                        ].map((text, index) => (
                            <Box
                                key={`text-${index}`}
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
                                    •
                                </p>

                                <p style={{
                                    color: colors.primary[100],
                                }}
                                >
                                    {text}
                                </p>
                            </Box>
                        ))
                    }
                </Box>

                {/* ---------------------- */}

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
                        5.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        {`Information to Third Party Service – In addition, if you 
                        authorise us to do so, we may grant/link third party services 
                        with Rippl (eg. Facebook, Twitter, Instagram, UPI, Google, 
                        Gpay etc)  etc.). On your authorization, we may grant such third 
                        parties access to some or all (depending on the permission you 
                        give) of your information through our own API for use in 
                        connection with their services. You have the ability to control 
                        what information you share with these third parties through our 
                        API, but please note that any information you share with third 
                        parties will be governed by their privacy policies and we do not 
                        assume any responsibility for such third party’s use of your 
                        information.`}
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
                        6.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        {`Information from your use of our Services – When you use our 
                        Services, we may collect the following information automatically:`}
                    </p>
                </Box>

                {/* ---------------------- */}

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    ml="1rem"
                >
                    {
                        [
                            "Content of the Posts (text, images, graphics, audio, visuals, etc.).",
                            "Users you follow on the Application.",
                            "Users who follow you on the Application.",
                            "People who have visited your profile and vice versa.",
                            "Information on your browser’s user agent string and server logs, including your IP address, information in the cookies and activity on the Application.",
                            "URL information, time stamp, visit information, your browsing history on the Application.",
                            "Device information, such as make, model and operating system of the device  used for browsing the Application.",
                            "Date of download and/or reinstall of the App.",
                            "Events related to your actions (follows, reactions to Posts, time spent, how often and when you visit the Application, etc).",
                            "Users who send you chat requests and have chatted with you.",
                            "The Unique Device Identifier on the Application.",
                            "Language",
                            "Locational information as permitted by you in your mobile device settings.We do not collect any further information which is not specifically communicated to you as per this Privacy Policy.",
                            "You have the ability and choice of restricting certain kinds of information from being collected by adjusting your phone and device settings. Please refer to your phone and device user manuals for more information."
                        ].map((text, index) => (
                            <Box
                                key={`text-${index}`}
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
                                    •
                                </p>

                                <p style={{
                                    color: colors.primary[100],
                                }}
                                >
                                    {text}
                                </p>
                            </Box>
                        ))
                    }
                </Box>

                {/* ---------------------- */}

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
                        7.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        {`Surveys – We may collect additional information at other times, 
                        including but not limited to, when you provide feedback(s), 
                        modify your content or email preferences, respond to surveys, 
                        provide comments, or communicate with us. This information may 
                        include your name, e-mail id, mobile number, location, etc. and 
                        only such information that you may choose to specifically provide 
                        to us.`}
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
                        8.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        {`Cookies – We use cookies and similar technologies which are 
                        necessary to its functioning. Some of these cookies are essential 
                        for us to provide you with the Services on the App. We, or our 
                        third-party service providers, may use cookies, mobile app 
                        analytics and similar technologies to track visitor activity and 
                        collect data on the App. We may combine this data with other 
                        personal data we have collected from users.`}
                    </p>
                </Box>
            </Box>
        </Box>
    )
}

export default InfoWeCollect;
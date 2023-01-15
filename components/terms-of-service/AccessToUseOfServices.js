import Link from "next/link";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const AccessToUseOfServices = () => {
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
                1. ACCESS TO AND CONTINUED USE OF SERVICES
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
                        You should have attained the age of majority in your
                        jurisdiction to be able to use and access our Services.
                        The Application has the right to terminate your account,
                        wherein the User is found to be defaulting on this
                        condition, or where we find that you are barred in law
                        from access to our Services.
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
                        You are responsible for your use of our Services, and
                        undertake to comply with the applicable laws, and act
                        in strict adherence to our
                        Terms, <Link href="/privacy-policy">
                            Privacy Policy</Link>,
                        and <Link href="/community-guidelines">
                            Community Guidelines</Link>, as well.
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
                        You may access our Services free of charge, or in
                        any such manner which is determined by the Company
                        and is conveyed to you from time to time.
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
                        4.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        The Services provided to you are for your personal
                        and non-commercial purposes only and should not be
                        shared with individuals in violation of these Terms
                        and allied policies. We specifically prohibit sale or
                        purchase of a Rippl account or handle.
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
                        5.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        You are responsible for safeguarding your account and
                        you agree not to disclose your password to any third
                        party. You agree that you will be solely responsible
                        for any activities or actions taken under your account
                        or handle name or password, irrespective of whether
                        you have authorized such activities or actions.
                        You will immediately notify the Company of any
                        unauthorized use of your password or your account,
                        upon becoming aware of any such discrepancy.
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
                        The Company further reserves the right to restrict the
                        circulation of any content if the said content violates
                        the <Link href="/community-guidelines">Community Guidelines
                        </Link> of the App. The Company may also suspend or
                        terminate your account for such a violation. Please refer
                        to our other policies on how we moderate the Content.
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
                        7.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        The Company is committed to safeguarding the
                        efficiency of the Application. For that reason,
                        we reserve the right to make changes to the
                        Application for maintenance at any time. If
                        such situations cause an interruption of your
                        Services for a reasonable duration, we shall
                        not bear any liability to you and/or to any
                        third parties. We will make attempts on a
                        best-efforts basis to let you beware of any
                        scheduled maintenance to such extent as is
                        possible.
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
                        You agree not to: circumvent, remove, degrade,
                        deactivate, or thwart any of the Contents of our
                        Service; use any robot, spider, scraper, or other
                        means to access our Service. You also agree not to
                        decompile, reverse engineer, and disassemble any
                        software or other products or processes accessible
                        through our Service.
                        Additionally, you agree not to upload, post,
                        e-mail or otherwise send or transmit any material
                        designed to interrupt, destroy, or limit the
                        functionality of our Service. We may terminate
                        or restrict your use of our Service if you violate
                        these Terms or are engaged in any illegal or
                        fraudulent or unethical or unwarranted or
                        otherwise malicious use of our Service.
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
                        9.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        You agree not to use the accounts of other Users,
                        disparage other accounts, or indulge in any activity
                        which violates the <Link href="/community-guidelines">
                            Community Guidelines</Link> of the Application.
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
                        10.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        We do not claim ownership of your content that you
                        post on or through the Service. By submitting,
                        posting, displaying, or communicating Content on
                        or through our Services, you hereby grant to us a
                        non-exclusive, royalty-free, transferable,
                        sub-licensable, worldwide license to host, use,
                        distribute, modify, run, copy, reproduce, process,
                        such Content across all formats, media now known,
                        or which may come into existence later. You represent
                        and warrant that you have, or have obtained,
                        all rights, licenses, necessary authorizations
                        required to grant the rights granted herein for
                        any Content that you submit, or post, or display,
                        or communicate through our Services and such
                        Content is not subject to copyright or other
                        proprietary rights of third parties unless you
                        are legally entitled to post such Content through
                        necessary permission or otherwise.
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
                        11.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        We do not undertake any obligation to monitor user
                        generated content, except to the extent required by
                        law. We are an intermediary that primarily enables
                        online interaction between two or more users and
                        allows them to create, upload, share, disseminate,
                        modify or access information using Rippl&apos;s services.
                        While Rippl supports valid and legitimate claims of
                        intellectual property ownership, it does not adjudicate
                        any claims. In the first instance, parties must resolve
                        any disputes relating to intellectual property amongst
                        themselves or through legal process, before reporting
                        to Rippl. If you believe that someone is violating your
                        or anyone else’s intellectual property, you may report
                        it by emailing to <a href="mailto:nixlab.in@gmail.com">
                            nixlab.in@gmail.com</a>. Please ensure that you submit
                        complete details of the violation and ownership of the
                        intellectual property in order for us to process the
                        report. Such reports will typically be processed
                        within 48 hours. Orders or directions of courts or
                        legal authorities will be honoured on priority.
                        The contents of a report (including any attachment)
                        and the reporter’s email address will be provided
                        to the person who posted the contested content
                        along with a request to respond to the claim within
                        36 hours. If no response is received within the
                        specified time, or, if in the sole discretion of
                        Rippl, either the report or the response are
                        unsatisfactory, Rippl will take such action as it
                        deems fit. Please note that Rippl is acting on a
                        best efforts basis and accepts no responsibility
                        for any actions taken by it. Any assertion or
                        adjudication of legal rights must be carried out
                        through legal process. Any abuse of this process
                        may lead to termination of your user account and/or
                        other legal consequences. Please do not hesitate to
                        seek your own legal advice before filing or
                        contesting any report for intellectual property
                        violation.
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
                        12.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        We reserve the right to update, modify, alter, amend,
                        these Terms at any time, at our sole discretion.
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
                        13.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        We do not endorse, support, represent, authorize the
                        circulation of all Content published on our Application,
                        and we do not further attest to the accuracy,
                        originality, reliability, legitimacy, completeness,
                        of such Content, as available on our Services.
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
                        14.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        All the Content that is available on the Application is
                        the sole responsibility of the originator of the Content.
                        Your use or reliance on any Content while availing the
                        Services is solely at your own risk. As a User, you may
                        come across Content which you may construe to be
                        offensive, harmful, misleading, inaccurate, or
                        inappropriate. We impress upon you that we may not
                        always monitor or control the Content accessible on
                        the Services, and as an intermediary we cannot assume
                        responsibility for such Content. Please use the Report
                        Rippl or Report User button within the Koo App to record
                        your reactions or contact the Grievance Officer as
                        stated below. You may also use the Reporting and
                        Redressal Forms available at
                        this <Link href="/reporting-and-redressal-forms">
                            link</Link>. While we will endeavor to do so, in
                        complying with legal directions or in other compelling
                        circumstances, it may not always be possible to
                        immediately notify you of an action taken on our part.
                        You may appeal against any action taken to the
                        Grievance Officer whose details are provided below.
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
                        15.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        We give you a personal, worldwide, royalty-free,
                        non-assignable and non-exclusive license to use
                        the software provided to you as part of the Services.
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
                        16.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        The Services made available to you are protected by
                        copyright, trademark, and other laws. Nothing in
                        these Terms gives you the right to use our trademarks,
                        logos, domain names, other distinctive brand features,
                        and other proprietary rights. All right, title, and
                        interest in and to the Services or any username or
                        handle names (excluding Content provided by users)
                        are and will remain the exclusive property of the
                        Company and its licensors.
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
                        17.
                    </p>

                    <p style={{
                        color: colors.primary[100],
                    }}
                    >
                        Any feedback, comments, or suggestions you may provide
                        regarding the Services is entirely voluntary, and we
                        will be free to use such feedback, comments, or
                        suggestions as we see fit and without any obligation
                        to you.
                    </p>
                </Box>
            </Box>
        </Box>
    )
}

export default AccessToUseOfServices;
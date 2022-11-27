import styles from '../../styles/privacy.module.scss';
import Head from 'next/head';
import { Box, useTheme } from "@mui/material";
import AppWrap from "../../components/AppWrap";
import ExpandedBox from "../../components/ExpandedBox";
import ResponsiveBox from "../../components/ResponsiveBox";
import PageTitle from "../../components/PageTitle";
import { tokens } from "../../theme/theme";
import Intro from './Intro';
import Scopes from './Scopes';
import InfoWeCollect from './InfoWeCollect';
import WhyWeCollectInfo from './WhyWeCollectInfo';



const whyWeCollect = [
    {
        id: 1,
        text: "To help us identify you when you log onto the Application and when you register an account with us, and, to validate, authorize and map a specific profile with an authorized user.",
    },
    {
        id: 2,
        text: "To enhance the quality of the Services that we provide and improve your experience during browsing.",
    },
    {
        id: 3,
        text: "For providing location-based services, as and where requested by you.",
    },
    {
        id: 4,
        text: "For the performance of legal obligations.",
    },
    {
        id: 5,
        text: "To communicate with you.",
    },
    {
        id: 6,
        text: "To provide you with news, special offers, general information about other products and services along with marketing information and surveys, as agreed to by you.",
    },
    {
        id: 7,
        text: "To provide and process service requests initiated by you.",
    },
];

const WhenWeShare = [
    {
        id: 1,
        text: "We may share any information with our trusted partners or third parties who provide us with infrastructure support services, for meeting the obligations agreed to between you and us. We may also share aggregated, non-personally identifiable information publicly and with our partners, like publishers, advertisers or connected sites to show trends about the general use of our Services. We will seek your consent prior to using or sharing your personal information for any other purpose, if so, identified at a later stage.",
    },
    {
        id: 2,
        text: "We may also use your information to perform analytics and conduct customer research, to determine your interest, for identifying content that generates sales and to analyse traffic patterns.",
    },
    {
        id: 3,
        text: "We also use your information to market to you as per the laws of your country, and to the extent permissible.",
    },
    {
        id: 4,
        text: "You have the ability to allow us to share your information to third parties so that you can avail their services. You may disable or limit such sharing at any time.",
    },
];

const DiscloserOfInformation = [
    {
        id: 1,
        text: "We may also disclose your Personal Information only:",
        children: [
            "As required by law, such as to comply with a judicial order, executive orders, requirement by a law enforcement authority, or by other legal processes.",
            "When your desired products and services can only be provided if your personal information is disclosed.\nWhen we believe, in good faith, that disclosure is necessary to protect our rights, protect your safety or the safety of others, or, investigate fraud or crime.",
            "If we (or our affiliates) are involved in a merger, acquisition, or sale of all or substantially all of its assets or equity. Such information shall be disaggregated to the extent possible and shall be subject to execution of appropriate non disclosure agreements and binding privacy undertakings."
        ]
    },
    {
        id: 2,
        text: "We will never rent or sell your personally identifiable information to others."
    }
];

const UserRights = [
    {
        id: 1,
        text: "We want to ensure that you are fully empowered on the Rippl platform and are completely aware of the rights that you are entitled to in the course of using our platform. You have a number of rights in relation to the information we hold about you.",
        children: [
            "Access – The right to access the information we hold about you, and to obtain details of the processing. You also have the right to access a list of all the third parties that have your Personal Information through us.",
            "Rectification – The right to seek, correct, update and modify the information available with us, to ensure accuracy.",
            "Cancellation – The right to seek to cancel or erase, free of charge, your personal data when it is inadequate, excessive, or unnecessary. This shall be subject to lawful processing measures and any legal prescriptions.",
            "Objection – The right to withdraw your consent to our continued processing of the information, at any point of time, subject only to any legitimate reason for continued processing in certain circumstances.",
            "Portability – The right to seek from us your personal data to be provided to another service provider, in a machine-readable format that we use at the time the request was made.",
            "Restriction – The right to seek restriction of processing of your personal data, in certain circumstances.",
        ]
    },
    {
        id: 2,
        text: "You may exercise any of these rights by filling out the request form at our Reporting and Redressal page.This shall be subject to the legal requirements, and our internal procedure."
    }
];

const HowLongWeKeepData = [
    {
        id: 1,
        text: "In relation to other Personal Information, we store them for certain predetermined periods on the basis of",
        children: [
            "statutory and legal requirements",
            "industry guidelines",
            "de-identified or pseudonymised data sets to be used in an aggregated format for scientific, statistical or historical purposes."
        ]
    },
    {
        id: 2,
        text: "We retain the information which we have collected for a period no longer than is necessary, and as may be required in law. If we need to retain your Personal Information for a longer period, we will inform you prior to the extension of the storage period and seek your explicit consent to extend the retention period. We will delete your information whenever you request us to do so. However, we may archive and/or retain some information for legal purposes. Any other information which is processed by us for analytical purposes, will only be processed in an aggregated or non-identifiable basis."
    }
];

const OptingOut = [
    {
        id: 1,
        text: "You can always opt out of our Services or choose not to disclose information to us at any time. However, keep in mind that some information may be needed to register with us or to take advantage of some of our special features. By providing limited information, or by availing the opt-out provision, you may not be able to access full functionalities of our Services and Application, and some features may be disabled for your access."
    },
    {
        id: 2,
        text: "We reserve the right to continue to keep a copy of any of your Personal Information if required by law. We may use any aggregated/anonymised data derived from your account, in a matter which shall not infringe upon your privacy."
    }
];

const SecurityOfInfo = [
    "Your personal data is maintained by us in electronic form. We shall take all necessary precautions to protect your personal data and implement reasonable security practices and measures including certain managerial, technical, operational and physical security control measures that are commensurate with respect to the information being collected and the nature of our business. Specifically, we will ensure that the security infrastructure put in place by us to safeguard your Personal Information against loss, unauthorised access, destruction, use, processing, storage, modification or de-anonymisation, will at all times be adherent to the best industry standards.",
    "We restrict access to personal information to Company employees, contractors, and agents who need that information in order to process it. Anyone with this access is subject to strict contractual confidentiality obligations and may be disciplined or terminated if they fail to meet these obligations."
];

const GDPRCompliance = "The Application may be accessed and used by residents of the European Economic Area (EEA), who would be regulated by the Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46/EC (General Data Protection Regulation) (GDPR). EU citizens may reach out to us at: nixlab.in@gmail.com with a subject line “GDPR compliance”. We respond to all requests we receive from individuals wishing to exercise their data protection rights in accordance with applicable data protection laws. Any transfer of data generated from EU citizens shall be subject to the data transfer compliances outlined in GDPR.";

const OverseasTransfer = [
    "Your information may be transferred to and stored in locations outside laws of the territory in which the Company is registered and where the Application is registered on the app stores. We will do this only when the destination jurisdiction has an adequate and appropriate level of protection and where the transfer is lawful, and only when the same is required for us to meet our contractual and statutory obligations, and only where the laws of your country allow us to do so. For completeness, the information which may be transferred outside is such information which may be sent to foreign jurisdictions as per the applicable laws.",
    "When we transfer your personal data from your Home Country (country, state and city in which you are present) to the Alternate Country (another country, state and city), we will comply with our legal and regulatory obligations in relation to your personal data, including having a lawful basis for transferring personal data and putting appropriate safeguards in place to ensure an adequate level of protection for the personal data. We will also ensure that the recipient in Alternate Country is obliged to protect your personal data at a standard of protection comparable to the protection under applicable laws.",
    "Our lawful basis for such transfer will be either on the basis of content or one of the safeguards permissible by laws.",
    "For transfer of data outside the EEA, we will follow adequate safeguards mandated under the GDPR. We ensure an adequate level of protection for the rights of data subjects based on the adequacy of the receiving country’s data protection laws, contractual obligations placed on the recipient of the data (model contractual clauses)."
];

const Children = [
    "You must have attained the age of majority to be able to use and access our Services. If you are a minor in your jurisdiction, your registration and use of our Services must be with the supervision of an adult.",
    "As a parent or legal guardian, please do not allow your minors under your care to submit Personal Information to us. In the event that such personal data of a minor is disclosed to us, you hereby consent to the processing of the minor’s personal data and accept and agree to be bound by this Privacy Policy and take responsibility for his or her actions."
];

const PersonalDataOfOthers = "In some situations, you may provide personal data of other individuals (family, friends, likewise) to us. If you provide us with such personal data, you represent and warrant that you have obtained their consent for their Personal Information to be collected, used and disclosed as set out in this Privacy Policy.";

const ChangesToPolicy = "We Rippl make periodical changes to the Privacy Policy. Any significant changes we may make to our Privacy Policy in the future will be promptly notified to Users by posting the relevant terms in a prominent position on the webpage. The new terms may be displayed on the webpage, and you will be required to read and accept them to continue your use of the Services.";

const PrivacyPolicy = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ExpandedBox
            justifyContent="flex-start"
            alignItems="stretch"
        >
            <Head>
                <title>Privacy Policy</title>
            </Head>

            <PageTitle>
                Privacy <span>Policy</span>
            </PageTitle>

            <ResponsiveBox>
                <Intro />
                {/* Scope */}

                <Scopes />

                {/* Information We Collect */}

                <InfoWeCollect />

                {/* Why We Collect This Information */}

                <WhyWeCollectInfo />

                {/* When We Share Your Information */}

                <div className={styles.privacy__text_heading}>
                    4. When We Share Your Information
                </div>

                <div className={styles.privacy__content_list}>
                    {
                        WhenWeShare.map((scope, index) => (
                            <div key={index} className={styles.privacy__text}>

                                <p className={styles.privacy__text__title}>
                                    {scope.id}.
                                </p>

                                <p className={styles.privacy__text__content}>
                                    {scope.text}
                                </p>

                            </div>
                        ))
                    }
                </div>

                {/* Disclosure Of Information */}

                <div className={styles.privacy__text_heading}>
                    5. Disclosure Of Information
                </div>

                <div className={styles.privacy__content_list}>
                    {
                        DiscloserOfInformation.map((info, index) => (
                            <div key={index}>
                                <div className={styles.privacy__text}>
                                    <p className={styles.privacy__text__title}>
                                        {info.id}.
                                    </p>

                                    <p className={styles.privacy__text__content}>
                                        {info.text}
                                    </p>
                                </div>
                                {
                                    info.children && (
                                        <div className={styles.privacy__content_sublist}>
                                            {
                                                info.children.map((child, index) => (
                                                    <div key={index} className={styles.privacy__text}>
                                                        <p className={styles.privacy__text__title}>
                                                            {index + 1}.
                                                        </p>

                                                        <p className={styles.privacy__text__content}>
                                                            {child}
                                                        </p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>

                {/* User Rights On Rippl */}

                <div className={styles.privacy__text_heading}>
                    6. User Rights On Rippl
                </div>

                <div className={styles.privacy__content_list}>
                    {
                        UserRights.map((info, index) => (
                            <div key={index}>
                                <div className={styles.privacy__text}>
                                    <p className={styles.privacy__text__title}>
                                        {info.id}.
                                    </p>

                                    <p className={styles.privacy__text__content}>
                                        {info.text}
                                    </p>
                                </div>
                                {
                                    info.children && (
                                        <div className={styles.privacy__content_sublist}>
                                            {
                                                info.children.map((child, index) => (
                                                    <div key={index} className={styles.privacy__text}>
                                                        <p className={styles.privacy__text__title}>
                                                            {index + 1}.
                                                        </p>

                                                        <p className={styles.privacy__text__content}>
                                                            {child}
                                                        </p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>

                {/* How Long Will Your Personal Information Be Stored With Us */}

                <div className={styles.privacy__text_heading}>
                    7. How Long Will Your Personal Information Be Stored With Us?
                </div>

                <div className={styles.privacy__content_list}>
                    {
                        HowLongWeKeepData.map((info, index) => (
                            <div key={index}>
                                <div className={styles.privacy__text}>
                                    <p className={styles.privacy__text__title}>
                                        {info.id}.
                                    </p>

                                    <p className={styles.privacy__text__content}>
                                        {info.text}
                                    </p>
                                </div>
                                {
                                    info.children && (
                                        <div className={styles.privacy__content_sublist}>
                                            {
                                                info.children.map((child, index) => (
                                                    <div key={index} className={styles.privacy__text}>
                                                        <p className={styles.privacy__text__title}>
                                                            {index + 1}.
                                                        </p>

                                                        <p className={styles.privacy__text__content}>
                                                            {child}
                                                        </p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>

                {/* Opting Out */}

                <div className={styles.privacy__text_heading}>
                    8. Opting Out
                </div>

                <div className={styles.privacy__content_list}>
                    {
                        OptingOut.map((scope, index) => (
                            <div key={index} className={styles.privacy__text}>

                                <p className={styles.privacy__text__title}>
                                    {scope.id}.
                                </p>

                                <p className={styles.privacy__text__content}>
                                    {scope.text}
                                </p>

                            </div>
                        ))
                    }
                </div>

                {/* The Security Of Your Information */}

                <div className={styles.privacy__text_heading}>
                    9. The Security Of Your Information
                </div>

                <div className={styles.privacy__content_list}>
                    {
                        SecurityOfInfo.map((scope, index) => (
                            <div key={index} className={styles.privacy__text}>

                                <p className={styles.privacy__text__title}>
                                    {index + 1}.
                                </p>

                                <p className={styles.privacy__text__content}>
                                    {scope}
                                </p>

                            </div>
                        ))
                    }
                </div>

                {/* GDPR Compliance */}

                <div className={styles.privacy__text_heading}>
                    10. GDPR Compliance
                </div>

                <div className={styles.privacy__content_list}>
                    <p>
                        {GDPRCompliance}
                    </p>
                </div>

                {/* Overseas Transfer */}

                <div className={styles.privacy__text_heading}>
                    11. Overseas Transfer
                </div>

                <div className={styles.privacy__content_list}>
                    {
                        OverseasTransfer.map((scope, index) => (
                            <div key={index} className={styles.privacy__text}>

                                <p className={styles.privacy__text__title}>
                                    {index + 1}.
                                </p>

                                <p className={styles.privacy__text__content}>
                                    {scope}
                                </p>

                            </div>
                        ))
                    }
                </div>

                {/* Children */}

                <div className={styles.privacy__text_heading}>
                    12. Children
                </div>

                <div className={styles.privacy__content_list}>
                    {
                        Children.map((scope, index) => (
                            <div key={index} className={styles.privacy__text}>

                                <p className={styles.privacy__text__title}>
                                    {index + 1}.
                                </p>

                                <p className={styles.privacy__text__content}>
                                    {scope}
                                </p>

                            </div>
                        ))
                    }
                </div>

                {/* Personal Data Of Others */}

                <div className={styles.privacy__text_heading}>
                    13. Personal Data Of Others
                </div>

                <div className={styles.privacy__content_list}>
                    <p>
                        {PersonalDataOfOthers}
                    </p>
                </div>

                {/* Changes to this Privacy Policy */}

                <div className={styles.privacy__text_heading}>
                    14. Changes to this Privacy Policy
                </div>

                <div className={styles.privacy__content_list}>
                    <p>
                        {ChangesToPolicy}
                    </p>
                </div>

                <div className={styles.privacy__content_list}>
                    <p>
                        For queries regarding processing of personal data, users can write
                        to us at <a href="mailto:nixlab.in@gmail.com">nixlab.in@gmail.com</a>.
                    </p>
                </div>


                {/* END */}
            </ResponsiveBox>
        </ExpandedBox>
    )
}

export default AppWrap(PrivacyPolicy, 'Privacy-Policy');
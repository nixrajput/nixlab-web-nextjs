import Head from 'next/head';
import AppWrap from "../../components/AppWrap";
import ExpandedBox from "../../components/ExpandedBox";
import ResponsiveBox from "../../components/ResponsiveBox";
import PageTitle from "../../components/PageTitle";
import Intro from '../../components/privacy-policy/Intro';
import Scopes from '../../components/privacy-policy/Scopes';
import InfoWeCollect from '../../components/privacy-policy/InfoWeCollect';
import WhyWeCollectInfo from '../../components/privacy-policy/WhyWeCollectInfo';
import WhenWeShareInfo from '../../components/privacy-policy/WhenWeShareInfo';
import ChangeOfPolicy from '../../components/privacy-policy/ChangeOfPolicy';
import PersonalDataOfOthers from '../../components/privacy-policy/PersonalDataOfOthers.js';
import DisclosureOfInfo from '../../components/privacy-policy/DisclosureOfInfo';
import UserRights from '../../components/privacy-policy/UserRights';
import HowLongWeKeepData from '../../components/privacy-policy/HowLongWeKeepData';
import OptingOut from '../../components/privacy-policy/OptingOut';
import SecurityOfYourInfo from '../../components/privacy-policy/SecurityOfYourInfo';
import GDPRCompliance from '../../components/privacy-policy/GDPRCompliance';
import OverseasTransfer from '../../components/privacy-policy/OverseasTransfer';
import ForChildrens from '../../components/privacy-policy/ForChildrens';

const PrivacyPolicy = () => {

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

            {/* START */}

            <ResponsiveBox>
                <Intro />

                {/* Scope */}

                <Scopes />

                {/* Information We Collect */}

                <InfoWeCollect />

                {/* Why We Collect This Information */}

                <WhyWeCollectInfo />

                {/* When We Share Your Information */}

                <WhenWeShareInfo />

                {/* Disclosure Of Information */}

                <DisclosureOfInfo />

                {/* User Rights On Rippl */}

                <UserRights />

                {/* How Long Will Your Personal Information Be Stored With Us */}

                <HowLongWeKeepData />

                {/* Opting Out */}

                <OptingOut />

                {/* The Security Of Your Information */}

                <SecurityOfYourInfo />

                {/* GDPR Compliance */}

                <GDPRCompliance />

                {/* Overseas Transfer */}

                <OverseasTransfer />

                {/* Children */}

                <ForChildrens />

                {/* Personal Data Of Others */}

                <PersonalDataOfOthers />

                {/* Changes to this Privacy Policy */}

                <ChangeOfPolicy />
            </ResponsiveBox>

            {/* END */}

        </ExpandedBox>
    )
}

export default AppWrap(PrivacyPolicy);
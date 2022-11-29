import Head from 'next/head';
import AppWrap from "../../components/AppWrap";
import ExpandedBox from "../../components/ExpandedBox";
import ResponsiveBox from "../../components/ResponsiveBox";
import PageTitle from "../../components/PageTitle";
import Intro from '../../components/community-guidelines/Intro';
import HateSpeechAndDiscrimination from '../../components/community-guidelines/HateSpeechAndDiscrimination';
import ReligiouslyOffensiveContent from '../../components/community-guidelines/ReligiouslyOffensiveContent';
import TerrorismAndExtremism from '../../components/community-guidelines/TerrorismAndExtremism';
import SelfHarmAndSuicide from '../../components/community-guidelines/SelfHarmAndSuicide';
import ViolentContent from '../../components/community-guidelines/ViolentContent';
import GraphicAndSexualContent from '../../components/community-guidelines/GraphicAndSexualContent';
import Cyberbullying from '../../components/community-guidelines/Cyberbullying';
import PrivacyInvasion from '../../components/community-guidelines/PrivacyInvasion';
import IllegalActivities from '../../components/community-guidelines/IllegalActivities';
import IdentityTheft from '../../components/community-guidelines/IdentityTheft';
import Misinformation from '../../components/community-guidelines/Misinformation';
import Spamming from '../../components/community-guidelines/Spamming';
import IntelProppertyInfringement from '../../components/community-guidelines/IntelPropertyInfringement';
import MaliciousPrograms from '../../components/community-guidelines/MaliciousPrograms';
import ChildSafety from '../../components/community-guidelines/ChildSafety';

const CommunityGuideLines = () => {


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

            {/* START */}

            <ResponsiveBox>

                {/* INTRO */}

                <Intro />

                {/* HATE SPEECH AND DISCRIMINATION */}

                <HateSpeechAndDiscrimination />

                {/* RELIGIOUSLY OFFENSIVE CONTENT */}

                <ReligiouslyOffensiveContent />

                {/* TERRORISM AND EXTREMISM */}

                <TerrorismAndExtremism />

                {/* SELF-HARM AND SUICIDE */}

                <SelfHarmAndSuicide />

                {/* VIOLENT CONTENT */}

                <ViolentContent />

                {/* GRAPHIC AND SEXUAL CONTENT */}

                <GraphicAndSexualContent />

                {/* CYBERBULLYING */}

                <Cyberbullying />

                {/* INVASION OF PRIVACY */}

                <PrivacyInvasion />

                {/* ILLEGAL ACTIVITIES */}

                <IllegalActivities />

                {/* IDENTITY THEFT AND IMPERSONATION */}

                <IdentityTheft />

                {/* MISINFORMATION */}

                <Misinformation />

                {/* SPAMMING */}

                <Spamming />

                {/* INTELLECTUAL PROPERTY INFRINGEMENT */}

                <IntelProppertyInfringement />

                {/* MALICIOUS PROGRAMS */}

                <MaliciousPrograms />

                {/* CHILD SAFETY */}

                <ChildSafety />

            </ResponsiveBox>

            {/* END */}
        </ExpandedBox>
    )
}

export default AppWrap(CommunityGuideLines);
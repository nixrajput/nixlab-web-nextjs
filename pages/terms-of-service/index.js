import Head from 'next/head';
import AppWrap from '../../components/AppWrap';
import ExpandedBox from "../../components/ExpandedBox";
import ResponsiveBox from "../../components/ResponsiveBox";
import PageTitle from "../../components/PageTitle";
import Intro from '../../components/terms-of-service/Intro';
import AccessToUseOfServices from '../../components/terms-of-service/AccessToUseOfServices';
import ServicesWeProvide from '../../components/terms-of-service/ServicesWeProvide';
import RegistrationAccountIntegrity from '../../components/terms-of-service/RegistrationAccountIntegrity';
import ThirdPartyServices from '../../components/terms-of-service/ThirdPartyServices';
import RulesAndConduct from '../../components/terms-of-service/RulesAndConduct';
import Support from '../../components/terms-of-service/Support';
import Termination from '../../components/terms-of-service/Termination';
import Disclaimer from '../../components/terms-of-service/Disclaimer';
import Idemnity from '../../components/terms-of-service/Idemnity';
import Reference from '../../components/terms-of-service/Reference';
import ChangesInTerms from '../../components/terms-of-service/ChangesInTerms';

const TermsOfService = () => {
    return (
        <ExpandedBox
            justifyContent="flex-start"
            alignItems="stretch"
        >
            <Head>
                <title>Terms of Service</title>
            </Head>

            <PageTitle>
                Terms of <span>Service</span>
            </PageTitle>

            {/* START */}

            <ResponsiveBox>
                {/* INTRO */}

                <Intro />

                {/* ACCESS TO AND CONTINUED USE OF SERVICES */}

                <AccessToUseOfServices />

                {/* SERVICES */}

                <ServicesWeProvide />

                {/* REGISTRATION AND ACCOUNT INTEGRITY */}

                <RegistrationAccountIntegrity />

                {/* THIRD PARTY SERVICES */}

                <ThirdPartyServices />

                {/* RULES AND CONDUCT */}

                <RulesAndConduct />

                {/* SUPPORT */}

                <Support />

                {/* TERMINATION */}

                <Termination />

                {/* DISCLAIMER */}

                <Disclaimer />

                {/* INDEMNITY */}

                <Idemnity />

                {/* REFERENCE */}

                <Reference />

                {/* CHANGES */}

                <ChangesInTerms />
            </ResponsiveBox>

            {/* END */}
        </ExpandedBox>
    )
}

export default AppWrap(TermsOfService);
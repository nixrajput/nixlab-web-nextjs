import Head from 'next/head';
import styles from '../../styles/privacy.module.scss';
import Link from 'next/link';
import AppWrap from '../../components/AppWrap';
import ExpandedBox from "../../components/ExpandedBox";
import ResponsiveBox from "../../components/ResponsiveBox";
import PageTitle from "../../components/PageTitle";

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
                Community <span>Guidelines</span>
            </PageTitle>

            <ResponsiveBox>
                <div className={styles.privacy__content}>
                    <div className={styles.privacy__text_heading}>
                        These Terms of Service were last updated on 25 November 2022.
                    </div>
                    <div className={styles.privacy__content_list}>
                        <p className={styles.privacy__content_list_text}>
                            We at Bombinate Technologies Private Limited, its affiliates, subsidiaries, successors in interest, (Company, we, our, us ), own, manage, and operate the application Koo (as defined below and referred to as Application). The Company provides you with the Application, the associated customized services which include but are not limited to providing you with a micro-blogging platform, provision of content, and access to content which is created and uploaded by users on the Application (as defined below and referred to as Content) as sought to be accessed by you (Services). These Terms of Services (Terms) govern your access to and use of our Services, which includes the website, the associated mobile application, SMS, APIs, e-mail notifications, and any Content available on the Services in whichever form and format capable of communication.
                        </p>

                        <p className={styles.privacy__content_list_text}>
                            By accessing, downloading, using our Services, you agree to be bound by these Terms, and you further explicitly consent to our Privacy Policy and Community Guidelines. We urge you to access, review and familiarize yourself with these Terms periodically, for your continued use of the Services, which will constitute in your consent and agreement to these Terms.
                        </p>

                        <p className={styles.privacy__content_list_text}>
                            In the event the Terms are not agreeable to you, we request you to desist from accessing, downloading, using the Services in any manner, whatsoever.
                        </p>

                        <p className={styles.privacy__content_list_text}>
                            For ease of reference, we are defining certain terms as below which will be used throughout the Terms and associated policies:
                        </p>

                        <p className={styles.privacy__content_list_text}>
                            Application shall mean and include the software and mobile application of Koo accessed through or downloaded from the app store viz., Android or iOS, and accessible from any compatible device.
                        </p>

                        <p className={styles.privacy__content_list_text}>
                            Content means and includes, without limitation, any information, data, text, pictures, audio, video, GIFs, polls, user profiles, software, tags, graphics, and interactive features generated, provided, or otherwise made accessible either by you or other users or by us or our partners or sponsors on or through the Service/s.
                        </p>

                        <p className={styles.privacy__content_list_text}>
                            Koo shall mean any post by a registered user on the Application.
                        </p>

                        <p className={styles.privacy__content_list_text}>
                            You or User shall mean any registered user of the Application. If you are accepting these Terms and using the Services on behalf of any juristic entity or any other person, you represent and warrant that you are authorized to do so and have the authority to bind such entity or person to these Terms, in which case the words “you” and “your” as used in these Terms shall refer to such entity or person irrevocably.
                        </p>
                    </div>

                    {/* ACCESS TO AND CONTINUED USE OF SERVICES */}

                    <div className={styles.privacy__text_heading}>
                        1. ACCESS TO AND CONTINUED USE OF SERVICES
                    </div>

                    <div className={styles.privacy__content_list}>
                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                1.
                            </p>

                            <p className={styles.privacy__text__content}>
                                You should have attained the age of majority in your jurisdiction to be able to use and access our Services. The Application has the right to terminate your account, wherein the User is found to be defaulting on this condition, or where we find that you are barred in law from access to our Services.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                2.
                            </p>

                            <p className={styles.privacy__text__content}>
                                You are responsible for your use of our Services, and undertake to comply with the applicable laws, and act in strict adherence to our
                                Terms, <Link href="/privacy-policy">Privacy Policy</Link>, and <Link href="/community-guidelines">Community Guidelines</Link>, as well.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                3.
                            </p>

                            <p className={styles.privacy__text__content}>
                                You may access our Services free of charge, or in any such manner which is determined by the Company and is conveyed to you from time to time.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                4.
                            </p>

                            <p className={styles.privacy__text__content}>
                                The Services provided to you are for your personal and non-commercial purposes only and should not be shared with individuals in violation of these Terms and allied policies. We specifically prohibit sale or purchase of a Koo account or handle.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                5.
                            </p>

                            <p className={styles.privacy__text__content}>
                                You are responsible for safeguarding your account and you agree not to disclose your password to any third party. You agree that you will be solely responsible for any activities or actions taken under your account or handle name or password, irrespective of whether you have authorized such activities or actions. You will immediately notify the Company of any unauthorized use of your password or your account, upon becoming aware of any such discrepancy.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                6.
                            </p>

                            <p className={styles.privacy__text__content}>
                                The Company further reserves the right to restrict the circulation of any content if the said content violates
                                the <Link href="/community-guidelines">Community Guidelines</Link> of the App. The Company may also suspend or terminate your account for such a violation. Please refer to our other policies on how we moderate the Content.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                7.
                            </p>

                            <p className={styles.privacy__text__content}>
                                The Company is committed to safeguarding the efficiency of the Application. For that reason, we reserve the right to make changes to the Application for maintenance at any time. If such situations cause an interruption of your Services for a reasonable duration, we shall not bear any liability to you and/or to any third parties. We will make attempts on a best-efforts basis to let you beware of any scheduled maintenance to such extent as is possible.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                8.
                            </p>

                            <p className={styles.privacy__text__content}>
                                You agree not to: circumvent, remove, degrade, deactivate, or thwart any of the Contents of our Service; use any robot, spider, scraper, or other means to access our Service. You also agree not to decompile, reverse engineer, and disassemble any software or other products or processes accessible through our Service.
                                <p>
                                    Additionally, you agree not to upload, post, e-mail or otherwise send or transmit any material designed to interrupt, destroy, or limit the functionality of our Service. We may terminate or restrict your use of our Service if you violate these Terms or are engaged in any illegal or fraudulent or unethical or unwarranted or otherwise malicious use of our Service.
                                </p>
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                9.
                            </p>

                            <p className={styles.privacy__text__content}>
                                You agree not to use the accounts of other Users, disparage other accounts, or indulge in any activity which violates
                                the <Link href="/community-guidelines">Community Guidelines</Link> of the Application.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                10.
                            </p>

                            <p className={styles.privacy__text__content}>
                                We do not claim ownership of your content that you post on or through the Service. By submitting, posting, displaying, or communicating Content on or through our Services, you hereby grant to us a non-exclusive, royalty-free, transferable, sub-licensable, worldwide license to host, use, distribute, modify, run, copy, reproduce, process, such Content across all formats, media now known, or which may come into existence later. You represent and warrant that you have, or have obtained, all rights, licenses, necessary authorizations required to grant the rights granted herein for any Content that you submit, or post, or display, or communicate through our Services and such Content is not subject to copyright or other proprietary rights of third parties unless you are legally entitled to post such Content through necessary permission or otherwise.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                11.
                            </p>

                            <p className={styles.privacy__text__content}>
                                We do not undertake any obligation to monitor user generated content, except to the extent required by law. We are an intermediary that primarily enables online interaction between two or more users and allows them to create, upload, share, disseminate, modify or access information using Koo’s services. While Koo supports valid and legitimate claims of intellectual property ownership, it does not adjudicate any claims. In the first instance, parties must resolve any disputes relating to intellectual property amongst themselves or through legal process, before reporting to Koo. If you believe that someone is violating your or anyone else’s intellectual property, you may report it by emailing
                                to <a href="mailto:nixlab.in@gmail.com">nixlab.in@gmail.com</a>. Please ensure that you submit complete details of the violation and ownership of the intellectual property in order for us to process the report. Such reports will typically be processed within 48 hours. Orders or directions of courts or legal authorities will be honoured on priority. The contents of a report (including any attachment) and the reporter’s email address will be provided to the person who posted the contested content along with a request to respond to the claim within 36 hours. If no response is received within the specified time, or, if in the sole discretion of Koo, either the report or the response are unsatisfactory, Koo will take such action as it deems fit. Please note that Koo is acting on a best efforts basis and accepts no responsibility for any actions taken by it. Any assertion or adjudication of legal rights must be carried out through legal process. Any abuse of this process may lead to termination of your user account and/or other legal consequences. Please do not hesitate to seek your own legal advice before filing or contesting any report for intellectual property violation.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                12.
                            </p>

                            <p className={styles.privacy__text__content}>
                                We reserve the right to update, modify, alter, amend, these Terms at any time, at our sole discretion.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                13.
                            </p>

                            <p className={styles.privacy__text__content}>
                                We do not endorse, support, represent, authorize the circulation of all Content published on our Application, and we do not further attest to the accuracy, originality, reliability, legitimacy, completeness, of such Content, as available on our Services.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                14.
                            </p>

                            <p className={styles.privacy__text__content}>
                                All the Content that is available on the Application is the sole responsibility of the originator of the Content. Your use or reliance on any Content while availing the Services is solely at your own risk. As a User, you may come across Content which you may construe to be offensive, harmful, misleading, inaccurate, or inappropriate. We impress upon you that we may not always monitor or control the Content accessible on the Services, and as an intermediary we cannot assume responsibility for such Content. Please use the Report Koo or Report User button within the Koo App to record your reactions or contact the Grievance Officer as stated below. You may also use the Reporting and Redressal Forms available at
                                this <Link href="/reporting-and-redressal-forms">link</Link>. While we will endeavor to do so, in complying with legal directions or in other compelling circumstances, it may not always be possible to immediately notify you of an action taken on our part. You may appeal against any action taken to the Grievance Officer whose details are provided below.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                15.
                            </p>

                            <p className={styles.privacy__text__content}>
                                We give you a personal, worldwide, royalty-free, non-assignable and non-exclusive license to use the software provided to you as part of the Services.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                16.
                            </p>

                            <p className={styles.privacy__text__content}>
                                The Services made available to you are protected by copyright, trademark, and other laws. Nothing in these Terms gives you the right to use our trademarks, logos, domain names, other distinctive brand features, and other proprietary rights. All right, title, and interest in and to the Services or any username or handle names (excluding Content provided by users) are and will remain the exclusive property of the Company and its licensors.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                17.
                            </p>

                            <p className={styles.privacy__text__content}>
                                Any feedback, comments, or suggestions you may provide regarding the Services is entirely voluntary, and we will be free to use such feedback, comments, or suggestions as we see fit and without any obligation to you.
                            </p>
                        </div>
                    </div>

                    {/* SERVICES */}

                    <div className={styles.privacy__text_heading}>
                        2. SERVICES
                    </div>

                    <div className={styles.privacy__content_list}>
                        <div className={styles.privacy__text}>
                            <p>
                                The Application provides you with the ability to:
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                1.
                            </p>

                            <p className={styles.privacy__text__content}>
                                Create and maintain your own profile on the Application after registration.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                2.
                            </p>

                            <p className={styles.privacy__text__content}>
                                Share your Content; re-share Content shared by others; connect, follow and communicate with other Users.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                3.
                            </p>

                            <p className={styles.privacy__text__content}>
                                Remove, edit, modify your own Posts, and comments made on your’s or others’ Posts.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                4.
                            </p>

                            <p className={styles.privacy__text__content}>
                                Control your own privacy, as per the Privacy Policy of the Company, right from your own account. This gives you the ability to determine which other Users can view your profile and/or any other Content uploaded by you on the Application. From time to time we may introduce additional features which will assist you in safeguarding your privacy.
                            </p>
                        </div>
                    </div>

                    {/* REGISTRATION AND ACCOUNT INTEGRITY */}

                    <div className={styles.privacy__text_heading}>
                        3. REGISTRATION AND ACCOUNT INTEGRITY
                    </div>

                    <div className={styles.privacy__content_list}>
                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                1.
                            </p>

                            <p className={styles.privacy__text__content}>
                                We provide you with a free account, however, you are required to be registered with us, to avail full functionalities of our Services.  You are prohibited from buying or selling or exchanging accounts for cash or kind or any other value or for no value.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                2.
                            </p>

                            <p className={styles.privacy__text__content}>
                                As part of the registration process for creating your account, you will need to provide us with your phone number and/or email address, (which will be verified via a one-time password verification mechanism). You can then create an account username/handle and password for yourself. You must use original and distinct credentials to create an account on our App, which do not infringe any applicable laws and third-party rights. Username/handles must not contain derogatory, demeaning or misleading language or messages or identity or images.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                3.
                            </p>

                            <p className={styles.privacy__text__content}>
                                You undertake that the information you provide to us is accurate, secure, and is not misleading. For all intents and purposes User accounts and handles are the property of the Company and have been licensed for use to you in accordance with these Terms. Usernames or handles are the property of the Company and cannot be sold or commercially dealt with in any manner.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                4.
                            </p>

                            <p className={styles.privacy__text__content}>
                                Please note that if a username has been used by a verified user on another platform, in order to avoid risk of impersonation, the username will not be allotted to anyone else and, if already allotted, may be cancelled at the discretion of Koo without any notice. Please review our policies related to Eminence in this regard.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                5.
                            </p>

                            <p className={styles.privacy__text__content}>
                                We reserve the right to suspend or terminate or remove any account or take any other actions we deem fit with or without notice, if you are in breach of these Terms. In case you have any concern regarding an action taken on your account you can file an appeal by filling this form.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                6.
                            </p>

                            <p className={styles.privacy__text__content}>
                                In case of any discrepancy in access to your account, please reach out to us as per the account terms.
                            </p>
                        </div>
                    </div>

                    {/* THIRD PARTY SERVICES */}

                    <div className={styles.privacy__text_heading}>
                        4. THIRD PARTY SERVICES
                    </div>

                    <div className={styles.privacy__content_list}>
                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                1.
                            </p>

                            <p className={styles.privacy__text__content}>
                                You note that during your usage of our Services, Company can place advertisement or other types of commercial information on the Application. You also agree to receive advertisement or other relevant commercial information from us via e-mail or other authorized means. The Company may provide its Users with links to, or contact information for, third-party sites or services. Please note that we do not control such third-party websites, and their interactions with you. We have not reviewed, and do not review, all the material, including goods or services, made available through third-party sites. We therefore urge you to kindly make an informed choice in interacting with such third-party sites and ensure that you are familiar with the policies of such sites before you proceed with engaging, interacting, with such third-party sites.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                2.
                            </p>

                            <p className={styles.privacy__text__content}>
                                The Company is not responsible for, and does not endorse, any third-party content, sites, or services mentioned on the Application. Third party materials accessed through or used by means of the third-party sites may also be protected by copyright and other intellectual property laws.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                3.
                            </p>

                            <p className={styles.privacy__text__content}>
                                In compliance with legal requirements, advertisements or promotional content will be dealt in accordance with our Advertiser Guidelines. By using the Rippl App, you agree to the measures implemented by us in this regard.
                            </p>
                        </div>
                    </div>

                    {/* RULES AND CONDUCT */}

                    <div className={styles.privacy__text_heading}>
                        5. RULES AND CONDUCT
                    </div>

                    <div className={styles.privacy__content_list}>
                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                1.
                            </p>

                            <p className={styles.privacy__text__content}>
                                Without foregoing the responsibilities ascribed to you under these Terms, and without foregoing the generality of the <Link href='/community-guidelines'>Community Guidelines</Link>, and allied policies, you are prohibited from publishing any Content which:
                            </p>
                        </div>

                        <div className={styles.privacy__content_sublist}>
                            <div className={styles.privacy__text}>
                                <p className={styles.privacy__text__title}>
                                    1.
                                </p>

                                <p className={styles.privacy__text__content}>
                                    may be harmful to minors or children, including any sexually explicit, abusive content. We have a zero-tolerance policy against child sexual abuse content; and/ or,
                                </p>
                            </div>

                            <div className={styles.privacy__text}>
                                <p className={styles.privacy__text__title}>
                                    2.
                                </p>

                                <p className={styles.privacy__text__content}>
                                    threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states or public order or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting any other nation; and/ or,
                                </p>
                            </div>

                            <div className={styles.privacy__text}>
                                <p className={styles.privacy__text__title}>
                                    3.
                                </p>

                                <p className={styles.privacy__text__content}>
                                    is invasive of another’s privacy, hateful, or racially, ethnically objectionable, disparaging, relating, or encouraging money laundering or gambling, or otherwise unlawful in any manner whatever; and/ or,
                                </p>
                            </div>

                            <div className={styles.privacy__text}>
                                <p className={styles.privacy__text__title}>
                                    4.
                                </p>

                                <p className={styles.privacy__text__content}>
                                    infringes on any third party’s rights, including copyright, trademark, privacy, and publicity rights, and any other protected subject matter; and/ or,
                                </p>
                            </div>

                            <div className={styles.privacy__text}>
                                <p className={styles.privacy__text__title}>
                                    5.
                                </p>

                                <p className={styles.privacy__text__content}>
                                    may be deemed as capitalizing on or lacking reasonable sensitivity towards a natural disaster, atrocity, conflict, death, or other tragic event; and/ or,
                                </p>
                            </div>

                            <div className={styles.privacy__text}>
                                <p className={styles.privacy__text__title}>
                                    6.
                                </p>

                                <p className={styles.privacy__text__content}>
                                    threaten, harass, or bully other Users or third parties, including depictions of violence, gratuitous or otherwise, to any person place or property, or inciting violence, including suicide; and/ or,
                                </p>
                            </div>

                            <div className={styles.privacy__text}>
                                <p className={styles.privacy__text__title}>
                                    7.
                                </p>

                                <p className={styles.privacy__text__content}>
                                    depicts content, which is sexually explicit (pornographic or erotic content, including icons, titles, or descriptions), violent in nature, abusive, and grossly harmful,
                                </p>
                            </div>

                            <div className={styles.privacy__text}>
                                <p className={styles.privacy__text__title}>
                                    8.
                                </p>

                                <p className={styles.privacy__text__content}>
                                    is in violation of applicable law.
                                </p>
                            </div>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                2.
                            </p>

                            <p className={styles.privacy__text__content}>
                                The Company shall, upon obtaining knowledge by itself or having been brought to actual knowledge by an affected person in writing or through email, about any such information as mentioned above, be entitled to disable such information that is in contravention of this clause. We shall also be entitled to preserve such information and associated records for at least 180 (one hundred eighty) days for production to governmental authorities for investigation purposes.
                            </p>
                        </div>
                    </div>

                    {/* SUPPORT */}

                    <div className={styles.privacy__text_heading}>
                        6. SUPPORT
                    </div>

                    <div className={styles.privacy__content_list}>
                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                1.
                            </p>

                            <p className={styles.privacy__text__content}>
                                The Company offers email based, and online support tools. You may access support resources at the Reporting and Redressal Forms page or or contact our support by emailing at redressal@kooapp.com Under certain exceptional circumstances, we may also request you to reach out to other authorized, appointed contact persons for resolution of your queries or support requests. The Company does not make any promises regarding how quickly we will respond to your request for support, or that we will be able to fix any problems you may be having. Any suggestions by the Company regarding use of the Services shall not be construed as a warranty.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                2.
                            </p>

                            <p className={styles.privacy__text__content}>
                                We are an intermediary enabling online interaction between two or more users and allowing them to create, upload, share, disseminate, modify or access information using our services. Koo does not undertake any obligation to monitor user generated content, except where specifically mandated under applicable law. Resolution of grievances or disputes or claims relating to violation of legal or personal or public or community rights (collectively known as grievances) is solely within the domain of legal or judicial authorities. We do not adjudicate any personal grievances.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                3.
                            </p>

                            <p className={styles.privacy__text__content}>
                                If a Koo or its contents are contested or disputed, reporters have the option to use the “Report Koo” or “Report User” option within the Koo App. Reporters may also submit to Koo, orders from judicial or other authorities to take down any contested or disputed content at this link. Such orders will be acted upon on a priority basis. A Grievance Redressal Process in accordance with applicable law has been created and is available on the Compliance page on our website.
                            </p>
                        </div>
                    </div>

                    {/* TERMINATION */}

                    <div className={styles.privacy__text_heading}>
                        7. TERMINATION
                    </div>

                    <div className={styles.privacy__content_list}>
                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                1.
                            </p>

                            <p className={styles.privacy__text__content}>
                                The Company reserves the right to suspend or terminate your access to the Application and the Services with or without notice and to exercise any other remedy available under law, in cases where:
                            </p>
                        </div>

                        <div className={styles.privacy__content_sublist}>
                            <div className={styles.privacy__text}>
                                <p className={styles.privacy__text__title}>
                                    1.
                                </p>

                                <p className={styles.privacy__text__content}>
                                    You are in breach of any terms and conditions of these Terms.
                                </p>
                            </div>

                            <div className={styles.privacy__text}>
                                <p className={styles.privacy__text__title}>
                                    2.
                                </p>

                                <p className={styles.privacy__text__content}>
                                    The Company is unable to verify or authenticate any information provided to Company by you.
                                </p>
                            </div>

                            <div className={styles.privacy__text}>
                                <p className={styles.privacy__text__title}>
                                    3.
                                </p>

                                <p className={styles.privacy__text__content}>
                                    The Company has reasonable grounds for suspecting any illegal, fraudulent, spammy or abusive activity on your part.
                                </p>
                            </div>

                            <div className={styles.privacy__text}>
                                <p className={styles.privacy__text__title}>
                                    4.
                                </p>

                                <p className={styles.privacy__text__content}>
                                    The Company believes in its sole discretion that your actions may cause legal liability for you, other Users or for the Company, or are contrary to the interests of the Application or the Company; or
                                </p>
                            </div>

                            <div className={styles.privacy__text}>
                                <p className={styles.privacy__text__title}>
                                    5.
                                </p>

                                <p className={styles.privacy__text__content}>
                                    directed by law enforcement.
                                </p>
                            </div>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                2.
                            </p>

                            <p className={styles.privacy__text__content}>
                                Once temporarily or permanently suspended, or terminated, the User may not continue to use the Application under the same account, a different account or re-register under a new account, unless approved by the Company. On termination of an account due to the reasons mentioned herein, such User shall no longer have access to Content by such User on the Application , to the extent permissible in law.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                3.
                            </p>

                            <p className={styles.privacy__text__content}>
                                The User has the provision to appeal the suspension or termination of the account by contacting compliance.officer@kooapp.com or by submitting this appeal form.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                4.
                            </p>

                            <p className={styles.privacy__text__content}>
                                All provisions of these Terms, which by their nature should survive termination, shall survive termination, including, without limitation, disclaimers, indemnity, and limitations of liability.
                            </p>
                        </div>
                    </div>

                    {/* DISCLAIMER */}

                    <div className={styles.privacy__text_heading}>
                        8. DISCLAIMER
                    </div>

                    <div className={styles.privacy__content_list}>
                        <p style={{
                            fontWeight: 700
                        }}>
                            THE SERVICE (INCLUDING, WITHOUT LIMITATION, ANY CONTENT) IS PROVIDED “AS IS” AND “AS AVAILABLE” AND IS WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, AND ANY WARRANTIES IMPLIED BY ANY COURSE OF PERFORMANCE OR USAGE OF TRADE, ALL OF WHICH ARE EXPRESSLY DISCLAIMED. YOUR USE OF THE SERVICE IS SOLELY AT YOUR OWN RISK. THE COMPANY AND ITS DIRECTORS, EMPLOYEES, AGENTS, AND PARTNERS DO NOT WARRANT THAT: THE SERVICE WILL BE SECURE OR AVAILABLE AT ANY PARTICULAR TIME OR LOCATION; OR, ANY DEFECTS OR ERRORS WILL BE CORRECTED; OR, ANY CONTENT OR SOFTWARE AVAILABLE AT OR THROUGH THE SERVICE IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS; OR, THE RESULTS OF USING THE SERVICE WILL MEET YOUR REQUIREMENTS. DO NOT USE ANY SOFTWARE, DEVICE, SCRIPTS, BOTS OR OTHER MEANS TO ACCESS, SCRAPE, CRAWL OR SPIDER THE APPLICATION FOR ANY TYPE OF PUBLIC AND PRIVATE DATA OR INFORMATION. UNLESS YOU RECEIVE EXPLICIT PERMISSION BY KOO IN WRITING, YOU MUST NOT: USE BOTS OR OTHER AUTOMATED METHODS TO ACCESS THE APPLICATION. SCRAP OR COPY PROFILES OR ANY OTHER INFORMATION OF THE APPLICATION THROUGH CRAWLERS, PLUG-INS, ADD-ONS OR ANY OTHER TECHNOLOGY. MANIPULATE OR BOOST CONTENT IN ANY MANNER USING AUTOMATED OR OTHER UNWARRANTED MEANS.
                        </p>
                    </div>

                    <div className={styles.privacy__content_list}>
                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                1.
                            </p>

                            <p className={styles.privacy__text__content}>
                                THE SERVICE WILL BE SECURE OR AVAILABLE AT ANY PARTICULAR TIME OR LOCATION; OR,
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                2.
                            </p>

                            <p className={styles.privacy__text__content}>
                                ANY DEFECTS OR ERRORS WILL BE CORRECTED; OR,
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                3.
                            </p>

                            <p className={styles.privacy__text__content}>
                                ANY CONTENT OR SOFTWARE AVAILABLE AT OR THROUGH THE SERVICE IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS; OR,
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                4.
                            </p>

                            <p className={styles.privacy__text__content}>
                                THE RESULTS OF USING THE SERVICE WILL MEET YOUR REQUIREMENTS.
                            </p>
                        </div>
                    </div>

                    <div className={styles.privacy__content_list}>
                        <p style={{
                            fontWeight: 700
                        }}>
                            DO NOT USE ANY SOFTWARE, DEVICE, SCRIPTS, BOTS OR OTHER MEANS TO ACCESS, SCRAPE, CRAWL OR SPIDER THE APPLICATION FOR ANY TYPE OF PUBLIC AND PRIVATE DATA OR INFORMATION. UNLESS YOU RECEIVE EXPLICIT PERMISSION BY KOO IN WRITING, YOU MUST NOT:
                        </p>
                    </div>

                    <div className={styles.privacy__content_list}>
                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                1.
                            </p>

                            <p className={styles.privacy__text__content}>
                                USE BOTS OR OTHER AUTOMATED METHODS TO ACCESS THE APPLICATION.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                2.
                            </p>

                            <p className={styles.privacy__text__content}>
                                SCRAP OR COPY PROFILES OR ANY OTHER INFORMATION OF THE APPLICATION THROUGH CRAWLERS, PLUG-INS, ADD-ONS OR ANY OTHER TECHNOLOGY.
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                3.
                            </p>

                            <p className={styles.privacy__text__content}>
                                MANIPULATE OR BOOST CONTENT IN ANY MANNER USING AUTOMATED OR OTHER UNWARRANTED MEANS.
                            </p>
                        </div>
                    </div>

                    {/* INDEMNITY */}

                    <div className={styles.privacy__text_heading}>
                        9. INDEMNITY
                    </div>

                    <div className={styles.privacy__content_list} >
                        <p style={{
                            fontWeight: 700
                        }}>
                            You shall defend, indemnify, and hold harmless the Company, its affiliates, subsidiaries, joint venture partners and each of its, and its affiliates, subsidiaries, join venture partners’ employees, contractors, directors, suppliers and representatives from all liabilities, losses, claims, and expenses, including reasonable attorneys’ fees, that arise from or relate to:
                        </p>
                    </div>

                    <div className={styles.privacy__content_list}>
                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                1.
                            </p>

                            <p className={styles.privacy__text__content}>
                                Your use or misuse of, or access to, the Service; or,
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                2.
                            </p>

                            <p className={styles.privacy__text__content}>
                                Your violation of the Terms of Service or any applicable law, contract, policy, regulation or other obligation. We reserve the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by You, in which event You will assist and cooperate with us in connection therewith.
                            </p>
                        </div>
                    </div>

                    {/* REFERENCE */}

                    <div className={styles.privacy__text_heading}>
                        10. REFERENCE
                    </div>

                    <div className={styles.privacy__content_list}>
                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                1.
                            </p>

                            <p className={styles.privacy__text__content}>
                                If you have any questions regarding the Service, please contact Koo at nixlab.in@gmail.com
                            </p>
                        </div>

                        <div className={styles.privacy__text}>
                            <p className={styles.privacy__text__title}>
                                2.
                            </p>

                            <p className={styles.privacy__text__content}>
                                Please note that for the purpose of validation, you shall be required to provide information (including, but not limited to your email address, contact number, or, registered mobile number, etc.) for the purpose of sufficient identification, and authentication, and taking Your service request. Please refer to
                                our <Link href='/privacy-policy'>Privacy Policy</Link> on how we deal with information.
                            </p>
                        </div>
                    </div>

                    {/* CHANGES */}

                    <div className={styles.privacy__text_heading}>
                        11. CHANGES
                    </div>

                    <div className={styles.privacy__content_list}>
                        <p>
                            We may from time to time change these Terms of Service. We may assign or transfer our agreement with you including our associated rights and obligations at any time and you agree to cooperate with us in connection with such an assignment or transfer. We recommend that you periodically check this page for any revised terms. Your continued use of the Services will be deemed to constitute your acceptance of all such revised terms. You may request for earlier versions of these Terms by writing
                            to nixlab.in@gmail.com.
                        </p>
                    </div>
                    {/* END */}
                </div>
            </ResponsiveBox>
        </ExpandedBox>
    )
}

export default AppWrap(TermsOfService);
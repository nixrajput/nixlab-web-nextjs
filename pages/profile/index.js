import { } from 'react';
import Head from 'next/head';
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { logout, authenticating } from "../../redux/slices/authSlice";
import Image from 'next/image';
import styles from '../../styles/profile.module.scss';
import AppWrap from '../../components/AppWrap';

const Profile = () => {

    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const router = useRouter();

    const logoutUser = () => {
        dispatch(authenticating());

        dispatch(logout());
        const returnUrl = '/';
        router.replace(returnUrl);
    }

    return (
        <div className={styles.profile}>
            <Head>
                <title>{`${auth.user.fname} - Profile`}</title>
            </Head>

            <div className="app__page_heading">
                PROFILE
            </div>

            {
                (auth.status === "loadingUser") ?
                    <div className="app__box__form_container">
                        <div className="app__loading_text">
                            Please wait...
                        </div>
                    </div>
                    :
                    <div className="app__box_container">

                        <div className={styles.profile__image}>
                            <Image src={auth.user?.avatar?.url || '/avatar.png'}
                                alt={auth.user.fname}
                                layout='fill'
                                priority
                                placeholder='/avatar.png'
                            />
                        </div>

                        <div className={styles.profile__info}>

                            <div className={styles.profile__info__name}>
                                <h3>{`${auth.user.fname} ${auth.user.lname}`}</h3>
                            </div>

                            <div className={styles.profile__info__uname}>
                                <p>{auth.user.uname}</p>
                            </div>

                        </div>

                        <button className={`app__text_btn ${styles.logout_btn}`}
                            onClick={logoutUser}>
                            Logout
                        </button>

                    </div>
            }




        </div >
    )
}

export default AppWrap(Profile, 'profile');
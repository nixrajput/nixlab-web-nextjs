import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { Box, useTheme } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSnackbar } from 'notistack';
import AppWrap from "../../components/AppWrap";
import ExpandedBox from "../../components/ExpandedBox";
import ResponsiveBox from "../../components/ResponsiveBox";
import PageTitle from "../../components/PageTitle";
import CircleAvatar from "../../components/CircleAvatar";
import { tokens } from '../../theme/theme';
import {
    logoutAction,
} from '../../redux/actions';
import DateFormater from "../../utils/dateUtils";

const Profile = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const auth = useSelector((state) => state.auth);
    const profileDetails = useSelector((state) => state.profileDetails);
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const router = useRouter();

    const { enqueueSnackbar } = useSnackbar();

    const closeBackdrop = () => {
        setOpen(false);
    };

    const openBackdrop = () => {
        setOpen(true);
    };

    const logoutUser = async () => {
        const logoutPromise = logoutAction(dispatch);
        await logoutPromise;
    }

    useEffect(() => {
        if (
            (auth.status === 'authenticated' && !auth.token)
            || auth.status === 'unauthenticated'
        ) {
            router.replace('/login');
        }

        if (profileDetails.status === 'loading') {
            openBackdrop();
        }
        else {
            closeBackdrop();
        }

        if (profileDetails.status === 'error') {
            enqueueSnackbar(profileDetails.error, { variant: 'error' });
            clearProfileErrorAction(dispatch);
        }

        return () => { }

    }, [
        router, profileDetails.status, auth.status,
        enqueueSnackbar, dispatch, auth.token,
        profileDetails.error,
    ]);

    return (
        <ExpandedBox
            justifyContent="flex-start"
            alignItems="stretch"
        >
            <Head>
                <title>
                    {
                        (
                            auth.status === 'authenticated' &&
                            profileDetails.status === 'success' &&
                            profileDetails.user
                        ) ?
                            profileDetails.user?.fname + ' ' + profileDetails.user?.lname + ' - Profile'
                            :
                            'Profile'
                    }
                </title>
            </Head>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <PageTitle>
                PROFILE
            </PageTitle>

            <ResponsiveBox
                alignItems="center"
            >
                {
                    (profileDetails.status === 'success' && profileDetails.user) ?
                        <Box>
                            <CircleAvatar
                                avatar={profileDetails.user?.avatar}
                                size="20rem"
                            />

                            <Box
                                display="flex"
                                flexDirection="column"
                                justifyContent="center"
                                alignItems="center"
                                mt="1.5rem"
                            >
                                <h3
                                    style={{
                                        color: colors.primary[100],
                                        fontSize: "1.25rem",
                                        fontWeight: 500,
                                    }}
                                >
                                    {`${profileDetails.user?.fname} ${profileDetails.user?.lname}`}
                                </h3>

                                <p
                                    style={{
                                        color: colors.primary[200],
                                        fontSize: "1rem",
                                        fontWeight: 400,
                                    }}
                                >
                                    {`@${profileDetails.user?.uname}`}
                                </p>

                                <p
                                    style={{
                                        color: colors.primary[200],
                                        fontSize: "0.8rem",
                                        fontWeight: 400,
                                        marginTop: "1rem",
                                    }}
                                >
                                    Joined on {
                                        profileDetails.user?.createdAt &&
                                        new DateFormater(profileDetails.user?.createdAt).toDateTimeString()
                                    }
                                </p>
                            </Box>

                            <button className="app__text_btn"
                                style={{
                                    marginTop: '1.5rem',
                                }}
                                onClick={logoutUser}
                            >
                                Logout
                            </button>
                        </Box>
                        :
                        <Box>
                        </Box>
                }
            </ResponsiveBox>
        </ExpandedBox>
    )
}

export default AppWrap(Profile);
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
    getProfileDetailsAction,
    clearProfileErrorAction
} from '../../redux/actions/profileAction';
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

    useEffect(() => {
        const getData = async () => {
            const getProfileDetailsPromise = getProfileDetailsAction(dispatch, auth.token);
            openBackdrop();
            await getProfileDetailsPromise;
            closeBackdrop();
        }
        getData();

    }, [auth.token, dispatch]);

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

        return () => { }

    }, [
        router, profileDetails.status, auth.status,
        enqueueSnackbar, dispatch, auth.token,
    ]);

    useEffect(() => {
        if (profileDetails.error !== null) {
            enqueueSnackbar(profileDetails.error, { variant: 'error' });
            const clearErrorPromise = clearProfileErrorAction(dispatch);
            clearErrorPromise;
        }
    }, [
        profileDetails.error, enqueueSnackbar, dispatch
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
                sx={{
                    color: colors.accent,
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <ResponsiveBox
                alignItems="center"
            >
                {
                    (profileDetails.status === 'success' && profileDetails.user) ?
                        <Box>
                            <CircleAvatar
                                avatar={profileDetails.user?.avatar}
                                gender={profileDetails.user?.gender || 'others'}
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
                                        new DateFormater(profileDetails.user?.createdAt).toDateString()
                                    }
                                </p>
                            </Box>
                        </Box>
                        :
                        null
                }
            </ResponsiveBox>
        </ExpandedBox>
    )
}

export default AppWrap(Profile);
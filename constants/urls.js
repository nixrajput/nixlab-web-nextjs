const ApiUrls = {};

ApiUrls.baseUrl = 'https://api.nixlab.co.in/api/v1';
ApiUrls.devBaseUrl = 'http://localhost:4000/api/v1';

ApiUrls.loginEndpoint = '/login';
ApiUrls.logoutEndpoint = '/logout';
ApiUrls.forgotPasswordEndpoint = '/forgot-password';
ApiUrls.resetPasswordEndpoint = '/reset-password';
ApiUrls.changePasswordEndpoint = '/change-password';

ApiUrls.getProfileEndpoint = '/me';
ApiUrls.uploadProfilePicEndpoint = '/upload-profile-picture';
ApiUrls.deleteProfilePicEndpoint = '/remove-profile-picture';
ApiUrls.changePasswordEndpoint = '/change-password';
ApiUrls.updateProfileEndpoint = '/update-profile';
ApiUrls.checkUsernameEndpoint = '/check-username';
ApiUrls.changeUsernameEndpoint = '/change-username';
ApiUrls.deleteProfileEndpoint = '/delete-profile';
ApiUrls.validateTokenEndpoint = '/validate-token';
ApiUrls.addChangePhoneEndpoint = '/add-change-phone';
ApiUrls.changeEmailEndpoint = '/change-email';
ApiUrls.verifyPasswordEndpoint = '/verify-password';
ApiUrls.deactivateAccountEndpoint = '/deactivate-account';
ApiUrls.reactivateAccountEndpoint = '/reactivate-account';

ApiUrls.sendOtpToEmailEndpoint = '/send-otp-to-email';
ApiUrls.verifyOtpFromEmailEndpoint = '/verify-email-otp';
ApiUrls.sendOtpToPhoneEndpoint = '/send-otp-to-phone';
ApiUrls.verifyOtpFromPhoneEndpoint = '/verify-phone-otp';

ApiUrls.getPostsEndpoint = '/get-posts';
ApiUrls.postEndpoint = '/post';
ApiUrls.searchPostsEndpoint = '/search-posts';
ApiUrls.createPostEndpoint = '/create-post';
ApiUrls.likePostEndpoint = '/like-post';
ApiUrls.getPostLikedUsersEndpoint = '/get-post-liked-users';
ApiUrls.searchTagEndpoint = '/search-tag';
ApiUrls.getPostsByTagEndpoint = '/get-posts-by-tag';
ApiUrls.getTrendingPostsEndpoint = '/get-trending-posts';

ApiUrls.addCommentEndpoint = '/add-comment';
ApiUrls.getCommentsEndpoint = '/get-comments';
ApiUrls.likeCommentEndpoint = '/like-comment';
ApiUrls.deleteCommentEndpoint = '/delete-comment';

ApiUrls.loginInfoEndpoint = '/login-info';
ApiUrls.getLoginHistoryEndpoint = '/get-login-history';
ApiUrls.verifyLoginInfoEndpoint = '/verify-login-info';
ApiUrls.logoutFromOtherDevicesEndpoint = '/logout-all-other-devices';

ApiUrls.preKeyBundleEndpoint = '/pre-key-bundle';

ApiUrls.getLocationInfoEndpoint = '/get-location-info';

ApiUrls.reportUserEndpoint = '/report-user';
ApiUrls.reportPostEndpoint = '/report-post';
ApiUrls.reportCommentEndpoint = '/report-comment';

ApiUrls.requestVerificationEndpoint = '/request-verification';

ApiUrls.searchUserEndpoint = '/search-user';
ApiUrls.followUserEndpoint = '/follow-user';
ApiUrls.getFollowRequests = '/get-follow-requests';
ApiUrls.acceptFollowRequestEndpoint = '/accept-follow-request';
ApiUrls.removeFollowRequestEndpoint = '/remove-follow-request';
ApiUrls.cancelFollowRequestEndpoint = '/cancel-follow-request';
ApiUrls.getRecommendUsersEndpoint = '/get-recommend-users';
ApiUrls.userDetailsEndpoint = '/user-details';
ApiUrls.getFollowersEndpoint = '/get-followers';
ApiUrls.getFollowingEndpoint = '/get-followings';
ApiUrls.searchFollowersEndpoint = '/search-followers';
ApiUrls.searchFollowingEndpoint = '/search-followings';
ApiUrls.getUserPostsEndpoint = '/get-user-posts';

ApiUrls.getNotificationsEndpoint = '/get-notifications';
ApiUrls.markNotificationsReadEndpoint = '/mark-read-notification';
ApiUrls.deleteNotificationsEndpoint = '/delete-notification';

ApiUrls.getAllLastMessageEndpoint = '/get-all-last-messages';
ApiUrls.getMessagesByIdEndpoint = '/get-messages-by-id';

ApiUrls.fcmTokenEndpoint = '/fcm-token';


export default ApiUrls;
const ApiUrls = {};

ApiUrls.baseUrl = 'https://api.nixlab.co.in/api/v1';
ApiUrls.devBaseUrl = 'http://localhost:4000/api/v1';

ApiUrls.loginEndpoint = '/login';
ApiUrls.logoutEndpoint = '/logout';
ApiUrls.registerEndpoint = '/register';
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
ApiUrls.sendVerifyEmailOtpEndpoint = '/send-verify-email-otp';
ApiUrls.verifyOtpFromEmailEndpoint = '/verify-email-otp';
ApiUrls.sendOtpToPhoneEndpoint = '/send-otp-to-phone';
ApiUrls.verifyOtpFromPhoneEndpoint = '/verify-phone-otp';

ApiUrls.loginInfoEndpoint = '/login-info';
ApiUrls.getLoginHistoryEndpoint = '/get-login-history';
ApiUrls.verifyLoginInfoEndpoint = '/verify-login-info';
ApiUrls.logoutFromOtherDevicesEndpoint = '/logout-all-other-devices';

ApiUrls.userDetailsEndpoint = '/user-details';

ApiUrls.getProjectsEndpoint = '/get-projects';
ApiUrls.getProjectDetailsEndpoint = '/get-project-details';
ApiUrls.createProjectEndpoint = '/create-project';
ApiUrls.updateProjectEndpoint = '/update-project';
ApiUrls.deleteProjectEndpoint = '/delete-project';
ApiUrls.incrementProjectViewsCountEndpoint = '/increment-views-count';
ApiUrls.incrementProjectDownloadsCountEndpoint = '/increment-downloads-count';

ApiUrls.getNotificationsEndpoint = '/get-notifications';
ApiUrls.markNotificationsReadEndpoint = '/mark-read-notification';
ApiUrls.deleteNotificationsEndpoint = '/delete-notification';


export default ApiUrls;
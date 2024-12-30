export const authInitialState = {
    login: {
        email: '',
        password: '',
    },
    registration: {
        username: '',
        mobileNumber: '',
        email: '',
    },
    loginError: {
        email: { isError: false, message: '' },
        password: { isError: false, message: '' },
    },
    registrationError: {
        username: { isError: false, message: '' },
        mobileNumber: { isError: false, message: '' },
        email: { isError: false, message: '' },
    },
};

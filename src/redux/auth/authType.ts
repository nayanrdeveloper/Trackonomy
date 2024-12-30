export interface ValidationError {
    isError: boolean;
    message: string;
}

export interface LoginPayload {
    email: string;
    password: string;
}

export interface RegistrationPayload {
    username: string;
    password: string;
    email: string;
}

export const emailValidate = (email: string): string | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email is required.';
    if (!emailRegex.test(email)) return 'Invalid email format.';
    return null;
};

export const passwordValidate = (password: string): string | null => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!password) return 'Password is required.';
    if (!passwordRegex.test(password)) {
        return 'Password must be at least 8 characters long, contain one uppercase letter, and one number.';
    }
    return null;
};

export const usernameValidate = (username: string): string | null => {
    if (!username.trim()) {
        return 'Username is required.';
    }
    if (username.length < 3) {
        return 'Username must be at least 3 characters long.';
    }
    return null;
};

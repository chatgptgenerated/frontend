const API_BASE_URL = "http://localhost:5193/api/auth";

export async function RegisterUser(
    email: string, 
    password: string, 
    confirmPassword: string, 
    firstName: string, 
    lastName: string, 
    preferedLanguage: string
) {
    try {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
                confirmPassword,
                firstName,
                lastName,
                preferedLanguage,
            }),
        });

        // if (!response.ok) {
        //     throw new Error(`Error: ${response.statusText}`);
        // }

        const result = await response;
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function LoginUser(email: string, password: string, rememberMe: boolean) {
    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
                rememberMe,
            }),
            credentials: "include",
        });

        // if (!response.ok) {
        //     throw new Error(`Error: ${response.statusText}`);
        // }

        const result = await response;
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function GetAuthState() {
    try {
        const response = await fetch(`${API_BASE_URL}/getIdentity`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });

        // if (!response.ok) {
        //     throw new Error(`Error: ${response.statusText}`);
        // }

        const result = await response;
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function LogoutUser() {
    try {
        const response = await fetch(`${API_BASE_URL}/logout`, {
            method: "POST",
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response;
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}



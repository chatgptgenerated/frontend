const API_BASE_URL = "http://localhost:5193/api/helper";

export async function AddHelp(helpeeToken: string) {
    try {
        const response = await fetch(`${API_BASE_URL}/addHelp`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // do you really need me
                "Authorization": `Bearer ${localStorage.getItem("authToken")}` // Ensure you're passing a valid token
            },
            body: JSON.stringify({
                helpeeToken
            }),
        });

        // if (!response.ok) {
        //     throw new Error(`Error: ${response.statusText}`);
        // }

        const result = await response;
        console.log("AddHelp Result:", result);
        return result;
    } catch (error) {
        console.error("AddHelp Error:", error);
        throw error;
    }
}

export async function RemoveHelp(helpeeToken: string) {
    try {
        const response = await fetch(`${API_BASE_URL}/removeHelp`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("authToken")}` // Ensure you're passing a valid token
            },
            body: JSON.stringify({
                helpeeToken
            }),
        });

        // if (!response.ok) {
        //     throw new Error(`Error: ${response.statusText}`);
        // }

        const result = await response;
        console.log("RemoveHelp Result:", result);
        return result;
    } catch (error) {
        console.error("RemoveHelp Error:", error);
        throw error;
    }
}

// export async function LoginUser(email: string, password: string, rememberMe: boolean) {
//     try {
//         const response = await fetch(`${API_BASE_URL}/login`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 email,
//                 password,
//                 rememberMe,
//             }),
//             credentials: "include",
//         });

//         // if (!response.ok) {
//         //     throw new Error(`Error: ${response.statusText}`);
//         // }

//         const result = await response;
//         console.log(result);
//         return result;
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// }



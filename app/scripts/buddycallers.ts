import { GetAuthState } from "./callers";

const API_BASE_URL = "http://localhost:5193/api/helper";



export async function AddHelp(helpeeToken: string) {
    try {
        const userId = await GetAuthState();
        const data = await userId.json();
        console.log(data['message']);

        const response = await fetch(`${API_BASE_URL}/addHelp?HelpeeToken=${helpeeToken}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // do you really need me
                //"Authorization": `Bearer ${localStorage.getItem("authToken")}` // Ensure you're passing a valid token
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

export async function GetId() {
    try {
        const response = await fetch(`http://localhost:5193/api/auth/getId`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // do you really need me
                //"Authorization": `Bearer ${localStorage.getItem("authToken")}` // Ensure you're passing a valid token
            },
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
        const response = await fetch(`${API_BASE_URL}/removeHelp?HelpeeToken=${helpeeToken}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                //"Authorization": `Bearer ${localStorage.getItem("authToken")}` // Ensure you're passing a valid token
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

export async function getAllHelped(){
    const userId = await GetAuthState();
    const data = await userId.json();
    console.log(data['message']);
    
    const options = {method: 'GET', headers: {accept: 'application/json'}};
    const ans = await fetch(`${API_BASE_URL}/allHelped?HelperId=${data['message']}`, options)
    .then(res => res.json())
    .catch(err => console.error(err));

    return ans;
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



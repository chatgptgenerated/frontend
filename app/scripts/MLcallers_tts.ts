const API_BASE_URL = "http://localhost:5001";

// Function to ask a question and get a response
export async function askQuestion(question: string): Promise<Blob> {
    try {
        console.log("ceva");
        const response = await fetch(`${API_BASE_URL}/ask_question`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                question,
            }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.blob(); // Expecting an audio file
        console.log("AskQuestion Result:", result);
        return result;
    } catch (error) {
        console.error("AskQuestion Error:", error);
        throw error;
    }
}

export async function readText(question: string): Promise<Blob> {
    try {
        console.log("ceva");
        const response = await fetch(`${API_BASE_URL}/read_text`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                question,
            }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.blob(); // Expecting an audio file
        console.log("AskQuestion Result:", result);
        return result;
    } catch (error) {
        console.error("AskQuestion Error:", error);
        throw error;
    }
}

// Function to record speech and transcribe the question
export async function recordSpeech(): Promise<{ question: string }> {
    try {
        const response = await fetch(`${API_BASE_URL}/record_speech`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        console.log("RecordSpeech Result:", result);
        return result;
    } catch (error) {
        console.error("RecordSpeech Error:", error);
        throw error;
    }
}

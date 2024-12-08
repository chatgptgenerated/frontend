const API_BASE_URL = "http://localhost:5193/api/File"; // Replace with the actual base URL of your .NET API

export async function addFile(file: File, helpeeId: string): Promise<{ message: string; fileName: string }> {
    try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("HelpeeId", helpeeId);

        const response = await fetch(`${API_BASE_URL}/AddFile`, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error: ${errorText}`);
        }

        const result = await response.json();
        console.log("AddFile Result:", result);
        return result;
    } catch (error) {
        console.error("AddFile Error:", error);
        throw error;
    }
}

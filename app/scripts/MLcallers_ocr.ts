const API_BASE_URL = "http://localhost:5000"; // Update with the base URL of your Flask server

// Function to process a PDF file and extract text
export async function processPDF(pdfFile: File): Promise<string[]> {
    try {
        const formData = new FormData();
        formData.append("pdf", pdfFile);

        const response = await fetch(`${API_BASE_URL}/process_pdf`, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        console.log("ProcessPDF Result:", result);
        return result.extracted_text;
    } catch (error) {
        console.error("ProcessPDF Error:", error);
        throw error;
    }
}

// Function to process an image file and extract text
export async function processImage(imageFile: File): Promise<string[]> {
    try {
        const formData = new FormData();
        formData.append("image", imageFile);

        const response = await fetch(`${API_BASE_URL}/process_image`, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        console.log("ProcessImage Result:", result);
        return result.extracted_text;
    } catch (error) {
        console.error("ProcessImage Error:", error);
        throw error;
    }
}

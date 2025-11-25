/**
 * Download utilities
 */

export async function downloadCV() {
    try {
        // TODO: Replace with actual CV file path
        const cvPath = "/cv/mfon-francis-cv.pdf";
        const response = await fetch(cvPath);
        
        if (!response.ok) {
            throw new Error("CV file not found");
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Mfon-Francis-CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error("Error downloading CV:", error);
        throw error;
    }
}




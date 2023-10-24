document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("textCanvas");
    const ctx = canvas.getContext("2d");
    const outputImage = document.getElementById("outputImage");
    const downloadLink = document.getElementById("downloadLink");
    const textArea = document.getElementById("output");

    textArea.addEventListener("input", function () {
        generateImage();
    });

    function generateImage() {
        const text = textArea.value;
        const fontSize = 30;
        const fontFamily = "Noto Sans Batak"; // Set the font-family
        const textColor = "black";
        const maxWidth = canvas.width; // Maximum width for text

        // Set font properties
        ctx.font = `${fontSize}px ${fontFamily}`;
        ctx.fillStyle = textColor;

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Split the text into lines that fit the canvas width
        const lines = [];
        let currentLine = "";
        const words = text.split(" ");
        for (const word of words) {
            const currentText = currentLine === "" ? word : currentLine + " " + word;
            const textMetrics = ctx.measureText(currentText);
            if (textMetrics.width <= maxWidth) {
                currentLine = currentText;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);

        // Calculate text position
        let y = canvas.height / 2 - (lines.length * fontSize) / 2;

        // Draw each line on the canvas
        for (const line of lines) {
            const textMetrics = ctx.measureText(line);
            const textWidth = textMetrics.width;
            const x = (canvas.width - textWidth) / 2;

            // Draw the text on the canvas
            ctx.fillText(line, x, y);

            // Move to the next line
            y += fontSize;
        }

        // Convert the canvas to an image
        const dataURL = canvas.toDataURL("image/png");

        // Display the generated image
        outputImage.src = dataURL;

        // Set the download link href to the data URL
        downloadLink.href = dataURL;

        // Show the download link
        downloadLink.style.display = "block";
    }

    // Initial image generation
    generateImage();
});

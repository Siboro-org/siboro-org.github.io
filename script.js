document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("textCanvas");
    const ctx = canvas.getContext("2d");
    const generateButton = document.getElementById("generateImage");
    const outputImage = document.getElementById("outputImage");

    generateButton.addEventListener("click", function () {
        const text = "ᯘᯞᯮᯂᯮᯖ᯲ᯉ"; // The Batak text
        const fontSize = 30;
        const fontFamily = "Noto Sans Batak"; // Set the font-family
        const textColor = "black";

        // Set font properties
        ctx.font = `${fontSize}px ${fontFamily}`;
        ctx.fillStyle = textColor;

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate text size and position
        const textMetrics = ctx.measureText(text);
        const textWidth = textMetrics.width;
        const x = (canvas.width - textWidth) / 2;
        const y = canvas.height / 2 + fontSize / 2;

        // Draw the text on the canvas
        ctx.fillText(text, x, y);

        // Convert the canvas to an image
        const dataURL = canvas.toDataURL("image/png");

        // Display the generated image
        outputImage.src = dataURL;
    });
});

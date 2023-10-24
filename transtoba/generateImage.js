document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("textCanvas");
    //const text = document.getElementById("output").value;
    const ctx = canvas.getContext("2d");
    const generateButton = document.getElementById("generateImage");
    const outputImage = document.getElementById("outputImage");

    // Assuming you have a button with id "retrieveTextButton"
    const retrieveTextButton = document.getElementById("generateImage");
    const outputtext = document.getElementById("output");
    const downloadLink = document.getElementById("downloadLink");

    retrieveTextButton.addEventListener("click", function () {
        const bataktext = outputtext.value;

        //const text = bataktext; // The Batak text
        console.log("text to be made image: " + bataktext);
        const fontSize = 30;
        const fontFamily = document.getElementById("fontSelector");
        const selectedFontFamily = fontFamily.value;
        console.log("font selected: " + selectedFontFamily);
        const textColor = "black";
        const maxWidth = canvas.width; // Maximum width for text

        // Set font properties
        ctx.font = `${fontSize}px ${selectedFontFamily}`;
        ctx.fillStyle = textColor;

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Split the text into lines that fit the canvas width
        const lines = [];
        let currentLine = "";
        const words = bataktext.split(" ");
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
        //let y = canvas.height / 2 - (lines.length * fontSize) / 2;
        let y=0;

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


        // Calculate text size and position
        /*
        const textMetrics = ctx.measureText(bataktext);
        const textWidth = textMetrics.width;
        const x = (canvas.width - textWidth) / 2;
        const y = canvas.height / 2 + fontSize / 2;
*/

        // Draw the text on the canvas
        //ctx.fillText(bataktext, x, y);

        // Convert the canvas to an image
        const dataURL = canvas.toDataURL("image/png");

        // Display the generated image
        outputImage.src = dataURL;

        // Set the download link href to the data URL
        downloadLink.href = dataURL;

        // Show the download link
        downloadLink.style.display = "block";
    });
});

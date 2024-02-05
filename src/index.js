const express = require('express');
const Jimp = require('jimp');

const app = express();
const port = 3000;

// Define a route for image blur detection
app.get('/detectBlur', async (req, res) => {
  try {
    // Load an example image
    const image = await Jimp.read('Blur-Detection-Web-App-new/images/img1.jpeg');

    // Convert the image to grayscale
    image.greyscale();

    // Apply blur detection logic
    const blurValue = image.getPixelBrightness(0, 0); // Replace with your blur detection logic

    // Set a threshold for blur detection
    const blurThreshold = 100;

    // Check if the image is blurred
    const isBlurred = blurValue < blurThreshold;

    // Send the result as JSON
    res.json({ isBlurred, blurValue });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

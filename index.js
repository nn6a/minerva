(async () => {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    const fileName = 'resource/minerva.jpg';

    // Performs label detection on the local file
    const [result] = await client.labelDetection(fileName);
    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
})();


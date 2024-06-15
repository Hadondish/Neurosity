const { Neurosity }  =require("@Neurosity/sdk")
require("dotenv").config;

const neurosity = new Neurosity({
  timesync: true
});

main();

async function main() {
  await neurosity.login({
    email: process.env.NEUROSITY_EMAIL,
    password: process.env.NEUROSITY_PASSWORD
  });
  .catch(error => {
    console.log("error", error);
  });
  // logged in!
}

neurosity.brainwaves("rawUnfiltered").subscribe(brainwaves => {
    console.log(brainwaves)
});

neurosity.brainwaves("rawUnfiltered").substribe(brainwave -> {
    console.log(BroadcastChannel)
})

// Feature extraction
// Sample dataset
const dataset = [
    { x1: 1.2, x2: 3.5 },
    { x1: 2.2, x2: 4.5 },
    { x1: 3.2, x2: 5.5 },
    // Add more data points as needed
  ];
  
  // Function to extract features from the dataset
  function extractFeatures(data) {
    const features = [];
    data.forEach(point => {
      const featureVector = [];
      // Extract relevant features from each data point
      featureVector.push(point.x1 * 2); // Example feature extraction
      featureVector.push(point.x2 * point.x2); // Another example feature extraction
      // Add more feature extraction logic as needed
      features.push(featureVector);
    });
    return features;
  }
  
  // Extract features from the dataset
  const extractedFeatures = extractFeatures(dataset);
  console.log(extractedFeatures);
  

  dataset = [
    {'x1: 2.3'},
    {'x2: 3.2'},
  ]
  
  neurosity.brainwaves("")
  data.foreachVecotr
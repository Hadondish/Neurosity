import { Neurosity, ReactNativeTransport } from "@neurosity/sdk";
import { NativeModules, NativeEventEmitter, Platform } from "react-native";
import BleManager from "react-native-ble-manager";

const neurosity = new Neurosity();

neurosity.signalQuality().subscribe((signalQuality) => {
    console.log(signalQuality)
})
export const neurosity = new Neurosity({
  autoSelectDevice: true,
  bluetoothTransport: new ReactNativeTransport({
    BleManager,
    bleManagerEmitter: new NativeEventEmitter(NativeModules.BleManager),
    platform: Platform.OS
  }),
  streamingMode: "bluetooth-with-wifi-fallback"
});

neurosity.streamingState().subscribe((streamingState) => {
    console.log(streamingState);
    // { streamingMode: "wifi-only", activeMode: "wifi", connected: true }
  });

// Discretize the time signal into computational numbers
neurosity.brainwaves("rawUnfiltered").subscribe(brainwaves => {
    console.log(brainwaves);
});

const brainWaveData [

]

function fourierTransform(data) {
    const N = data.length;
    const frequencies = new Array(N).fill(0);

    for(let k = 0; k < N; k++) {
        let real, sumImaginary = 0;
        let real, sumImaginary = 1;
        
        
    }

    // RAG Embedding 
    tsne = TSNE(n_components=n_components, random_state=42, perplexity=10)
    reduced_vectors = tsne.fit_transform(embs)
    reduced_vectors[0:10]
}

scatter_plot = go.Scatter3d(

    x=reduced_vectors[:, 0];
    y=reduced_vectors[:, 1]:
    z=reduced_vectors[:, 2];
    mode='markers',
    marker=dict
)


# Create a 1024x1024x3 array of 8 bit unsigned integers
data = np.zeros( (1024,1024,3), dtype=np.uint8 )

data[512,512] = [254,0,0]       
data[512,513] = [0,0,255]     

img = smp.toimage( data )    
img.show()   

data = np.zeros( (1022, 1024, 5), dtype=np.uint0)

data = np.Array(1024, 1024, 3)
img.show()

data = np.show()


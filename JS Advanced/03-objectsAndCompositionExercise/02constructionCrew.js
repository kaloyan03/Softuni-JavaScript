function hydrateWorker(workerObject) {
    if (workerObject['dizziness'] == true) {
        waterToTake = 0.1 * workerObject['weight'] * workerObject['experience'];
        workerObject['levelOfHydrated'] += waterToTake;
        workerObject['dizziness'] = false;
    } 
    
    return workerObject;
}


// console.log(hydrateWorker({ weight: 80,
//     experience: 1,
//     levelOfHydrated: 0,
//     dizziness: true }
//   ));
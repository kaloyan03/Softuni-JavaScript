function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      textAreaElements = document.querySelector('#inputs textarea');
      outputAreaBestRestourantElement = document.querySelector('#outputs #bestRestaurant p')
      outputAreaWorkersElement = document.querySelector('#outputs #workers p')

      text = textAreaElements.value;

      textArray = JSON.parse(text);

      restourants = {};

      textArray.forEach(el => {
         [restourant, workersInfo] = el.split(' - ');
         workers = workersInfo.split(', ');
         let currentWorkers = [];
         // workers.map(w => {
         //    [workerName, workerSalary] = w.split(' ');
         //    workerSalary = Number(workerSalary);

         for (let worker of workers) {
            const workerTokens = worker.split(' ');
            const salary = Number(workerTokens[1]);
            currentWorkers.push({'name': workerTokens[0], salary})
         }

            // currentWorkers.push({
            //    'name': workerName,
            //    'salary': workerSalary
            // });
         
         currentWorkers.sort((a, b) => b['salary'] - a['salary']);
         bestSalary = currentWorkers[0]['salary'];
         sumWorkersSalary = 0;

         currentWorkers.forEach(w => {
            sumWorkersSalary += w['salary'];
         })


          averageSalary = sumWorkersSalary / currentWorkers.length;
         
         if (restourant in restourants) {
            currentWorkers = restourants[restourant]['currentWorkers'].concat(currentWorkers);
            }  


         restourants[restourant] = {
            currentWorkers,
            'averageSalary' : averageSalary,
            'bestSalary' : bestSalary
            };
         
         })
      
         // averageSalary = currentWorkers.reduce(getSum) / currentWorkers.length;

         // function getSum(acc, currentValue) {
         //    return acc += currentValue['salary'];
         // }

      
         


         
         
         // sumWorkersSalary = 0;

         // currentWorkers.forEach(w => {
         //    sumWorkersSalary += w['salary'];
         // })




      let best = undefined;
        let bestRestaurantSalary = 0;
      counter = 0;
      for (const restourant in restourants) {
         if (restourants[restourant]['averageSalary'] > bestRestaurantSalary) {
            best = {
               'name': restourant,
               'currentWorkers': restourants[restourant]['currentWorkers'],
               'bestSalary': restourants[restourant]['bestSalary'],
               'averageSalary': restourants[restourant]['averageSalary']
            };
         }
      }
         
      firstParagraphResult = `Name: ${best['name']} Average Salary: ${best['averageSalary'].toFixed(2)} Best Salary: ${best['bestSalary'].toFixed(2)}`;
   
      secondParagraphResult = '';
   
      for (worker of best['currentWorkers']) {
         secondParagraphResult += `Name: ${worker['name']} With Salary: ${worker['salary']} `
      }
      
      outputAreaBestRestourantElement.textContent = firstParagraphResult;
      outputAreaWorkersElement.textContent = secondParagraphResult; 

   };

        
}

  












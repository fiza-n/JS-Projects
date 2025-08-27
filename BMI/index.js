const form = document.querySelector("form");

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
        const weight= parseInt(document.querySelector('#weight').value);
        const results = document.querySelector("#results");

        if(height === '' || height < 0 || isNaN(height)){
            results.innerHTML = 'Please give a valid height in cm!';
        }
    
        
       else if(weight === '' || weight < 0 || isNaN(weight)){
            results.innerHTML = 'Please give a valid weight in kg!';
        }
           
        else{
         const bmi =  (weight / ((height*height)/10000)).toFixed(2);
           let message = '';
           
        if(bmi < 18.6){
            message = `You are Underweight ${message}`;
        }
         if(bmi > 18.6 && bmi < 24.9){
            message = `'You have Normal weight' ${message}`;
        }
         if(bmi > 24.9){
           message =` 'You are Overweight' ${message}`;
        }
        results.innerHTML = `Your bmi is ${bmi},${message}`;
        
        }
})
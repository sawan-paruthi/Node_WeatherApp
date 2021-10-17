const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const message1 = document.querySelector('#message-1');
const message2 = document.querySelector('#message-2');
const message3 = document.querySelector('#message-3');




weatherForm.addEventListener('submit', function(e){
	  e.preventDefault();
      const location = search.value;

      message1.textContent = 'Loading...';
      message2.textContent ='';
      message3.textContent ='';

	  fetch('http://localhost:3000/weather?address=' + location).then(function(response){
	  	response.json().then(function(data){
	  		if(data.error){
	  			message1.textContent = data.error;
	  			console.log(data.error)
	  		}else{
	  			message1.textContent = data.location;
	  			message2.textContent = 'Current Weather Condition is ' + data.forecast.current.condition.text;
	  			message3.textContent = 'Current Tempreture is ' + data.forecast.current.temp_c + ' Degree Celcius';
	  			console.log(data.location);
	  			console.log(data.forecast.current);
	  		}
	  	})
	  })
})
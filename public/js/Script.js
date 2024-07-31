const staticword = document.getElementById('staticword');
const country = document.getElementById('country');
const latius = document.getElementById('latius');
const logtius = document.getElementById('logtius');
const forecast = document.getElementById('forecast');
const countryInput = document.getElementById('country-input');
const searchButton = document.getElementById('button-addon2');
const errorF = document.getElementById('error')
let form = document.getElementById("form")
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  weatherFun()
})
let weatherFun = async() =>{
    try{
        const address = countryInput.value
        const res =  await fetch('http://localhost:3000/weather?address='+address)
        const data = await res.json()
        console.log(data)
        if(data.error){
            staticword.style.display = "none"
            setTimeout(() => {
                errorF.innerText = data.error
                country.innerText =''    
                latius.innerText =''   
                logtius.innerText =''   
                forecast.innerText =''  
              }, 500); 

        }
        else {
            staticword.style.display = "none"
            errorF.innerText = ''
        
          setTimeout(() => {
            country.innerText = 'Country is  '+address

          }, 500); 
          setTimeout(() => {
            latius.innerText =  'latitude is ' + data.latitude

          }, 1000); 
          setTimeout(() => {
            logtius.innerText = 'longitude is ' +  data.longitude

          }, 1500); 
          setTimeout(() => {
            forecast.innerText = 'forecast is ' +  data.forecast

          }, 2000);
        }
    }
    catch(e){
        console.log(e)
    }
}
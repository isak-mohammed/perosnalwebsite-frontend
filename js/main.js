window.addEventListener('DOMContentLoaded',(event)=>{   /*when contenet gets loaded getvisitcount function will be called*/
    getVisitCount();
})

/*Defining the constant to store the APIGW url*/
const functionApi = 'https://gqichig958.execute-api.us-east-1.amazonaws.com/Prod/visitor-count/';

/*JS function to grab the correct part of JSON provided by API and display in index.html */
const getVisitCount = () => {
    fetch(functionApi)
    .then(response =>response.text()) /*grab the response of API*/
      .then((body) => {
        var obj = JSON.parse(body);   /*parse the json response in to variable obj*/
        document.getElementById("counter").innerHTML=obj.visitorCount   /*grab the element 'counter' from index.html document and set it to value of visitorCount return by API(stored in variable obj) */
      })
      .catch(function(error) {   /*Incase of error we will catch them to display in console*/
        console.log(error); 
      });  
    } 
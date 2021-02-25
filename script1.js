//1.create a request variable from XMLHttpRequest
var request=new XMLHttpRequest();
//2.create a new connection
request.open('GET',' https://restcountries.eu/rest/v2/all',true)
//3.send the request
request.send();
//4.load the data
request.onload=function(){
    var countrydata=JSON.parse(this.response);
    let countrypopulation=0
    for(i in countrydata)
    {
        countrypopulation=countrypopulation+countrydata[i].population;
    }
    console.log("total population in all countries is " +countrypopulation);
}
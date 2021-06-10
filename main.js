let fnum;
function fn(){
    
 var fnumber=document.getElementById("fnumber").value;
if(fnumber=="")
{
alert("Please enter the mission number");


}
else if(isNaN(fnumber))
{
alert("Please enter numeric numbers");


}
else if((fnumber.length < 1) || (fnumber.length > 10))
{
alert("Length should not exceed 10");

}
else if(fnumber<1 || fnumber==0)
{
    alert("Negatives are not allowed");

}
else{
    fnum=fnumber;
    getData();
}
      
}
let url= "https://api.spacexdata.com/v3/launches/"
function getData(){
fetch(url+fnum).then(function(response){
    return response.json();
}).then(function(obj){
    console.log(obj);
    document.getElementById("number").textContent= obj.flight_number;
    document.getElementById("year").textContent=obj.launch_year;
    document.getElementById("mname").textContent=obj.mission_name;
    document.getElementById("rname").textContent= obj.rocket.rocket_name ;
    document.getElementById("lsite").textContent=obj.launch_site.site_name_long;
    document.getElementById("artlink").href=obj.links.article_link;
    document.getElementById("vidlink").href=obj.links.video_link;

    document.getElementById("artlink").href=obj.links.article_link;
    document.getElementById("vidlink").href=obj.links.video_link;
}).catch(function(error){
    console.error('wrong');
    console.error(error);
});
}

// On Hit Enter
var input = document.getElementById("fnumber");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("sbtn").click();
  }
});

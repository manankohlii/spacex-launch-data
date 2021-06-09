let fnum;
function fn(){
    var fnumber=document.getElementById("fnumber").value;
    fnum=fnumber;
    getData();
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

}).catch(function(error){
    console.error('wrong');
    console.error(error);
});
}


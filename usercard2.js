let sachininfo = {
    imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Sachin-Tendulkar_%28cropped%29.jpg/330px-Sachin-Tendulkar_%28cropped%29.jpg",
    name: "sachin tendulkar",
    Description: Indian Cricketer
}
let sachinnewinfo = {
    imgurl: "https://staticg.sportskeeda.com/editor/2018/03/097bd-1521526789-800.jpg"
    description: "Man of the Series - World Cup 2011"
}

let issachinold = true;
let displayobject;

let flipdata = function(){
    if(issachinold == true){
        displayobject = sachinnewinfo;
        issachinold = false;
    }
    else{
        displayobject = sachinoldinfo;
        issachinold = true;
    }
    document.getElementById("ywc").src=displayobject.imgurl;
    document.getElementById("ywc-name").innerHTML=displayobject.name;
    document.getElementById("ywc-des").innerHTML = displayobject.description;
}
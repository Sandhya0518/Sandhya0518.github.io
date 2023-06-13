let sachininfo = {
    imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Sachin-Tendulkar_%28cropped%29.jpg/330px-Sachin-Tendulkar_%28cropped%29.jpg",
    name: "sachin tendulkar",
    Description: "Indian Cricketer"
}

let displayobject;

let getRandomUser = function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data => console.log(data))
    .then(data => {
        displayobject.name = data.results[0].name.first + " " + data.results[0].name.last
        //displayobject.name = "sandhya" 
        displayobject.imgurl = data.results[0].picture.large
        displayobject.description = data.results[0].gender
        document.getElementById("ywc").src=displayobject.imgurl;
        document.getElementById("ywc-name").innerHTML=displayobject.name;
        document.getElementById("ywc-des").innerHTML = displayobject.description;
    })

}
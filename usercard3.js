let sachininfo = {
    imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Sachin-Tendulkar_%28cropped%29.jpg/330px-Sachin-Tendulkar_%28cropped%29.jpg",
    name: "sachin tendulkar",
    Description: "Indian Cricketer"
}

let displayobject = {
    name: "",
    imgurl: "",
    description: ""
};

let getRandomUser = function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data => {
        displayobject.name = data.results[0].name.first + " " + data.results[0].name.last
        //displayobject.name = "sandhya" 
        displayobject.imgurl = data.results[0].picture.large
        displayobject.description = data.results[0].gender
        document.getElementById("sachin-img").src=displayobject.imgurl;
        document.getElementById("sachin").innerHTML=displayobject.name;
        document.getElementById("sachin-desc").innerHTML = displayobject.description;
    })

}

var dropdown = document.getElementById('dropdown')

var dropdown_items = '';

// var urls = ["home.html","contact.html"]
// for (let index = 0; index < urls.length; index++) {
    
//     dropdown_items += "<li><a href="+urls[index]+">"+ index +"</a></li>"
// }
var urls = [{
    name: "home", 
    url : "home.html",
    
},{
    name: "contact",
    url : "contact.html"
}
]

urls.forEach(item => {
    dropdown_items += "<li><a href="+item.url+">"+item.name +"</a></li>"
});

dropdown.innerHTML = dropdown_items

// var dropdown_item = document.createElement('a')
// dropdown_item.setAttribute('href','home.html')
// dropdown_item.innerHTML = "Home"
// dropdown.appendChild(dropdown_item)



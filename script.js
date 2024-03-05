var res = fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json()).then((data1)=>bar(data1))

var container = document.createElement("div");
container.className ="container"

var row = document.createElement("div");
row.className = "row"

function bar(data1){
  console.log(data1)
  for(var i=0;i<=data1.length;i++){
    var col = document.createElement("div");
    col.className = "col-lg-4 col-sm-6"
    col.innerHTML =`<div class="card" style="width: 20rem;">
    <h4 class="card-title">${data1[i].name.common}<h4>
    <img src=${data1[i].flags.png} class="card-img-top">
    <div class="card-body">
      <p class="card-text">Capital: ${data1[i].capital}</p>
      <p class="card-text">Region: ${data1[i].region}</p>
      <p class="card-text">Country code: ${data1[i].cca3}</p>
      <a href="#" class="btn btn-primary"onclick="button_click(event,${data1[i].latlng[0]},${data1[i].latlng[1]})">Click for Weather</a>
      <br>
      <span class="temperature"></span>
    </div>
  </div>`
  row.append(col)
  container.append(row)
  document.body.append(container)
  }
}

function button_click(event,lat,lon){
    event.preventDefault();
  var final_res = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=`)
  .then((data2)=>data2.json()).then((data3)=>{
    let temperature = data3.main.temp;
  let span = event.target.parentElement.querySelector(".temperature")
  span.innerHTML =`Temperature: ${temperature}`
})
}
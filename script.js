var res = fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json()).then((data1)=>bar(data1))

var container = document.createElement("div");
container.className ="container"

var heading = document.createElement("h1");
heading.innerText = "RestCountries & Weather Using fetch API";
heading.id = "title";
heading.className ="text-center"

var row = document.createElement("div");
row.className = "row"

function bar(data1){
  console.log(data1)
  for(var i=0;i<=data1.length;i++){
    var col = document.createElement("div");
    col.className = "col-sm-6 col-md-4 col-lg-4 col-xl-4"
    col.innerHTML =`<div class="card h-100" style="width: 20rem;">
    <div class="card-header">
    <h4 class="card-title ">${data1[i].name.common}<h4> 
  </div>
  <img src=${data1[i].flags.png} class="card-img-top">
    <div class="card-body">
      <div class="card-text">Region: ${data1[i].region}</div>
      <div class="card-text">Capital: ${data1[i].capital}</div>
      <div class="card-text">Country code: ${data1[i].cca3}</div>
      <button href="#" class="btn btn-primary"onclick="button_click(event,${data1[i].latlng[0]},${data1[i].latlng[1]})">Click for Weather</button>
      <br>
      <span class="temperature"></span>
    </div>
  </div>`
  row.append(col)
  container.append(row)
  document.body.append(heading,container)
  }
}


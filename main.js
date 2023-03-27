
const weatherBox = document.getElementById("weather-box")
//console.log(weatherBox);

const enteredinput = document.getElementById("entered-Input")
//console.log(enteredinput)
const searchButton = document.getElementById("search-Button")

searchButton.addEventListener("click", event => {
    event.preventDefault()
     entered = enteredinput.value
     enteredinput.value = ""
    //console.log(entered);
    
    if (entered)
    {
        let promise = fetch(`https://wttr.in/${entered}?format=j1`)
        //console.log(promise);
        promise.then(response => {
            return response.json()
        }).then(json => {
            fillWeatherBox(json, entered) 
        })
    }else {
        errorMsg = document.createElement("h2")
        //errorMsg.classList("error")
        errorMsg.innerHTML = `Input cannot be empty`
        weatherBox.append(errorMsg)
    }
    
    
})


const fillWeatherBox = (json, entered) => {
    weatherBox.innerHTML = ""
    //window.montreal = json

    let newHead = document.createElement("h3")
    newHead.textContent = entered
    weatherBox.append(newHead)

    let area = json.nearest_area[0].areaName[0].value
    let areaName = document.createElement("li")
    areaName.classList = "newAddedLines"
    areaName.innerHTML = `<strong>Area:</strong> ${area}`
    weatherBox.append(areaName)

    let region = json.nearest_area[0].region[0].value
    let reg = document.createElement("li")
    reg.classList = "newAddedLines"
    reg.innerHTML =`<strong>Region:</strong> ${region}`
    weatherBox.append(reg)

    let country = json.nearest_area[0].country[0].value
    let count = document.createElement("li")
    count.classList = "newAddedLines"
    count.innerHTML =`<strong>Country:</strong> ${country}`
    weatherBox.append(count)
    
    let currently = json.current_condition[0].FeelsLikeF
    let curr = document.createElement("li")
    curr.classList = "newAddedLines"
    curr.innerHTML =`<strong>Currently:</strong> ${currently}°F`
    weatherBox.append(curr)
   // console.log(json);

   let addOn = document.getElementById("weather-box-addon")
    //console.log(addOn)
    addOn.innerHTML = ""
    newAddOn = document.createElement("li")
    newAddOn.classList = "fontSize"
    newAddOn.innerHTML = `${entered} - ${currently}°F` 
    let sideAddition = document.getElementById("weather-box-item")
    sideAddition.append(newAddOn)

}
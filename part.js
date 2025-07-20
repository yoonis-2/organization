const iconOne = document.querySelector("#iconOne")
const menu = document.querySelector("#menu")
const btnInc = document.querySelector("#btnInc")
const zero = document.querySelector("#Zero")
const hour  = document.querySelector("#hour")
const minutes= document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")
const AmPm = document.querySelector("#AmPm")
const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")
const range = document.querySelector("#range")
// question-2
const minus2 = document.querySelector("#minus2")
const plus2 = document.querySelector("#plus2")
const range2 = document.querySelector("#range2")
// question-3
const minus3 = document.querySelector("#minus3")
const plus3 = document.querySelector("#plus3")
const range3 = document.querySelector("#range3")
console.log(iconOne, menu, btnInc , zero, hour, minutes, seconds,  plus, range, minus2, plus2, range2, minus3, plus3, range3)

let count = 0

iconOne.addEventListener("click", () => {
   menu.classList.toggle("hidden")
})

btnInc.addEventListener("click", () => {
    count +=1
    zero.textContent = count
})


// Watches

function SmartWatches(){
  let Today = new Date()
  hour.innerHTML = Today.getHours() %12
  minutes.innerHTML = Today.getMinutes()
  seconds.innerHTML = Today.getSeconds()

  Today.getHours() % 12 < 10 ? hour.innerHTML = `0${Today.getHours() %12}`  : hour.innerHTML = Today.getHours() % 12 + " :"
  Today.getMinutes() <10 ? minutes.innerHTML = `0${Today.getMinutes()}`     :   minutes.innerHTML = Today.getMinutes() + " :" 
  Today.getSeconds() < 10 ? seconds.innerHTML = `0${Today.getSeconds()}`    :  seconds.innerHTML = Today.getSeconds()
}

setInterval(SmartWatches)





plus.addEventListener("click", () =>{
  range.style.display = "block"
  plus.style.display = "none"
  minus.style.display = "block"
})

minus.addEventListener("click", () =>{
  range.style.display = "none"
  plus.style.display = "block"
  minus.style.display = "none"
})

// question-2
plus2.addEventListener("click", () =>{
  range2.style.display = "block"
  plus2.style.display = "none"
  minus2.style.display = "block"
})

minus2.addEventListener("click", () =>{
  range2.style.display = "none"
  plus2.style.display = "block"
  minus2.style.display = "none"
})

// question-3
plus3.addEventListener("click", () =>{
  range3.style.display = "block"
  plus3.style.display = "none"
  minus3.style.display = "block"
})

minus3.addEventListener("click", () =>{
  range3.style.display = "none"
  plus3.style.display = "block"
  minus3.style.display = "none"
})
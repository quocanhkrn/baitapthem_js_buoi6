function ex() {
  let num = parseInt(document.getElementById("num").value)
  let result = document.getElementById("exResult")
  let numString = "2 "
  for (let i = 3; i <= num; i++) {
    let check = true
    for (let j = 2; j < i; j++) {
      if (i % j === 0) check = false
    }
    if (check) {
      numString += `${i} `
    }
  }
  result.classList.add("alert")
  result.innerHTML = `${numString}`
}
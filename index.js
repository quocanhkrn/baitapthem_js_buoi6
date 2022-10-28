function ex() {
  let num = parseInt(document.getElementById("num").value)
  let result = document.getElementById("exResult")
  let numString = "2 "
  loop01:
  for (let i = 3; i <= num; i++) {
    loop02:
    for (let j = 2; j < i; j++) {
      if (i % j === 0) continue loop01
    }
    numString += `${i} `
  }
  result.classList.add("alert")
  result.innerHTML = `${numString}`
}
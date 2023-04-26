import "./Header.css"

const template = () => {
  return `
    <div><img class="pareja" src="assets/pareja.png" alt="Rick y Morty foto"/></div>
    <div class="logoP"><img class="Logo" src="assets/logo.png" alt="Logo Rick y Morty"/></div>
     `
}

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template()
}

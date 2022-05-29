const mjson = fetch('https://utareyu.github.io/shirocom/main.json')
  .then(response => response.json())
  .then(data => console.log(data));
console.log(mjson);
// document.getElementById("hr").appendChild(mjson);
fetch('https://utareyu.github.io/shirocom/main.json')
  .then(response => response.json())
  .then(function(x){
		
		for(i=0;i<=9;i++){
			const ch = document.createElement('p');
			let d = x["data"][1]["cont"][i]["data"];g

			d=d.replace(/<br>/g,'\n');

			console.log(d);
			ch.textContent = d;
			// document.getElementById("hrp").appendChild(ch);
		}
	});
fetch('https://utareyu.github.io/shirocom/main.json')
  .then(response => response.json())
  .then(function(x){
		
		for(i=0;i<(Object.keys(x["data"][1]["cont"]).length);i++){
			const p = document.createElement('p');
			let d = x["data"][1]["cont"][i]["data"];
			let a = document.createElement('a');
			let aTagv = "";

			// --- a処理
			let aTag=d.match(/http.*/g,'\n');
			if(aTag!=null){
				aTag=aTag[0].replace(/".*/g,'');
				if(aTag.length>=40){
					 aTagv=aTag.substr(0,26)+"…"+aTag.substr(aTag.length-20);
				}
				a.setAttribute("href",aTag);
				a.textContent=aTagv;
				document.getElementById("hrp").appendChild(a);
				// console.log(aTag);
				continue;
			}

			// --- data出力
			d=d.replace(/<br>/g,'\n');
			p.textContent = d;
			document.getElementById("hrp").appendChild(p);

		}
			console.log(Object.keys(x["data"][1]["cont"]).length);
	});
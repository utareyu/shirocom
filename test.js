fetch('https://utareyu.github.io/shirocom/main.json')
  .then(response => response.json())
  .then(function(x){
		const dsel=1;
		for(i in Object.keys(x["data"][dsel]["cont"])){
			let d = x["data"][dsel]["cont"][i]["data"];
			const p = document.createElement('p');
			const a = document.createElement('a');
			const br = document.createElement('br');
			const div = document.createElement('div')
			const dest = document.getElementById("hrp");

			// --- a処理
			let aTagv = "";
			let aTag=d.match(/http.*/g,'\n');
			if(aTag!=null){
				aTag=aTag[0].replace(/".*/g,'');
				if(aTag.length>=40){
					 aTagv=aTag.substr(0,26)+"…"+aTag.substr(aTag.length-20);
				}
				a.setAttribute("href",aTag);
				a.textContent=aTagv;
				dest.appendChild(a);
				// console.log(aTag);
				continue;
			}

			// --- br処理
			if(d.match("<br>")){
				let work;
				d = d.split('<br>');
				console.log(d);
				for(i in d){
					p.textContent=i+": "+d[i];
					p.id= i;
					console.log(d[i]);
					console.log(p);
					div.appendChild(p);
				}
				div.id = "data";
				dest.appendChild(div);
			continue;
			}

			// --- data出力
			p.textContent = d;
			dest.appendChild(p);

		}
			console.log(Object.keys(x["data"][1]["cont"]).length);
	});
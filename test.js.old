// ■■■■■ ■■■■■  ■■■  ■■■■■
//   ■   ■     ■       ■
//   ■   ■■■■■  ■■■    ■
//   ■   ■         ■   ■
//   ■   ■■■■■  ■■■    ■
fetch('https://utareyu.github.io/shirocom/main.json')
  .then(response => response.json())
  .then(function(x){
		const dsel=1;
		for(i in Object.keys(x["data"][dsel]["cont"])){


			// ##### data処理
			let d = x["data"][dsel]["cont"][i]["data"];
			const dest = document.getElementById("hrp");
			const p = document.createElement('p');
			const y=x["data"][dsel]["cont"][i]["data"];

			console.log(typeof(y) +"'"+(y.charAt(1)=='a'?"lnk":"")+(y.substr(0,3)=="<img"?"img":"")+"' : "+ y);
			if(y.charAt(0)=='<'){
				dest.insertAdjacentHTML("beforeend",y);
				// # a処理
				if(y.charAt(1)=='a'){
					const a = dest.lastElementChild;
					let ahref=d.match(/http.*/g,'\n').join().replace(/".*/g,'');
					if(ahref.length>=40){
						ahref=ahref.substr(0,26)+"…"+ahref.substr(ahref.length-20);
					}
					a.textContent=ahref;
				}
			} else {
				p.innerHTML=y;
				dest.appendChild(p);
			}
			// #####
		}
			console.log(Object.keys(x["data"][1]["cont"]).length);
	});
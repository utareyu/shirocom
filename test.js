fetch('https://utareyu.github.io/shirocom/main.json')
  .then(response => response.json())
  .then(function(x){
		const dsel=1;
		for(i in Object.keys(x["data"][dsel]["cont"])){
			let d = x["data"][dsel]["cont"][i]["data"];
			const p = document.createElement('p');
			// const a = document.createElement('a');
			const img = document.createElement('img');
			const dest = document.getElementById("hrp");
			
			// p=innerHTML(x);
			y=x["data"][dsel]["cont"][i]["data"];
			console.log(typeof(y) +"'"+(y.charAt(0)=='<'?1:0)+(y.charAt(1)=='a'?1:0)+"' : "+ y);
			if(y.charAt(0)=='<'){
				dest.insertAdjacentHTML("beforeend",y);
				// --- a処理
				if(y.charAt(1)=='a'){
					const a = dest.lastElementChild;
					let ahref=d.match(/http.*/g,'\n').join().replace(/".*/g,'');
					console.log(ahref);
					if(ahref.length>=40){
						ahref=ahref.substr(0,26)+"…"+ahref.substr(ahref.length-20);
					}
					a.textContent=ahref;
				}
				// ---
			} else {
				p.innerHTML=y;
				dest.appendChild(p);
			}

			// ---a処理
			// let aTagv = "";
			// let ahref=d.match(/http.*/g,'\n');
			// if(ahref!=null){
			// 	ahref=ahref[0].replace(/".*/g,'');
			// 	if(ahref.length>=40){
			// 		 aTagv=ahref.substr(0,26)+"…"+ahref.substr(ahref.length-20);
			// 	}
			// 	a.setAttribute("href",ahref);
			// 	a.textContent=aTagv;
			// 	dest.appendChild(a);
			// 	continue;
			// }

			// p.innerHTML=d;
			// dest.appendChild(p);

		}
			console.log(Object.keys(x["data"][1]["cont"]).length);
	});
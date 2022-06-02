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
			let d = x["data"][dsel]["cont"][i]["data"];
			const p = document.createElement('p');
			// const a = document.createElement('a');
			const img = document.createElement('img');
			const dest = document.getElementById("hrp");
			
			// p=innerHTML(x);
			y=x["data"][dsel]["cont"][i]["data"];
			console.log(typeof(y) +"'"+(y.charAt(1)=='a'?1:0)+(y.substr(0,3)=="<img"?1:0)+"' : "+ y);
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

				// let im.y.match(/.*<img src=.*>/g,'\n');
				// console.log(im);
				// if(y.substr(0,3)=="<img"){
				// 	console.log("1");
				// }
			} else {
				p.innerHTML=y;
				dest.appendChild(p);
			}
		}
			console.log(Object.keys(x["data"][1]["cont"]).length);
	});
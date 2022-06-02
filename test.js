// ■■■■■ ■■■■■  ■■■  ■■■■■
//   ■   ■     ■       ■
//   ■   ■■■■■  ■■■    ■
//   ■   ■         ■   ■
//   ■   ■■■■■  ■■■    ■

fetch('https://utareyu.github.io/shirocom/main.json')
  .then(response => response.json())
  .then(function(x){
		const mem =[];
		for(i in Object.keys(x["member"])){
			mem[i] = x["member"][i]["name"];
		}
		console.log(mem);
		const dsel=1;

		for(u in Object.keys(x["data"][dsel])){
			// console.log("-"+u);
			for(y in Object.keys(x["data"][dsel]["cont"])){
				// console.log("--"+y);
			}
		}


		for(i in Object.keys(x["data"][dsel]["cont"])){
			// ##### data処理
			let d = x["data"][dsel]["cont"][i]["data"];
			const dest = document.getElementById("dest");
			const p = document.createElement('p');
			const m = x["data"][dsel]["cont"][i]["member"];

			// console.log(mem[m]);
			p.innerHTML=mem[m];
			p.className="member";
			dest.insertAdjacentElement("beforeend",p);

			// console.log(typeof(y) +"'"+(y.charAt(1)=='a'?"lnk":"")+(y.substr(0,3)=="<img"?"img":"")+"' : "+ y);
			if(d.charAt(0)=='<'){
				dest.insertAdjacentHTML("beforeend",d);
				// # a処理
				if(d.charAt(1)=='a'){
					const a = dest.lastElementChild;
					let ahref=d.match(/http.*/g,'\n').join().replace(/".*/g,'');
					if(ahref.length>=40){
						ahref=ahref.substr(0,26)+"…"+ahref.substr(ahref.length-20);
					}
					a.textContent=ahref;
				}
			} else {
				d=d.replace(/<.+script.*>/g,'-すくりぷと-');
				p.innerHTML=d;
				p.className="data";
				dest.insertAdjacentElement("beforeend",p);
			}
			// #####
		}
			console.log(Object.keys(x["data"][1]["cont"]).length);
	});
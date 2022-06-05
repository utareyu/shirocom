// ■■■■■ ■■■■■  ■■■  ■■■■■
//   ■   ■     ■       ■
//   ■   ■■■■■  ■■■    ■
//   ■   ■         ■   ■
//   ■   ■■■■■  ■■■    ■
function run(x){
	let dsel=x;
	fetch('https://utareyu.github.io/shirocom/test.json')
		.then(response => response.json())
		.then(function(x){
			document.getElementById("head").textContent="";
			document.getElementById("nav").textContent="";
			document.getElementById("main").textContent="";

			for(i in Object.keys(x["data"])){
				let d = x["data"][i];
				let dest = document.getElementById("head");
				const div = document.createElement('div');
				const p = document.createElement('p');
				let wk ="";
				let t=d["title"];
				let da=x["data"][dsel]["date"];
				
				dest.textContent=x["data"][dsel]["title"]+" ";

				wk=`<span style="font-size:50%;font-weight:400;">${da}</span>`;
				console.log(da);
				dest.insertAdjacentHTML("beforeend",wk);

				dest = document.getElementById("nav");

				if(t.length>10){
					t=t.substr(0,9)+"…";
				}
				wk=`<p onclick="run(${i})">${t}</p>`;
				console.log(t);
				dest.insertAdjacentHTML("beforeend",wk);
			}

			const mem =[[],[]];
			for(i in Object.keys(x["member"])) mem[0][i] = x["member"][i]["name"];
			for(i in Object.keys(x["member"])) mem[1][i] =`m${i}.png`;
			console.log(mem);

			console.log(`%c---- ${dsel} ----`,'color: yellow;font-size: 2em;');

			for(i in Object.keys(x["data"][dsel]["cont"])){
				
				d = x["data"][dsel]["cont"][i]["data"];
				dest = document.getElementById("main");
				const div = document.createElement('div');
				const p = document.createElement('p');
				const m = x["data"][dsel]["cont"][i]["member"];
				wk ="";

				// div .post
				dest.insertAdjacentElement("beforeend",div);
				dest=dest.lastElementChild;
				dest.id="p"+i;
				dest.className="container post";
				
				//div .ico
				dest=document.getElementById("p"+i);
				wk=`<div class="container ico"><img class="ico" src="ico\\${mem[1][m]}"></div>`;
				// console.log(mem[1][m]);
				dest.insertAdjacentHTML("beforeend",wk);

				//div .content
				wk=`<div class="container content"></div>`;
				// console.log(wk);
				dest.insertAdjacentHTML("beforeend",wk);

				//div .member
				dest=dest.lastElementChild;
				wk=`<div class="member">${mem[0][m]}</div>`;
				console.log(`-- ${mem[0][m]}`);
				dest.insertAdjacentHTML("beforeend",wk);

				//div .data
				dest=document.getElementById("p"+i).lastElementChild;
				wk=`<div class="data"></div>`;
				// console.log(wk);
				dest.insertAdjacentHTML("beforeend",wk);

				dest=document.getElementById("p"+i).getElementsByClassName("data")[0];
				// サニタイズ
				d=d.replace(/<.?script.*?>/g,'::');
				if(d.charAt(0)=='<'){
					dest.insertAdjacentHTML("beforeend",d);
					// a処理
					if(d.charAt(1)=='a'){
						const a = dest.lastElementChild;
						let wk=d.match(/http.*/g,'\n').join().replace(/".*/g,'');
						console.log(wk);
						if(wk.length>=40){
							wk=`${wk.substr(0,wk.indexOf("/", 8))}…${
								wk.substr(wk.lastIndexOf("/")).length>=25 ? wk.substr(wk.length-25) : wk.substr(wk.lastIndexOf("/"))
							}`;
						}
						a.textContent=wk;
					}
				} else {
					p.innerHTML=d;
					console.log(d);
					dest.insertAdjacentElement("beforeend",p);
				}
				
				//div .act
				if("act" in x["data"][dsel]["cont"][i]){
					dest=document.getElementById("p"+i).getElementsByClassName("content")[0];
					wk=`<div class="container act"></div>`;
					dest.insertAdjacentHTML("beforeend",wk);

					for(j in Object.keys(x["data"][dsel]["cont"][i]["act"])){
						
						const e =x["data"][dsel]["cont"][i]["act"][j]["emoji"];
						const c =x["data"][dsel]["cont"][i]["act"][j]["cnt"];

						//div .s
						dest=document.getElementById("p"+i).getElementsByClassName("act")[0];
						wk=`<div  id="a${i}_${j}"class="s"></div>`;
						console.log(e+" "+c);
						dest.insertAdjacentHTML("beforeend",wk);
						dest.lastElementChild.textContent=e+" "+c;

						//span .balloon
						dest=dest.lastElementChild;
						wk=`<span class="balloon"></span>`;
						// console.log(dest);
						dest.insertAdjacentHTML("beforeend",wk);
						dest.lastElementChild.textContent=c+"人が反応しました";

						//span "emoji"
						dest=dest.lastElementChild;
						wk=`<span style="font-size: 60px;display: block;"></span>`;
						// console.log(dest);
						dest.insertAdjacentHTML("afterbegin",wk);
						dest.lastElementChild.textContent=e;
					}
				}
			}
			console.log(Object.keys(x["data"][dsel]["cont"]).length);
		})	
};

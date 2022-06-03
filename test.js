// ■■■■■ ■■■■■  ■■■  ■■■■■
//   ■   ■     ■       ■
//   ■   ■■■■■  ■■■    ■
//   ■   ■         ■   ■
//   ■   ■■■■■  ■■■    ■
const dsel=1;

fetch('https://utareyu.github.io/shirocom/main.json')
  .then(response => response.json())
  .then(function(x){
		document.getElementById("main").textContent="";



		for(i in Object.keys(x["data"])){
			let d = x["data"][i];
			let dest = document.getElementById("nav");
			const div = document.createElement('div');
			const p = document.createElement('p');
			let wk ="";
			let t=d["title"];
			let da=d["date"];

			if(t.length>10){
				t=t.substr(0,9)+"…";
			}
			p.innerHTML=t;
			p.onclick="dsel=\""+i+"\""
			console.log(dest);
			dest.insertAdjacentElement("beforeend",p);


			console.log(t);
		}

		const mem =[[],[]];
		for(i in Object.keys(x["member"]))mem[0][i] = x["member"][i]["name"];
		for(i in Object.keys(x["member"]))mem[1][i] ="m"+ i+".ico";
		console.log(mem);

		for(i in Object.keys(x["data"][dsel]["cont"])){
			console.log(i);
			// ##### data処理
			let d = x["data"][dsel]["cont"][i]["data"];
			let dest = document.getElementById("main");
			const div = document.createElement('div');
			const p = document.createElement('p');
			const m = x["data"][dsel]["cont"][i]["member"];
			let wk ="";

			const post="";

			// div .post
			dest.insertAdjacentElement("beforeend",div);
			dest=dest.lastElementChild;
			dest.id="p"+i;
			dest.className="container post";
			
			//div .ico
			dest=document.getElementById("p"+i);
			
			wk="<div class=\"container ico\"><img class=\"ico\" src=\"Screenshot_1.png\"></div>";
			console.log(dest);
			dest.insertAdjacentHTML("beforeend",wk);

			// <div class="container ico"><img class="ico" src="Screenshot_1.png"></div>

			//div .content
			wk="<div class=\"container content\"></div>";
			console.log(dest);
			dest.insertAdjacentHTML("beforeend",wk);

			//div .member
			dest=dest.lastElementChild;
			wk="<div class=\"member\">"+mem[0][m]+"</div>";
			console.log(dest);
			dest.insertAdjacentHTML("beforeend",wk);

			//div .data
			dest=document.getElementById("p"+i).lastElementChild;
			wk="<div class=\"data\"></div>";
			console.log(dest);
			dest.insertAdjacentHTML("beforeend",wk);

			dest=document.getElementById("p"+i).getElementsByClassName("data")[0];
			d=d.replace(/<.?script.*?>/g,'!すくりぷと!');
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
				p.innerHTML=d;
				console.log(dest);
				dest.insertAdjacentElement("beforeend",p);
			}
			// act
			if("act" in x["data"][dsel]["cont"][i]){

				//div.act
				dest=document.getElementById("p"+i).getElementsByClassName("content")[0];
				wk="<div class=\"container act\"></div>";
				dest.insertAdjacentHTML("beforeend",wk);

				for(j in Object.keys(x["data"][dsel]["cont"][i]["act"])){
					
					const e =x["data"][dsel]["cont"][i]["act"][j]["emoji"];
					const c =x["data"][dsel]["cont"][i]["act"][j]["cnt"];

					//div .s
					dest=document.getElementById("p"+i).getElementsByClassName("act")[0];
					wk="<div  id=\"a"+i+j+"\"class=\"s\"></div>";
					console.log(dest);
					dest.insertAdjacentHTML("beforeend",wk);
					dest.lastElementChild.textContent=e+" "+c;

					//span .balloon
					dest=dest.lastElementChild;
					wk="<span class=\"balloon\"></span>";
					console.log(dest);
					dest.insertAdjacentHTML("beforeend",wk);
					dest.lastElementChild.textContent=c+"人が反応しました";

					//span "emoji"
					dest=dest.lastElementChild;
					wk="<span style=\"font-size: 60px;display: block;\"></span>";
					console.log(dest);
					dest.insertAdjacentHTML("afterbegin",wk);
					dest.lastElementChild.textContent=e;
				}
			}
		}
			console.log(Object.keys(x["data"][1]["cont"]).length);
	})
	;
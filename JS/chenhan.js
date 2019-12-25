/*
* @Author: Amadues
* @Date:   2019-12-23 15:50:37
* @Last Modified by:   Amadues
* @Last Modified time: 2019-12-23 16:14:58
*/
window.onload = function(){
			
			var body = document.getElementsByTagName("body")[0];

			document.onclick = function(e){
				var num = Math.floor(Math.random() * 5);
				var elem = document.createElement("elem");
				var color = Math.floor(Math.random() * 256) + "," + Math.floor(Math.random()* 256) + "," + Math.floor(Math.random() * 256);
				elem.style.color = '#E94F06';
				elem.style.position = 'absolute';
				elem.style.select =  "none";
				var mouse_X = e.clientX;
				var mouse_Y = e.clientY;
				elem.style.left = mouse_X - 20 + "px";
				elem.style.top = mouse_Y + "px";
				switch(num){
					case 0:
						elem.innerText = "恭喜发财";
						break;
					case 1:
						elem.innerText = "钱包鼓点";
						break;
					case 2:
						elem.innerText = "肥肉少点";
						break;
					case 3:
						elem.innerText = "🎁";
						break;
					case 4:
						elem.innerText = "❤";
						break;
					default:
						elem.innerText = "元旦快乐！";
						break;
				}
				elem.style.fontSize = Math.random() * 10 + 8 + 'px';
				clearInterval(append);
				var increase = 0;
				var append;
				setTimeout(function(){
					var append = setInterval(function(){
                          if(increase++ == 150){
                          	clearInterval(append);
                          	body.removeChild(elem);
                          }
                          elem.style.top = mouse_Y - 20 - increase + 'px';
                          elem.style.opacity = (150 - increase) / 120;
					},8);
				},70);
				body.appendChild(elem);
			}
		}
// function check(){
// 	var user_name=form.user.value;
// 	var user_pwd=form.pwd.value;
// 	console.log(user_name);
// 	console.log(user_pwd);
	
// }
// var user=document.getElementById('user');
// var pwd=document.getElementById('pwd');
// document.querySelector('.user').onblur=function(){
// 	document.querySelector('.note').innerHTML='验证中......';
// 	//1.创建对象
// 	        var xhr=new XMLHttpRequest();
// 	        //2.设置请求行(get请求数据写在url后面)
// 	        xhr.open('post','../api/check_username.php');
// 	        //3.设置请求头(get请求可以省略,post不发送数据也可以省略)
// 	        xhr.setRequestHeader('content-type',"application/x-www-form-urlencoded");
// 	        //3.5注册回调函数
// 	        xhr.onload=function () {
// 	            if(xhr.status==200 && xhr.readyState==4)
// 	            {
// 	                console.log(xhr.responseText);
// 	                var data=JSON.parse(xhr.responseText);
// 	                console.log(data);
// 	                if(data.flag==3) {
// 	                    document.querySelector('.note').innerHTML = data.msg;
// 	                }
// 	            }
// 	        };
// 	        //4.请求主体发送(get请求为空，或者写null，post请求数据写在这里，如果没有数据，直接为空或者写null)
// 	        //post请求发送数据 写在send中
// 	        //key=value&key2=value2
// 	        xhr.send("username="+document.getElementById('name').value);
// }
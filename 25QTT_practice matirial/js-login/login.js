	<script>
			window.onload=function(){
				document.querySelector('.btn').onclick=function(){
					let account = document.querySelector('.account').value;
					let password = document.querySelector('.password').value;
					if(account=='' || password==''){
						alert('文本框不能为空！');
						return;
					}
					if(account!='user' || password!='1234'){
						alert('账号密码输入有误！');
						return;
					}
					alert('登录成功！');
					document.querySelector('.account').value=''
					document.querySelector('.password').value=''
				}
			}
		</script>
async function login(){
const res = await fetch(API_URL,{
method:"POST",
body: JSON.stringify({
action:"login",
data:{email:email.value,password:password.value}
})});
const r = await res.json();
if(r.status==="success"){
localStorage.setItem("user", JSON.stringify(r.user));
location.href="dashboard.html";
}else alert("Login gagal");
}
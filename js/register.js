async function daftar(){
const res = await fetch(API_URL,{
method:"POST",
body: JSON.stringify({
action:"register",
data:{
nama:nama.value,
email:email.value,
password:password.value,
nimnip:nimnip.value,
kategori:kategori.value
}})});
alert("Berhasil daftar");
}
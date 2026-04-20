function loginAdmin(){
  if(email.value==="admin" && password.value==="admin123"){
    localStorage.setItem("admin","yes");
    location.href="admin.html";
  }else{
    alert("Gagal");
  }
}
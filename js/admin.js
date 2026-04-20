function loginAdmin(){
  if(email.value==="admin" && password.value==="admin123"){
    localStorage.setItem("admin","yes");
    location.href="admin.html";
  }
  else{alert("Gagal");
  }
function logout(){
  if(confirm("Yakin mau logout?")){
    localStorage.removeItem("admin");
    window.location.href = "admin-login.html";
  }
}
  if(localStorage.getItem("admin")!=="yes"){
  location.href="admin-login.html";
}

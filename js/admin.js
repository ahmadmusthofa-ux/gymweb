function loginAdmin(){

  const user = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const loader = document.getElementById("loader");

  loader.style.display = "block";

  setTimeout(()=>{

    if(user==="admin" && pass==="admin123"){
      localStorage.setItem("admin","yes");

      loader.innerHTML = "✅ Berhasil...";
      setTimeout(()=>{
        window.location.href="admin.html";
      },800);

    }else{
      loader.style.display = "none";
      alert("Username / Password salah");
    }

  },1000);
}

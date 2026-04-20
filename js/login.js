async function login(){
  try{
    console.log("Klik login...");

    const res = await fetch(API_URL,{
      method:"POST",
      headers:{
        "Content-Type":"text/plain;charset=utf-8"
      },
      body: JSON.stringify({
        action:"login",
        data:{
          email:document.getElementById("email").value,
          password:document.getElementById("password").value
        }
      })
    });

    console.log("Response:", res);

    const text = await res.text();
    console.log("RAW:", text);

    const r = JSON.parse(text);
    console.log("JSON:", r);

    if(r.status==="success"){
      localStorage.setItem("user", JSON.stringify(r.user));
      alert("Login berhasil!");
      window.location.href="dashboard.html";
    }else{
      alert("Email / Password salah");
    }

  }catch(err){
    console.error("ERROR:", err);
    alert("Gagal koneksi ke server");
  }
}

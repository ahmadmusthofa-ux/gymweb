async function login(){
  try{
    console.log("Login diklik");

    const res = await fetch(API_URL,{
      method:"POST",
      body: JSON.stringify({
        action:"login",
        data:{
          email:email.value,
          password:password.value
        }
      })
    });

    console.log("Response:", res);

    const r = await res.json();

    console.log("Data:", r);

    if(r.status==="success"){
      localStorage.setItem("user", JSON.stringify(r.user));
      location.href="dashboard.html";
    }else{
      alert("Login gagal");
    }

  }catch(err){
    console.error("ERROR:", err);
    alert("Error koneksi ke server");
  }
}

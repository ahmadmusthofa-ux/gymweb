let user = JSON.parse(localStorage.getItem("user"));

if(!user){
  location.href="login.html";
}

nama.innerText = user.nama;
status.innerText = user.status;
expired.innerText = new Date(user.expired).toLocaleDateString();

QRCode.toCanvas(document.getElementById("qr"), user.id);

// sembunyikan pembayaran jika aktif
if(user.status==="aktif"){
  paymentBox.style.display="none";
}

// preview gambar
file.addEventListener("change", function(e){
  const reader = new FileReader();
  reader.onload = function(){
    preview.src = reader.result;
    preview.style.display="block";
  }
  reader.readAsDataURL(e.target.files[0]);
});

// upload
function upload(){
  const f = file.files[0];

  const reader = new FileReader();

  reader.onload = async function(){
    const base64 = reader.result.split(",")[1];

    const res = await fetch(API_URL,{
      method:"POST",
      body: JSON.stringify({
        action:"perpanjang",
        data:{
          id:user.id,
          file:base64,
          type:f.type,
          name:f.name
        }
      })
    });

    alert("Berhasil!");
    location.reload();
  };

  reader.readAsDataURL(f);
}

// logout
function logout(){
  localStorage.clear();
  location.href="login.html";
}
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
let scanner;

function startScan(){

  document.getElementById("hasil").innerHTML = "🔄 Menyalakan kamera...";

  scanner = new Html5Qrcode("reader");

  scanner.start(
    { facingMode: "environment" },
    {
      fps: 10,
      qrbox: 250
    },
    async (decodedText) => {

      document.getElementById("hasil").innerHTML = "⏳ Proses...";

      // STOP SCAN BIAR TIDAK DOUBLE
      scanner.stop();

      // KIRIM KE SERVER
      const res = await fetch(API_URL,{
        method:"POST",
        headers:{"Content-Type":"text/plain"},
        body: JSON.stringify({
          action:"presensi",
          data:{qr:decodedText}
        })
      });

      const r = await res.json();

      if(r.status==="success"let beep = new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3");
beep.play();{
        document.getElementById("hasil").innerHTML = "✅ Presensi berhasil";
      }
      else if(r.status==="expired"){
        document.getElementById("hasil").innerHTML = "❌ Member expired";
      }
      else{
        document.getElementById("hasil").innerHTML = "❌ QR tidak valid";
      }

    },
    (error) => {}
  );
}

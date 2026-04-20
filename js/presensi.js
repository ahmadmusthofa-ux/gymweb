function startScan(){
  const script = document.createElement("script");
  script.src = "https://unpkg.com/html5-qrcode";

  script.onload = () => {
    new Html5QrcodeScanner("reader",{fps:10,qrbox:250})
    .render(onScanSuccess);
  };

  document.body.appendChild(script);
}

function onScanSuccess(qr){
  fetch(API_URL,{
    method:"POST",
    body: JSON.stringify({
      action:"presensi",
      data:{qr:qr}
    })
  })
  .then(res=>res.json())
  .then(r=>{
    alert(r.status);
  });
}
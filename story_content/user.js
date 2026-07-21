window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const picture9 = object('6mZs5yUndI3');

var urlWhatsApp = "https://wa.me/62895326854567?text=Halo%20Bapak%20Abyan.";

window.open(urlWhatsApp, '_blank');
}

window.Script2 = function()
{
  const picture10 = object('65fGp5g7vFe');

var usernameIG = "abyant__"; 

var urlInstagram = "https://instagram.com/" + usernameIG;

window.open(urlInstagram, '_blank');
}

window.Script3 = function()
{
  const picture11 = object('5briaTYITi0');

var urlEmail = "mailto:abyan.tarju@gmail.com?subject=Pertanyaan%20Saya&body=Halo%20Pak%20Abyan,%20saya%20mau%20tanya.";

window.open(urlEmail, '_blank');
}

window.Script4 = function()
{
  const upload = object('5jAcFgxplBb');
var APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyOjfA0RmiLDN0LaM77k7ux_NCIB0b0nkdkBullHwA4ox9sN_fORXl_8JDDPKiMNvBe7w/exec";

var player = GetPlayer();
var namauser = player.GetVar("namauser") || "Anonymous";
var input = document.createElement("input");
input.type = "file";
input.accept = ".pdf,.doc,.docx,.jpg,.jpeg,.png";

input.onchange = function(e) {
  var file = e.target.files[0];
  if (!file) return;

  if (file.size > 5 * 1024 * 1024) {
    alert("File terlalu besar! Maksimal 5MB.");
    return;
  }

  player.SetVar("uploadstatus", "Sedang mengupload...");
  var reader = new FileReader();

  reader.onload = function(evt) {
    var base64 = evt.target.result.split(",")[1];
    var payload = JSON.stringify({
      fileName: file.name,
      mimeType: file.type,
      file: base64,
      userName: namauser
    });

    fetch(APPS_SCRIPT_URL, {
      method: "POST",
      body: payload
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
      if (data.status === "success") {
        player.SetVar("uploadstatus", "Berhasil");
        alert("File " + file.name + " berhasil diupload!");
      } else {
        player.SetVar("uploadstatus", "Gagal");
        alert("Upload gagal: " + data.message);
      }
    })
    .catch(function(err) {
      player.SetVar("uploadstatus", "Gagal");
      alert("Koneksi bermasalah: " + err.message);
    });
  };

  reader.onerror = function() {
    alert("Gagal membaca file.");
  };

  reader.readAsDataURL(file);
};

input.click();
}

window.Script5 = function()
{
  var player = GetPlayer();

// 1. Mengambil data (Nama di dalam tanda kutip sudah disamakan TANPA SPASI)
var js_identitas       = player.GetVar("identitas");
var js_pengamatan      = player.GetVar("pengamatan");
var js_rumusanmasalah  = player.GetVar("rumusanmasalah");
var js_hipotesis       = player.GetVar("hipotesis");
var js_variabelbebas   = player.GetVar("variabelbebas");
var js_variabelterikat = player.GetVar("variabelterikat");
var js_prosedur        = player.GetVar("prosedur");
var js_tabel1          = player.GetVar("tabel1");
var js_tabel2          = player.GetVar("tabel2");
var js_analisis        = player.GetVar("analisis");
var js_kesimpulan      = player.GetVar("kesimpulan");

// 2. URL Google Form 
var formURL = "https://docs.google.com/forms/d/e/1FAIpQLSfvnjNPEq8KTtwmdVA0Y2Gq_DUz4ObOlCtc0nr3yLJNJ0jslw/formResponse";

// 3. Memasangkan data ke Entry ID Google Form
var formData = new FormData();
formData.append("entry.539037497", js_identitas);
formData.append("entry.574204255", js_pengamatan);
formData.append("entry.919036541", js_rumusanmasalah);
formData.append("entry.127647008", js_hipotesis);
formData.append("entry.1541112035", js_variabelbebas);
formData.append("entry.320973567", js_variabelterikat);
formData.append("entry.1406836902", js_prosedur);
formData.append("entry.418616166", js_tabel1);
formData.append("entry.792099971", js_tabel2);
formData.append("entry.523535633", js_analisis);
formData.append("entry.236039709", js_kesimpulan);

// 4. Proses pengiriman data
fetch(formURL, {
  method: "POST",
  mode: "no-cors",
  body: formData
}).then(function() {
  console.log("Data laporan praktikum hasil revisi berhasil dikirim.");
}).catch(function(error) {
  console.error("Gagal mengirim data: ", error);
});
}

window.Script6 = function()
{
  const upload = object('6cbhkAg9HGS');
var APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyOjfA0RmiLDN0LaM77k7ux_NCIB0b0nkdkBullHwA4ox9sN_fORXl_8JDDPKiMNvBe7w/exec";

var player = GetPlayer();
var namauser = player.GetVar("namauser") || "Anonymous";
var input = document.createElement("input");
input.type = "file";
input.accept = ".pdf,.doc,.docx,.jpg,.jpeg,.png";

input.onchange = function(e) {
  var file = e.target.files[0];
  if (!file) return;

  if (file.size > 5 * 1024 * 1024) {
    alert("File terlalu besar! Maksimal 5MB.");
    return;
  }

  player.SetVar("uploadstatus", "Sedang mengupload...");
  var reader = new FileReader();

  reader.onload = function(evt) {
    var base64 = evt.target.result.split(",")[1];
    var payload = JSON.stringify({
      fileName: file.name,
      mimeType: file.type,
      file: base64,
      userName: namauser
    });

    fetch(APPS_SCRIPT_URL, {
      method: "POST",
      body: payload
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
      if (data.status === "success") {
        player.SetVar("uploadstatus", "Berhasil");
        alert("File " + file.name + " berhasil diupload!");
      } else {
        player.SetVar("uploadstatus", "Gagal");
        alert("Upload gagal: " + data.message);
      }
    })
    .catch(function(err) {
      player.SetVar("uploadstatus", "Gagal");
      alert("Koneksi bermasalah: " + err.message);
    });
  };

  reader.onerror = function() {
    alert("Gagal membaca file.");
  };

  reader.readAsDataURL(file);
};

input.click();
}

window.Script7 = function()
{
  const upload3 = object('5kf6EZciMyR');
//code upload file

var APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyOjfA0RmiLDN0LaM77k7ux_NCIB0b0nkdkBullHwA4ox9sN_fORXl_8JDDPKiMNvBe7w/exec";

var player = GetPlayer();
var namauser = player.GetVar("namauser2") || "Anonymous";
var input = document.createElement("input");
input.type = "file";
input.accept = ".pdf,.doc,.docx,.jpg,.jpeg,.png";

input.onchange = function(e) {
  var file = e.target.files[0];
  if (!file) return;

  if (file.size > 5 * 1024 * 1024) {
    alert("File terlalu besar! Maksimal 5MB.");
    return;
  }

  player.SetVar("uploadstatus2", "Sedang mengupload...");
  var reader = new FileReader();

  reader.onload = function(evt) {
    var base64 = evt.target.result.split(",")[1];
    var payload = JSON.stringify({
      fileName: file.name,
      mimeType: file.type,
      file: base64,
      userName: namauser
    });

    fetch(APPS_SCRIPT_URL, {
      method: "POST",
      body: payload
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
      if (data.status === "success") {
        player.SetVar("uploadstatus2", "Berhasil");
        alert("File " + file.name + " berhasil diupload!");
      } else {
        player.SetVar("uploadstatus2", "Gagal");
        alert("Upload gagal: " + data.message);
      }
    })
    .catch(function(err) {
      player.SetVar("uploadstatus2", "Gagal");
      alert("Koneksi bermasalah: " + err.message);
    });
  };

  reader.onerror = function() {
    alert("Gagal membaca file.");
  };

  reader.readAsDataURL(file);
};

input.click();
}

window.Script8 = function()
{
  var player = GetPlayer();

// 1. Mengambil data (Nama di dalam tanda kutip sudah disamakan TANPA SPASI)
var js_identitas        = player.GetVar("identitas");
var js_pengamatan2      = player.GetVar("pengamatan2");
var js_rumusanmasalah2  = player.GetVar("rumusanmasalah2");
var js_hipotesis2       = player.GetVar("hipotesis2");
var js_variabelbebas2   = player.GetVar("variabelbebas2");
var js_variabelterikat2 = player.GetVar("variabelterikat2");
var js_prosedur2        = player.GetVar("prosedur2");
var js_analisis2        = player.GetVar("analisis2");
var js_kesimpulan2      = player.GetVar("kesimpulan2");

// 2. URL Google Form 
var formURL = "https://docs.google.com/forms/d/e/1FAIpQLSe9Nn5xAFwgn_QfFpHuMwQi8EXjVFlassBLlTkhzfqlr1K2bw/formResponse?";

// 3. Memasangkan data ke Entry ID Google Form
var formData = new FormData();
formData.append("entry.539037497", js_identitas);
formData.append("entry.574204255", js_pengamatan2);
formData.append("entry.919036541", js_rumusanmasalah2);
formData.append("entry.127647008", js_hipotesis2);
formData.append("entry.1541112035", js_variabelbebas2);
formData.append("entry.320973567", js_variabelterikat2);
formData.append("entry.1406836902", js_prosedur2);
formData.append("entry.523535633", js_analisis2);
formData.append("entry.236039709", js_kesimpulan2);

// 4. Proses pengiriman data
fetch(formURL, {
  method: "POST",
  mode: "no-cors",
  body: formData
}).then(function() {
  console.log("Data laporan praktikum hasil revisi berhasil dikirim.");
}).catch(function(error) {
  console.error("Gagal mengirim data: ", error);
});
}

window.Script9 = function()
{
  const upload3 = object('6a0qGMlqfew');
//code upload file

var APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyOjfA0RmiLDN0LaM77k7ux_NCIB0b0nkdkBullHwA4ox9sN_fORXl_8JDDPKiMNvBe7w/exec";

var player = GetPlayer();
var namauser = player.GetVar("namauser2") || "Anonymous";
var input = document.createElement("input");
input.type = "file";
input.accept = ".pdf,.doc,.docx,.jpg,.jpeg,.png";

input.onchange = function(e) {
  var file = e.target.files[0];
  if (!file) return;

  if (file.size > 5 * 1024 * 1024) {
    alert("File terlalu besar! Maksimal 5MB.");
    return;
  }

  player.SetVar("uploadstatus2", "Sedang mengupload...");
  var reader = new FileReader();

  reader.onload = function(evt) {
    var base64 = evt.target.result.split(",")[1];
    var payload = JSON.stringify({
      fileName: file.name,
      mimeType: file.type,
      file: base64,
      userName: namauser
    });

    fetch(APPS_SCRIPT_URL, {
      method: "POST",
      body: payload
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
      if (data.status === "success") {
        player.SetVar("uploadstatus2", "Berhasil");
        alert("File " + file.name + " berhasil diupload!");
      } else {
        player.SetVar("uploadstatus2", "Gagal");
        alert("Upload gagal: " + data.message);
      }
    })
    .catch(function(err) {
      player.SetVar("uploadstatus2", "Gagal");
      alert("Koneksi bermasalah: " + err.message);
    });
  };

  reader.onerror = function() {
    alert("Gagal membaca file.");
  };

  reader.readAsDataURL(file);
};

input.click();
}

window.Script10 = function()
{
  const upload1 = object('5WqqIyZ9Cot');

var APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyOjfA0RmiLDN0LaM77k7ux_NCIB0b0nkdkBullHwA4ox9sN_fORXl_8JDDPKiMNvBe7w/exec";

var player = GetPlayer();
var namauser = player.GetVar("namauser3") || "Anonymous";
var input = document.createElement("input");
input.type = "file";
input.accept = ".pdf,.doc,.docx,.jpg,.jpeg,.png";

input.onchange = function(e) {
  var file = e.target.files[0];
  if (!file) return;

  if (file.size > 5 * 1024 * 1024) {
    alert("File terlalu besar! Maksimal 5MB.");
    return;
  }

  player.SetVar("uploadstatus3", "Sedang mengupload...");
  var reader = new FileReader();

  reader.onload = function(evt) {
    var base64 = evt.target.result.split(",")[1];
    var payload = JSON.stringify({
      fileName: file.name,
      mimeType: file.type,
      file: base64,
      userName: namauser
    });

    fetch(APPS_SCRIPT_URL, {
      method: "POST",
      body: payload
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
      if (data.status === "success") {
        player.SetVar("uploadstatus3", "Berhasil");
        alert("File " + file.name + " berhasil diupload!");
      } else {
        player.SetVar("uploadstatus3", "Gagal");
        alert("Upload gagal: " + data.message);
      }
    })
    .catch(function(err) {
      player.SetVar("uploadstatus3", "Gagal");
      alert("Koneksi bermasalah: " + err.message);
    });
  };

  reader.onerror = function() {
    alert("Gagal membaca file.");
  };

  reader.readAsDataURL(file);
};

input.click();
}

window.Script11 = function()
{
  const upload1 = object('5i7JYeZjnne');

var APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyOjfA0RmiLDN0LaM77k7ux_NCIB0b0nkdkBullHwA4ox9sN_fORXl_8JDDPKiMNvBe7w/exec";

var player = GetPlayer();
var namauser = player.GetVar("namauser3") || "Anonymous";
var input = document.createElement("input");
input.type = "file";
input.accept = ".pdf,.doc,.docx,.jpg,.jpeg,.png";

input.onchange = function(e) {
  var file = e.target.files[0];
  if (!file) return;

  if (file.size > 5 * 1024 * 1024) {
    alert("File terlalu besar! Maksimal 5MB.");
    return;
  }

  player.SetVar("uploadstatus3", "Sedang mengupload...");
  var reader = new FileReader();

  reader.onload = function(evt) {
    var base64 = evt.target.result.split(",")[1];
    var payload = JSON.stringify({
      fileName: file.name,
      mimeType: file.type,
      file: base64,
      userName: namauser
    });

    fetch(APPS_SCRIPT_URL, {
      method: "POST",
      body: payload
    })
    .then(function(res) { return res.json(); })
    .then(function(data) {
      if (data.status === "success") {
        player.SetVar("uploadstatus3", "Berhasil");
        alert("File " + file.name + " berhasil diupload!");
      } else {
        player.SetVar("uploadstatus3", "Gagal");
        alert("Upload gagal: " + data.message);
      }
    })
    .catch(function(err) {
      player.SetVar("uploadstatus3", "Gagal");
      alert("Koneksi bermasalah: " + err.message);
    });
  };

  reader.onerror = function() {
    alert("Gagal membaca file.");
  };

  reader.readAsDataURL(file);
};

input.click();
}

window.Script12 = function()
{
  var player = GetPlayer();

// 1. Mengambil data (Nama di dalam tanda kutip sudah disamakan TANPA SPASI)
var js_identitas        = player.GetVar("identitas");
var js_pengamatan3      = player.GetVar("pengamatan3");
var js_rumusanmasalah3  = player.GetVar("rumusanmasalah3");
var js_hipotesis3       = player.GetVar("hipotesis3");
var js_variabelbebas3   = player.GetVar("variabelbebas3");
var js_variabelterikat3 = player.GetVar("variabelterikat3");
var js_prosedur3        = player.GetVar("prosedur3");
var js_analisis3        = player.GetVar("analisis3");
var js_kesimpulan3      = player.GetVar("kesimpulan3");

// 2. URL Google Form 
var formURL = "https://docs.google.com/forms/d/e/1FAIpQLSd9wxmRGLxEI1hZzBhARDeTOAYAJyXPS5r-Yypl7wey7AXxXg/formResponse";

// 3. Memasangkan data ke Entry ID Google Form
var formData = new FormData();
formData.append("entry.539037497", js_identitas);
formData.append("entry.574204255", js_pengamatan3);
formData.append("entry.919036541", js_rumusanmasalah3);
formData.append("entry.127647008", js_hipotesis3);
formData.append("entry.1541112035", js_variabelbebas3);
formData.append("entry.320973567", js_variabelterikat3);
formData.append("entry.1406836902", js_prosedur3);
formData.append("entry.523535633", js_analisis3);
formData.append("entry.236039709", js_kesimpulan3);

// 4. Proses pengiriman data
fetch(formURL, {
  method: "POST",
  mode: "no-cors",
  body: formData
}).then(function() {
  console.log("Data laporan praktikum hasil revisi berhasil dikirim.");
}).catch(function(error) {
  console.error("Gagal mengirim data: ", error);
});
}

};

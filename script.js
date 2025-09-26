// Tunggu sampai halaman siap
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const tableBody = document.querySelector("table tbody");

  // Event saat submit form
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // cegah refresh halaman

    // Ambil nilai dari input
    const nama = document.getElementById("nama").value;
    const tgl = document.getElementById("tgl").value;
    const gender = document.querySelector("input[name='gender']:checked");
    const pesan = document.getElementById("pesan").value;

    if (!nama || !tgl || !gender || !pesan) {
      alert("Semua field harus diisi!");
      return;
    }

    // Buat baris baru
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${nama}</td>
      <td>${tgl}</td>
      <td>${gender.value}</td>
      <td>${pesan}</td>
      <td><a href="#">Klik Disini</a></td>
      <td><span class="delete-btn">🗑</span></td>
    `;

    // Tambah baris ke tabel
    tableBody.appendChild(row);

    // Reset form
    form.reset();

    // Tambah event hapus untuk tombol delete
    row.querySelector(".delete-btn").addEventListener("click", function () {
      row.remove();
    });
  });

  // Tambah event hapus ke tombol delete yang sudah ada
  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      btn.closest("tr").remove();
    });
  });
});

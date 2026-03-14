// SISTEM MANAJEMEN TRANSPORTASI
// Menggunakan konsep OOP JavaScript
// Nama: Muhammad Fikri Fahrezi
// Kampus: UBHARA

// Pelanggan
class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = null;
  }

  // mencatat penyewaan kendaraan
  sewaKendaraan(kendaraan) {
    this.kendaraanDisewa = kendaraan;
  }
}

class SistemTransportasi {
  constructor() {
    this.daftarPelanggan = [];
  }

  // menambahkan pelanggan ke sistem
  tambahPelanggan(pelanggan) {
    this.daftarPelanggan.push(pelanggan);
  }

  // menampilkan daftar pelanggan yang menyewa kendaraan
  tampilkanPelanggan() {
    console.log("----- Daftar Pelanggan Yang Menyewa Kendaraan -----");

    for (let i = 0; i < this.daftarPelanggan.length; i++) {
      let p = this.daftarPelanggan[i];

      if (p.kendaraanDisewa !== null) {
        console.log(
          "Nama: " + p.nama +
          " | Telepon: " + p.nomorTelepon +
          " | Kendaraan: " + p.kendaraanDisewa
        );
      }
    }

    console.log("--------------------------------------------");
  }
}

// membuat sistem transportasi
let sistem = new SistemTransportasi();

let pelanggan1 = new Pelanggan("Muhammad", "6234");
let pelanggan2 = new Pelanggan("Fikri", "6543");
let pelanggan3 = new Pelanggan("Hafids", "08765");
let pelanggan4 = new Pelanggan("Rizky", "08999");

// menyewa kendaraan
pelanggan1.sewaKendaraan("Mobil Toyota Avanza");
pelanggan2.sewaKendaraan("Motor Honda Vario");
pelanggan4.sewaKendaraan("Mobil Daihatsu Xenia");

// menambahkan pelanggan ke sistem
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);
sistem.tambahPelanggan(pelanggan3);
sistem.tambahPelanggan(pelanggan4);

// menampilkan daftar pelanggan yang menyewa kendaraan
sistem.tampilkanPelanggan();
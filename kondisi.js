let saldoAwal = prompt("Masukan saldo awal");
let saldoTambahan = prompt("Masukan saldo tambahan");

saldoAwal = Number(saldoAwal);
saldoTambahan = Number(saldoTambahan);

const saldoAkhir = saldoAwal + saldoTambahan;

alert (`Saldo akhir anda adalah ${saldoAkhir}`);
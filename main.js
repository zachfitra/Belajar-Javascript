let nama = prompt ("Masukan nama anda")
let usia = prompt ("Masukan usia anda")
let tinggiBadan = prompt ("Masukan Tinggi anda")
let beratBadan
let pacar = prompt  ("Apakah kamu sudah memiliki pacar")



beratBadan = 92
beratBadan = prompt ("Masukan berat anda")

if(tinggiBadan <= 100){
    tinggiBadan = "anda pendek"
}else {
    tinggiBadan = "anda tinggi"
}

// switch(pacar){
//     case 1:
//         pacar = "punya 1 pacar"
//     break
//     case 2 :
//         pacar = "punya 2 pacar"
//     break
//     default
//         pacar = "Belum punya pacar"
// }

if (pacar == null){
    pacar = 'sudah punya pacar'
}else {
    pacar =  'belum punya pacar'

}

alert (`halo nama saya ${nama},usia saya ${usia}, ${tinggiBadan},berat saya adalah ${beratBadan},dan pacar saya ${pacar}`)
console.log (`halo nama saya ${nama},usia saya ${usia}, ${tinggiBadan},berat saya adalah ${beratBadan},dan pacar saya ${pacar}`)
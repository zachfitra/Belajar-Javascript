document.title = ' belajar javascript'

// const body = document.body
//  body.append ('Hello world')
  


//  const h1 = document.createElement('h1') //ini adalah variable yang berisi textContent h1
//  h1.textContent =  '<marquee> ini adalah h1 </marquee>'

// const namaSaya = document.createElement('h2') 
// namaSaya.innerHTML = '<marquee> Ahmad Zaki Fitra</marquee>'

// const namaKamu = document.createElement('P')
// namaKamu.innerText = '<marquee>Exela</marquee>'


// body.append(h1) // ini adalah perintah untuk menampilkan variable h1 tersebut ke dalam body html
// body.append(namaKamu)
// body.append(namaSaya)

 const body = document.body
 const btn1 = document.getElementById ('btn1')
 const btn2 = document.getElementById ('btn2')
 const text2 = document.getElementById('text2')
 const defaultText = 'Klik saya 1'
 const defaultColor = 'green' 

const defaultText2 = 'klik saya 2'
btn2.textContent = defaultText2

btn1.style.fontFamily = 'arial black'
btn1.style.background = 'green' 

btn1.textContent = defaultText
btn1.style.background = defaultColor



function clickButton(){
    btn1.style.background = 'aqua'
    btn2.style.background = 'aqua'
    const newText = document.createElement('p')
    newText.textContent = prompt('Masukan nama anda')   
    body.append(newText)


}

function onmouseOut (){
    const newText2 = document.createElement('p')
    newText2.textContent = prompt('Masukan Nama anda')
    body.append(newText2)

    
}

function ubahWarna (){
    const newText2 = document.createElement('p')
    newText2.textContent = ('Ahmad Zaki ')
    newText2.style.color ='red'
    body.append(newText2)
}

function gantiText(){
    btn1.textContent = 'saya diklik'
   
    }
function oriText(){
    btn1.textContent = defaultText
    btn1.style.background = defaultColor
}

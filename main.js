
/* acima testando Promises --- abaixo vamos comentar para testar as promises */

const intervalo = setInterval(() => {
   const element = document.querySelector("div > header")

   if (element) {
      clearInterval(intervalo);

      new insertMoreDiv(slow("audio"), x1p5("audio"), x2p("audio"))



      setTimeout(() => {


      }, 524);


   }

}, 1203);


/*  */
/*  */

function divContainerMain() {
   let $baseDivHeader = document.querySelector("div > header")

   let $divMain = document.createElement("div")
   $divMain.classList.add('flex', 'content-header')

   const $proj = $baseDivHeader.insertAdjacentElement("beforeend", $divMain)

   return $proj
}


// console.log(divPrincipalComDivFilha, 'div filha');

function insertMoreDiv(el01, el02, el03) {
   let $divFilho = document.createElement('div')
   $divFilho.classList.add("flex", "containerButtons")
   $divFilho.style.cssText = `
      /*flex-direction: column;
      max-height: 100%;
      width: 50%;*/

      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 1%;
      grid-row-gap: 3%;
   `


   $divFilho.insertAdjacentElement("beforeend", el01)
   $divFilho.insertAdjacentElement("beforeend", el02)
   $divFilho.insertAdjacentElement("beforeend", el03)

   const $insert = divContainerMain().insertAdjacentElement("beforeend", $divFilho)

   return $insert
}




/*  */

function newButton(textoButton, callBack) {
   let divEHeader = document.querySelector("div > header")

   let button = document.createElement('button')
   button.textContent = textoButton


   callBack(button)

   divEHeader.insertAdjacentElement('beforeend', button)

   // return faz ler a funcao fora dela
   return button
}


/*  */
/*  como codigo de reutiliza a new button, aqui usando botoes de audios e não dos videos*/



function slow(tagMidia) {
   const btn = newButton("slow»", (btn) => {
      btn.classList.add('sleep', 'slow')

      btn.addEventListener('click', () => {
         const on = btn.classList.toggle('online')
         const midias = document.querySelectorAll(tagMidia)

         if (on) {
            midias.forEach((audio) => audio.playbackRate = 0.54)
         }
         else if (!on) {
            midias.forEach((audio) => audio.playbackRate = 1)
         }
      })

      btn.style.cssText = `
      text-align: center;  
   `
   })
   return btn;
}


function x1p5(tagMidia) {
   const btn = newButton("1.5»", (btn) => {
      btn.classList.add('sleep', '1-5x')
      btn.addEventListener('click', () => {
         const on = btn.classList.toggle('online')
         const midias = document.querySelectorAll(tagMidia)

         if (on) {
            midias.forEach((audio) => audio.playbackRate = 1.54)
         }
         else if (!on) {
            midias.forEach((audio) => audio.playbackRate = 1)
         }
      })

      btn.style.cssText = `
      text-align: center;  
   `

   })
   return btn;

}
function x2p(tagMidia) {
   const btn = newButton("2»", (btn) => {
      btn.classList.add('sleep', '2x')
      btn.addEventListener('click', () => {
         const on = btn.classList.toggle('online')
         const midias = document.querySelectorAll(tagMidia)

         if (on) {
            midias.forEach((audio) => audio.playbackRate = 2.12)
         }
         else if (!on) {
            midias.forEach((audio) => audio.playbackRate = 1)
         }
      })

      btn.style.cssText = `
      text-align: center;  
   `

   })
   return btn;

}


// x2p(tagMidia)














function video() {
   let end = document.querySelector("#app > div")
   // .children[2].querySelector("div")

   console.log('video rodand, o end ', end);

   // let div2 = document.createElement("div")
   // div2.classList.add("botoes-dois-um-cinco")
   // div2.classList.add("flex")

   // let btn0x = document.createElement("button")
   // btn0x.innerText = "slowmotion"
   // btn0x.classList.add("sleep")
   // btn0x.addEventListener('click', () => {
   //    const audios = document.querySelectorAll('audio')
   //    const videos = document.querySelectorAll('video')
   //    videos.forEach((audio) => audio.playbackRate = 0.23)
   //    audios.forEach((audio) => audio.playbackRate = 0.36)
   // })

   // let btn1x = document.createElement("button")
   // btn1x.innerText = "Normal";
   // btn1x.classList.add("sleep")
   // btn1x.addEventListener('click', () => {
   //    const audios = document.querySelectorAll("audio")
   //    const videos = document.querySelectorAll('video')
   //    videos.forEach((audio) => audio.playbackRate = 1)
   //    audios.forEach((audio) => audio.playbackRate = 1)
   // });

   // div2.appendChild(btn0x)
   // div2.appendChild(btn1x)

   // end.appendChild(div2)

}

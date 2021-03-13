
let intervalo = setInterval(() => {
   const el = document.querySelector("div > header")
   el.classList.add("content-header");

   const flexClass = document.querySelector("div > header").classList.add("flex");

   if (el) {

      slowmotionAndNormal()
      botoesDoisUmCincoX()

      clearInterval(intervalo);
   }
}, 3003);


function botoesDoisUmCincoX() {
   let final = document.querySelector("div > header")

   console.log(final);

   let div = document.createElement("div")
   div.classList.add("botoes-dois-um-cinco")
   div.classList.add("flex")

   let btn1x5 = document.createElement("button")
   btn1x5.innerText = "1.5x"
   btn1x5.classList.add("sleep")
   btn1x5.addEventListener('click', () => {
      const audios = document.querySelectorAll('audio')
      audios.forEach((audio) => audio.playbackRate = 1.56)
   })

   let btn2x = document.createElement("button")
   btn2x.innerText = "2x";
   btn2x.classList.add("sleep")
   btn2x.addEventListener('click', () => {
      const audios = document.querySelectorAll("audio")
      audios.forEach((audio) => audio.playbackRate = 2)
   });

   div.appendChild(btn1x5)
   div.appendChild(btn2x)

   final.appendChild(div)

}

function slowmotionAndNormal() {
   let end = document.querySelector("div > header")

   console.log(end);

   let div2 = document.createElement("div")
   div2.classList.add("botoes-dois-um-cinco")
   div2.classList.add("flex")

   let btn0x = document.createElement("button")
   btn0x.innerText = "slowmotion"
   btn0x.classList.add("sleep")
   btn0x.addEventListener('click', () => {
      const audios = document.querySelectorAll('audio')
      audios.forEach((audio) => audio.playbackRate = 0.46)
   })

   let btn1x = document.createElement("button")
   btn1x.innerText = "Normal";
   btn1x.classList.add("sleep")
   btn1x.addEventListener('click', () => {
      const audios = document.querySelectorAll("audio")
      audios.forEach((audio) => audio.playbackRate = 1)
   });

   div2.appendChild(btn0x)
   div2.appendChild(btn1x)

   end.appendChild(div2)

}
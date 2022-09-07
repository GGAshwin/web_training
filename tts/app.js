const btn=document.querySelector("#btn")
const textarea=document.querySelector("#text")
var speech=new SpeechSynthesisUtterance()
console.log(speech);
btn.addEventListener("click",()=>{
    console.log(textarea.value);
    speech.text=textarea.value
    speech.pitch=0.5
    speech.volume=1
    speech.lang="en-US"
    speech.rate=1
    speechSynthesis.speak(speech)
})
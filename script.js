const messages = [
{
text:"💌 Kuchh Kahna Tha Aapse...",
gif:"images/1.gif"
},
{
text:"😔 I Miss You Very Much...",
gif:"images/2.gif"
},
{
text:"🧸 I Need A Tight Hug...",
gif:"images/3.gif"
},
{
{
text:"😚 I Want A Cuddle Moment...",
gif:"images/4.gif"
},
{
text:"❤️ Lastly... I Love You So Much!",
gif:"images/5.gif"
}
];

let index = 0;

function openGift(){
    document.getElementById("giftScreen").style.display="none";
    document.getElementById("messageScreen").style.display="block";

    document.getElementById("bgmusic").play();

    showMessage();
}

function showMessage(){

    let typing = document.getElementById("typing");
    let gif = document.getElementById("gif");
    let btn = document.getElementById("nextBtn");

    let text = messages[index].text;

    gif.src = messages[index].gif;

    typing.innerHTML = "";

    let i = 0;

    btn.style.display = "none";

    let type = setInterval(()=>{
        typing.innerHTML += text.charAt(i);
        i++;

        if(i === text.length){
            clearInterval(type);

            btn.style.display = "inline-block";

            if(index === messages.length - 1){
                btn.innerText = "❤️ The End ❤️";
            }else{
                btn.innerText = "Next ❤️";
            }
        }
    },70);
}

function nextMessage(){
    if(index < messages.length - 1){
        index++;
        showMessage();
    }else{
        document.getElementById("nextBtn").style.display="none";
    }
}

/* Heart Rain */
const hearts = document.getElementById("hearts");

setInterval(()=>{
    let h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "❤️";
    h.style.left = Math.random()*100 + "vw";
    h.style.animationDuration = (3 + Math.random()*3) + "s";
    hearts.appendChild(h);

    setTimeout(()=>h.remove(),6000);
},250);
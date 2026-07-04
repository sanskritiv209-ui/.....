const messages = [
"💌 Kuchh Kahna Tha Aapse...",
"😔 I Miss You Very Much...",
"🧸 I Need A Tight Hug...",
"😚 I Want A Cuddle Moment...",
"❤️ Lastly... I Love You So Much!"
];

let index = 0;

function openGift(){
    document.getElementById("giftScreen").style.display="none";
    document.getElementById("messageScreen").style.display="block";
    showMessage();
}

function showMessage(){
    let text = messages[index];
    let i = 0;
    let typing = document.getElementById("typing");
    typing.innerHTML="";
    document.getElementById("nextBtn").style.display="none";

    let interval = setInterval(()=>{
        typing.innerHTML += text.charAt(i);
        i++;

        if(i==text.length){
            clearInterval(interval);

            if(index == messages.length-1){
                document.getElementById("teddy").style.display="block";
            }else{
                document.getElementById("nextBtn").style.display="inline-block";
            }
        }
    },70);
}

function nextMessage(){
    index++;
    showMessage();
}

// Heart Rain
const hearts=document.getElementById("hearts");

setInterval(()=>{
    let heart=document.createElement("div");
    heart.className="heart";
    heart.innerHTML="❤️";
    heart.style.left=Math.random()*100+"vw";
    heart.style.animationDuration=(3+Math.random()*3)+"s";
    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

},250);
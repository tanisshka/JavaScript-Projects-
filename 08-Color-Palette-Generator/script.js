const paletteContainer=document.getElementById("paletteContainer");
const toast = document.getElementById("toast");
const generateBtn = document.getElementById("generateBtn");

function RandomColorCodeGenerator(){
    return Math.floor(Math.random()*256).toString(16).padStart(2,"0");
}

function randomColor(){
    const r=RandomColorCodeGenerator();
    const g=RandomColorCodeGenerator();
    const b=RandomColorCodeGenerator();
    const colorCode=`#${r}${g}${b}`;
    return colorCode;
}
randomColor();


function generatePalette(){
    paletteContainer.innerHTML = "";
    for(i=0;i<10;i++){
        const hex=randomColor();
        const card=document.createElement('div');
        card.classList.add("color-card");

        
        card.innerHTML = `
            <div class="color-preview" style="background:${hex}"></div>
            <div class="color-info">
                <p class="color-code">${hex}</p>
            </div>
        `;

        card.addEventListener("click",()=>copyColor(hex));
        paletteContainer.appendChild(card);
    }
}


function copyColor(hex){
    navigator.clipboard.writeText(hex);

    toast.classList.add("show");
    toast.innerText=`${hex} Copied!`;

    setTimeout(()=>{
        toast.classList.remove("show");
    },2000);
}

generatePalette();
generateBtn.addEventListener("click",generatePalette)
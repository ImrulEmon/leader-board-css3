document.getElementById("top-player-title").style.color="Orange";
document.getElementById("top-blogs-title").style.color="green";


const players = document.getElementsByClassName("player");
for(const player of players){
    player.style.backgroundColor ="rgba(10, 10, 141, 0.83)";
    player.style.color="rgba(255, 255, 255, 1)";
};

function addItem(){
    const ul = document.getElementById("ul");
    const li = document.createElement("li");
    li.innerText="Element created after click";
    ul.appendChild(li);

}

document.getElementById("plus").addEventListener('click',function(){

        let inputField = document.getElementById("input");
       let inputText = inputField.value;
       let previousInput = parseInt(inputText);
       let newInput = previousInput + 1;
       if(newInput <= 5){
        inputField.value = newInput;
        console.log(newInput);
        document.getElementById("minus").disabled=false;
       }
       if(newInput==5){
           document.getElementById("plus").disabled=true;
       }

});
document.getElementById("minus").addEventListener('click',function(){

        let inputField = document.getElementById("input");
       let inputText = inputField.value;
       let previousInput = parseInt(inputText);
       let newInput = previousInput - 1;
       if(newInput >= 0){
        inputField.value = newInput;
        console.log(newInput);
        document.getElementById("plus").disabled=false;
       }
       if(newInput==0){
        document.getElementById("minus").disabled=true;
    }
});
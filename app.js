const names = document.getElementById("name");
const crushname = document.getElementById("crushname");
const heart = document.getElementById("heart");
const percentage = document.getElementById("percentage");
const prompt = document.getElementById("prompt");


heart.addEventListener("click", (e) => {
    if(names.value === "" || crushname.value === ""){  
        document.getElementById("prompt").style.display = "block";
    }
    else if(names.value === "ralph" || names.value === "bambie" && crushname.value === "bambie" || crushname.value === "ralph"){
        percentage.classList.add("loading");
        percentage.innerHTML = "<span class='icon'>&#8635;</span>"; 
        setTimeout(()=>{
            percentage.innerText = "100%";
        }, 2000);
        document.getElementById("prompt").style.display = "none";
    }
    else if(names.value === "Reynaldo" && crushname.value === "sarah"){
        let chance = Math.floor(Math.random() * 2) + 1;
        percentage.classList.add("loading");
        percentage.innerHTML = "<span class='icon'>&#8635;</span>";
        setTimeout(() => {
            
        }, 2000);
        document.getElementById("prompt").style.display = "none";
    }
    else{
        percentage.classList.add("loading");
        percentage.innerHTML = "<span class='icon'>&#8635;</span>"; 
        setTimeout(() => {
            percentage.innerText = Math.floor(Math.random() * 101) + "%";
        }, 2000);
        document.getElementById("prompt").style.display = "none";
    }
    
});

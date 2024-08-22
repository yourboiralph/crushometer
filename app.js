const names = document.getElementById("name");
const crushname = document.getElementById("crushname");
const heart = document.getElementById("heart");
const percentage = document.getElementById("percentage");
const prompt = document.getElementById("prompt");


heart.addEventListener("click", (e) => {
    if(names.value === "" || crushname.value === ""){  
        document.getElementById("prompt").style.display = "block";
    }
    else if(names.value === "ralph" && crushname.value === "HAHAHAHA akoa nalang gi delete kay delikado" || names.value === "HAHAHAHA akoa nalang gi delete kay delikado" && crushname.value === "ralph"){
        percentage.classList.add("loading");
        percentage.innerHTML = "<span class='icon'>&#8635;</span>"; 
        setTimeout(()=>{
            percentage.innerText = "100%";
        }, 2000);
        document.getElementById("prompt").style.display = "none";
    }


    //SARAH NAVALUNA HAHAHAHAHAHHAH PATAY KA BAJ!
    else if(names.value === "reynaldo" && crushname.value === "sarah"){
        let chance = Math.floor(Math.random() * 2) + 1;
        percentage.classList.add("loading");
        percentage.innerHTML = "<span class='icon'>&#8635;</span>";
        setTimeout(() => {
            if(chance % 2 == 0){
                percentage.innerText = "100%";
            }else{
                percentage.innerText = "0%";
            }
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

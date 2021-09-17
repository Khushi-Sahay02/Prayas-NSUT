// Teams Section
//const presidentsLi = document.querySelector(".presidents-li");
const advisorsLi = document.querySelector(".advisors-li");
const coreTeamLi = document.querySelector(".core-team-li");
const devTeamLi = document.querySelector(".dev-team-li");
//const presidents = document.querySelector(".presidents");
const advisors = document.querySelector(".advisors");
const coreTeam = document.querySelector(".core-team");
const devTeam = document.querySelector(".dev-team");

const removeAll = function() {
    advisors.classList.add('d-none');
    //presidents.classList.add('d-none');
    coreTeam.classList.add('d-none');
    devTeam.classList.add('d-none');
    advisorsLi.classList.remove('teams-active');
    //presidentsLi.classList.remove('teams-active');
    devTeamLi.classList.remove('teams-active');
    coreTeamLi.classList.remove('teams-active');
}
// presidentsLi.addEventListener('click', function(e) {
//     removeAll();
//     presidents.classList.remove('d-none');
//     presidentsLi.classList.add('teams-active');
// })
advisorsLi.addEventListener('click', function(e) {
    removeAll();
    advisors.classList.remove('d-none');
    advisorsLi.classList.add('teams-active');
})
coreTeamLi.addEventListener('click', function(e) {
    removeAll();
    coreTeam.classList.remove('d-none');
    coreTeamLi.classList.add('teams-active');
})
devTeamLi.addEventListener('click', function(e) {
    removeAll();
    devTeam.classList.remove('d-none');
    devTeamLi.classList.add('teams-active');
})

//Gallery
'use strict'

 let gallery = document.querySelectorAll('.gallery__img');
 let index ;

 let changePosition = function()
 {

    let random = Math.floor(Math.random()*14)+1;

    index = random;

    console.log(index);
 }

 changePosition();

 gallery.forEach((ele) => {

    if(index>14)
    {
        index = 0;
    }

    if(index == 0) {
        index=1;
    }

    if(index!=0 && index <= 14)
    {
        ele.style.background = `url(./Images/Pics/Collection-Drive/gal-${index}.jpg)`;
        ele.style.backgroundSize = `cover`;
        
        index++;
    }
    
 })

 
 let setPhotos = (folder) => {

    let inc = 1;

    gallery.forEach((ele) => {
      
        if(index <= 14)
        {
    
            ele.style.background = `url(./Images/Pics/${folder}/gal-${inc}.jpg)`;
            ele.style.backgroundSize = `cover`;
            
            inc++;
        }
        
     })
    
}

let events = ['Collection Drive','Kriti','Picnic 2019','Picnic 2020','Unleash the Talent']
let circles = document.querySelectorAll('.circle');
let text = document.querySelector('.main-text-event')

circles.forEach((ele,index) => {

    ele.addEventListener('click',()=>{
        
        text.textContent = events[index];

        let folder = events[index].split(" ").join("-");
        console.log(folder);

        setPhotos(folder);

    })
})
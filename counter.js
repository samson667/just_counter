let big_counter = document.querySelector(".big_counter")
let today_counter = document.querySelector(".today_counter")
let howmuch_counter = document.querySelector(".howmuch_counter")
let Liftime_counter = document.querySelector(".Liftime_counter")
let howmuch_Liftime = document.querySelector(".howmuch_Liftime")
let del_btn = document.querySelector(".del_btn")
let add_btn = document.querySelector(".add_btn")



const d = new Date();

const day = d.getDate();
const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
const month = months[d.getMonth()];
const year = d.getFullYear();

let cu_date = document.querySelector(".current-date")
cu_date.innerText = "Current session date : " + day + " " + month + " " + year;


let big_coun = 0
let td_coun = 0
let how_coun = 0


//  local get 
let local_lifetime = Number(localStorage.getItem("Life_time")) || 0;
Liftime_counter.textContent = `Lifetime ${local_lifetime}`;
let Lifetimes = local_lifetime

// local get
let local108 = Number(localStorage.getItem("how_lif")) || 0;
howmuch_Liftime.textContent = `108 X${local108}`
let how_lf = local108

function ad_click() {

    big_coun += 1;
    big_counter.textContent = `${big_coun}`;

    td_coun += 1;
    today_counter.textContent = `Today ${td_coun}`;

    //   local set
    Lifetimes += 1;
    localStorage.setItem("Life_time", Lifetimes);
    Liftime_counter.textContent = `Lifetime ${Lifetimes}`;

    if (big_coun == 108) {
        big_coun = 0
        big_counter.textContent = `${big_coun}`;

        how_coun += 1
        howmuch_counter.textContent = `108 X ${how_coun}`

        // local set
        how_lf += 1
        localStorage.setItem("how_lif", how_lf)
        howmuch_Liftime.textContent = `108 X ${how_lf}`



    }



}
function del_click() {
    if (td_coun !== 0) {
        big_coun -= 1;
        big_counter.textContent = `${big_coun}`;

        td_coun -= 1;
        today_counter.textContent = `Today ${td_coun}`;

        //  local set 
        Lifetimes -= 1;
        localStorage.setItem("Life_time", Lifetimes);
        Liftime_counter.textContent = `Lifetime ${Lifetimes}`;
        // Update localStorage
    }
    if (big_coun < 0 && Lifetimes !== 0 && td_coun !== 0) {
        big_coun = 107
        big_counter.textContent = `${big_coun}`;

        how_coun -= 1
        howmuch_counter.textContent = `108 X ${how_coun}`

        //  local set 
        how_lf -= 1
        localStorage.setItem("how_lif", how_lf)
        howmuch_Liftime.textContent = `108 X${how_lf}`

    }

}
add_btn.addEventListener("click", ad_click)
del_btn.addEventListener("click", del_click)
const endDate =  "31 december 2023 3:00 PM"          //declaring date for timer

document.getElementById("end-date").innerText = endDate;           //ed ki id ko enddate m convert kra
const inputs = document.querySelectorAll("input")               // saare input ko ek variable m convert kra "inputs" 

const clock = () =>{
    const end = new Date(endDate)
    const now = new Date()         //date() will give us the exact date and time if no parameter than todays date 
    // console.log(now); 
    const diff = (end - now)/1000;                  //millisecond to second

    if(diff < 0) return;
    //else
    inputs[0].value=Math.floor(diff/60/60/24)          // diff aayga seconds m convert krnge min->hrs->24 it will return days 
    inputs[1].value=Math.floor(diff/60/60)%24            //sec->min->hrs yh apn ko dega total(with number of days left) hrs fron now to enddate but a sdays are declared earlier we need only the remaining hrs thus % used
    inputs[2].value=Math.floor(diff/60)%60
    inputs[3].value=Math.floor(diff)%60
}
clock()

setInterval(                     //this is a funcn which will call clock() funcn at every 1000millisec i.e 1sec
    () => {
        clock()
    },
    1000
)
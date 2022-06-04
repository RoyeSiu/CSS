setInterval(() =>{
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');
    let count = document.getElementById('count');

    let hh = document.getElementById('hh')
    let mm = document.getElementById('mm')
    let ss = document.getElementById('ss')

    let hh_dot = document.querySelector('.hh_dot');
    let mm_dot = document.querySelector('.mm_dot');
    let ss_dot = document.querySelector('.ss_dot');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = h >= 12 ? "PM" : "AM"
    let day = new Date().getDate();

    let now = new Date().getTime();
    // convert 24hr clock to 12hr clock
    if( h > 12){
        h = h -12;
    }
    // add zero before single digit number
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

        
    hours.innerHTML = h + "<br><span>Hours</span>";
    minutes.innerHTML = m + "<br><span>Minutes</span>";
    seconds.innerHTML = s + "<br><span>Seconds</span>";
    ampm.innerHTML = ap ;
    // count.innerHTML = new Date("Jan 5, 2024 15:37:25").getTime() - now
    // count.innerHTML = day

    hh.style.strokeDashoffset = 440 - (440 * h ) / 12;
    // 12 hrs clock
    mm.style.strokeDashoffset = 440 - (440 * m ) / 60;
    // 60 minutes
    ss.style.strokeDashoffset = 440 - (440 * s ) / 60;
    // 60 seconds
    hh_dot.style.transform = `rotate(${h * 30}deg)`;
    // 360 / 12 = 30
    mm_dot.style.transform = `rotate(${m * 6}deg)`;
    // 360 / 60 = 6
    ss_dot.style.transform = `rotate(${s * 6}deg)`;
    // 360 / 60 = 6
    
})
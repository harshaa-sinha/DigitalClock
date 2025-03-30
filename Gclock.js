function clock() {
    let time = new Date();
    let hh = time.getHours();
    let mm = time.getMinutes();
    let ss = time.getSeconds();
    let ampm = hh >= 12 ? "PM" : "AM";

    hh = hh % 12 || 12; 
    hh = String(hh).padStart(2, "0");
    mm = String(mm).padStart(2, "0");
    ss = String(ss).padStart(2, "0");

    document.getElementById("hours").innerText = hh;
    document.getElementById("minutes").innerText = mm;
    document.getElementById("seconds").innerText = ss;
    document.getElementById("ampm").innerText = ampm;
}

setInterval(clock, 1000);
clock();
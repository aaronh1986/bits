function clock() {
    const clockNode = document.querySelector('#clock');
    return setInterval(() => {
        let date = new Date();
        let tick = date.toLocaleTimeString();
        console.log(tick)
        clockNode.textContent = tick;
    }, 1000)
}


 







function newClock() {
   let clock = document.querySelector('#clock')
   return setInterval(() => {
       let date = new Date();
       let localTime = date.toLocaleTimeString();
       clock.innerHTML = localTime;
   }, 1000)
}

newClock()
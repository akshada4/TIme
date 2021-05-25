let startClock = () => {
	let current = new Date();
	let initialHour = current.getHours();
	let initialMinute = current.getMinutes();
	let initialSecond = current.getSeconds();
	handSetting(initialHour,initialMinute,initialSecond);
}

let handSetting = (hours,minutes,seconds) => {
	minutesToSeconds = (60*minutes) + seconds;
	hoursToMinutes =  (60*hours) + minutes ;
	document.getElementById('second').style.transform = `rotate(${6*seconds}deg)`;
	document.getElementById('minute').style.transform = `rotate(${minutesToSeconds*0.1}deg)`;	
	document.getElementById('hour').style.transform = `rotate(${0.5*hoursToMinutes}deg)`;
}


startClock();
setInterval(startClock, 1000);


function startTime() {
    let dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado");
    let monName = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro");
    let today = new Date();
    let h=today.getHours();
    let m=today.getMinutes();
    let s=today.getSeconds();  
    document.querySelector('#hourNow').innerHTML= dayName[today.getDay()] + ", " + today.getDate() + " de " + monName [today.getMonth()] + " de " + today.getFullYear () + ", " + h+":"+m+":"+s; 
    setTimeout('startTime()',1000);
  }
  
  onload = startTime()
   
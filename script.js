  let distanse =document.querySelector('#distanse') ,
      human = document.querySelector('#human'),
      bike = document.querySelector('#bike'),
      car = document.querySelector('#car'),
      plane = document.querySelector('#plane'),
      humanResult = Number(distanse.value) / 3.6,
      bikeResult = distanse.value / 20.1,
      carResult = distanse.value / 70,
      planeResult = distanse.value / 800;

  function toMinute(value) {
      let min = value * 60;
      let soatQoldiq = min % 60 / 60;
      let butunSoat = value - soatQoldiq;
      let qolganMin = soatQoldiq * 60;
      return Math.round(butunSoat) + ' soat ' + ' va ' + Math.round(qolganMin) + 'minut';
  }


  function result() {
      human.textContent = toMinute(Number(distanse.value)/3.6) ;
      bike.textContent = toMinute(Number(distanse.value)/20.1) ;
      car.textContent = toMinute(Number(distanse.value)/70) ;
      plane.textContent = toMinute(Number(distanse.value)/800) ;
  }

  
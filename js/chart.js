// ============================================
// As of Chart.js v2.5.0
// Dirty Energy
// ============================================

var chart    = document.getElementById('chart1').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)');
gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');


var data  = {
    labels: ['' ,'1','5', '10', '15','20', '25'],
    datasets: [{

      label: 'Total payment since the beginning',
      backgroundColor: gradient,
      pointBackgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#911215',
      data: [0, 2400.00,  12999 ,  28815 ,  48057 , 71467 , 99950]
    }]
};


var options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: 'easeInOutQuad',
    duration: 1000
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'rgba(000, 000, 000, 0.05)',
        lineWidth: 1
      }
    }],
    yAxes: [{
      gridLines: {
        color: 'rgba(000, 000, 000, 0.05)',
        lineWidth: 1
      }
    }]
  },
  elements: {
    line: {
      tension: 0.4
    }
  },
  legend: {
    display: false
  },
  point: {
    backgroundColor: 'white'
  },
  tooltips: {
    titleFontFamily: 'Open Sans',
    backgroundColor: 'rgba(0,0,0,0.8)',
    titleFontColor: 'red',
    caretSize: 5,
    cornerRadius: 2,
    xPadding: 10,
    yPadding: 10
  }
};


var chartInstance = new Chart(chart, {
    type: 'line',
    data: data,
    options: options
});


// ============================================
// As of Chart.js v2.5.0
// clean energy graph
// ============================================

var chart    = document.getElementById('chart2').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, 'rgba(34, 74,38, 0.7)');
gradient.addColorStop(0.5, 'rgba(34, 74,38, 0.5)');
gradient.addColorStop(1, 'rgba(34, 74,38, 0)');


var data  = {
    labels: ['','2022 year', '2027 year', '2033 year','2038 year', '2043 year','2048 year','2049 year', '2050 year'],
    datasets: [{
      label: 'total paid per month',
      backgroundColor: gradient,
      pointBackgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#911215',
      data: [200, 200, 200, 200, 200,  10, 10, 10,10]
    }]
};

var options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: 'easeInOutQuad',
    duration: 520
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'rgba(000, 000, 000, 0.05)',
        lineWidth: 1
      }
    }],
    yAxes: [{
      gridLines: {
        color: 'rgba(000, 000, 000, 0.05)',
        lineWidth: 1
      }
    }]
  },
  elements: {
    line: {
      tension: 0.4
    }
  },
  legend: {
    display: false
  },
  point: {
    backgroundColor: 'white'
  },
  tooltips: {
    titleFontFamily: 'Open Sans',
    backgroundColor: 'rgba(0,0,0,0.3)',
    titleFontColor: 'red',
    caretSize: 5,
    cornerRadius: 2,
    xPadding: 10,
    yPadding: 10
  }
};


var chartInstance = new Chart(chart, {
    type: 'line',
    data: data,
    options: options
});

// ============================================
// As of Chart.js v2.5.0
// Dirty Energy
// ============================================

var chart = document.getElementById('chart1').getContext('2d');

tradGradient = chart.createLinearGradient(0, 0, 0, 450);
tradGradient.addColorStop(0, 'rgba(255, 0,0, 0.5)');
tradGradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
tradGradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

cleanGradient = chart.createLinearGradient(0, 0, 0, 450);
cleanGradient.addColorStop(0, 'rgba(34, 74,38, 0.7)');
cleanGradient.addColorStop(0.5, 'rgba(34, 74,38, 0.5)');
cleanGradient.addColorStop(1, 'rgba(34, 74,38, 0)');


var tradPerYear = {
  '1 year': 200, 
  '5 year': 234, 
  '10 year': 285, 
  '15 year': 346, 
  '20 year': 421, 
  '25 year': 513, 
};

var tradData  = {
    labels: ['1 year' ,'5 year','10 year', '15 year', '20 year','25 year'],
datasets: [{
      label: 'Total paid per year',
      fill: true,
      backgroundColor: '#9dc4a3',
      pointBackgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'green',
      data: [2400, 2400, 2400, 2400, 10,  10,]
    },{
      label: 'Total payment since the beginning',
      fill: true,
      backgroundColor: '#d69aa0',
      pointBackgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#911215',
      data: [2400, 12999,  28815 ,  48057 ,  71467 , 99950,]
    }]
};



var cleanData  = {
  labels: ['1 year' ,'5 year','10 year', '15 year', '20 year','25 year'],
  datasets: [{
    label: 'Total paid per year',
    fill: true,
    backgroundColor: '#9dc4a3',
    pointBackgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'green',
    data: [2400, 2400, 2400, 2400,  10, 10,]
  }]
};

var options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: 'easeInOutQuad',
    duration: 500
  },
  scales: {
    y: {
        suggestedMax: 100000
    }
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      callbacks: {
        label: function(tooltipItems) {
          console.log(tooltipItems);
          if(tooltipItems.datasetIndex === 1){
            var multistringText = [`Total paid per year: ${tradPerYear[tooltipItems.label]}`, `Total paid since beginning: ${tooltipItems.formattedValue}`]
            return  multistringText;
          } else {
            return "Total paid per year: " + tooltipItems.formattedValue;
          }
        }
      }
    }
  },
  // elements: {
  //   line: {
  //     tension: 0.4
  //   }
  // },
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

// ============================================
// As of Chart.js v2.5.0
// clean energy graph
// ============================================

// var chart    = document.getElementById('chart2').getContext('2d'),
//     gradient = chart.createLinearGradient(0, 0, 0, 450);

// gradient.addColorStop(0, 'rgba(34, 74,38, 0.7)');
// gradient.addColorStop(0.5, 'rgba(34, 74,38, 0.5)');
// gradient.addColorStop(1, 'rgba(34, 74,38, 0)');

var chartInstance = new Chart(chart, {
  type: 'line',
  data: tradData,
  options: options
});;


// var chartInstance = new Chart(chart, {
//     type: 'line',
//     data: data,
//     options: options
// });


function swapCharts(chart_id) {
  if(chart_id === 'trad') {
    $('.active-chart-btn').removeClass('active-chart-btn');
    $('.tradButton').addClass('active-chart-btn');
    chartInstance.destroy();
    chartInstance = new Chart(chart, {
      type: 'line',
      data: tradData,
      options: options
    });
  } else if(chart_id === 'clean') {
    $('.active-chart-btn').removeClass('active-chart-btn');
    $('.cleanButton').addClass('active-chart-btn');
    chartInstance.destroy();
    chartInstance = new Chart(chart, {
      type: 'line',
      data: cleanData,
      options: options
    });
  }
}
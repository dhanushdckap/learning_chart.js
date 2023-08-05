
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            'HTML',
            'CSS',
            'JS',
            'PHP',
            'React',
            'Laravel'
          ],
          datasets: [{
            label: 'level-learned',
            data: [16.6, 16.6, 16.6,16.6,16.6,16.6],
            backgroundColor: [
              '#6671FA',
              '#FA0079',
              '#008EFA',
              '#0DFA1E',
              '#FD6F0D',
              '#E3D50B'
            ],
            hoverOffset: 10  
          }]
    },
    options:{
        borderWidth : 10,
        borderRadius : 10,
        hoverBorderWidth :0,
    }
  });

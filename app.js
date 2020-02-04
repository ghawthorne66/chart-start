

const myChart = document.getElementById('myChart').getContext('2d');
// console.log(myChart.defaults.global)

let massPopChart = new Chart(myChart, {
    type: 'bar', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ['Carlsbad', 'Chula Vista', 'Coronado', 'Del Mar', 'El Cajon', 'Encinitas', 'Escondido', 'Imperial Beach'],
        datasets: [{
            label: 'Population',
            data: [105328,
                243916,
                18912,
                4161,
                99478,
                59518,
                143911,
                26324
            ],
            //  backgroundColor: 'green'
            backgroundColor: [
                'lightblue',
                'grey',
                'blue',
                'silver',
                'gold',
                'purple',
                'teal',
                'maroon'],
                borderWidth: 1,
                borderColor: '#777',
                hoverBorderWidth: 3,
                hoverBorderColor: '#fff'
        }]
    },
    options:{
        title:{
            display:true,
            text:'San Diego Cities',
            fontSize:25
        },
        legend:{
            display:true,
            position: 'right',
            labels: {
            }
        },
        layout:{
            padding:{
                left:50,
                right:0,
                bottom:0,
                top:0
            }
        },
        tooltips: {
            enabled:true
        }
    }


})

function myFunction() {
    const element = document.body;
    element.classList.toggle("dark-mode");
  }

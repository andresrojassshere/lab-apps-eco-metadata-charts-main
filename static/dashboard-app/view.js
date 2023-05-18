class View {
    static barItem = document.querySelector('#myBarChart');
    static doughnutItem = document.querySelector('#myDoughnutChart');
    static lineItem = document.querySelector('#myLineChart');
    static fiveLeadsTable = document.querySelector('table');
    //doughnutChart;
    //barChart;
    constructor() {
        //this.barItem = document.querySelector('#myBarChart');
        //this.doughnutItem = document.querySelector('#myDoughnutChart');
        //this.lineItem = document.querySelector('#myLineChart');
        this.doughnutChart;
        this.barChart;
    }

    getHello() {
        this.onHello();
    }

    getBarChart() {
        const config = {
            type: 'bar',
            data: {
                labels: ['Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
                datasets: [{
                    label: 'Total de visitas al día',
                    data: [0, 0, 0, 0, 0],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }
        this.barChart = new Chart(View.barItem, config);
        //this.barChartUpdate(this.barChart);
    }

    getDoughnutChart() {
        const data = {
            labels: [
                'Android',
                'iOS'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [50, 50],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)'
                ],
                hoverOffset: 4
            }]
        };
        const config = {
            type: 'doughnut',
            data: data,
        };

        this.doughnutChart = new Chart(View.doughnutItem, config);
        //this.doughnutChartUpdate(this.doughnutChart);
    }

    getLineChart() {
        const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        const data = {
            labels: labels,
            datasets: [{
                label: 'My First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        };
        const config = {
            type: 'line',
            data: data,
        };
        new Chart(View.lineItem, config);
    }

    updateTable(newData){
        
        console.table(newData);
        newData.forEach(element => {
            let row = document.createElement('tr');
            row.innerHTML = 
            `<td>${element.name}</td>
             <td>${element.email}</td>
             <td>${element.dob}</td>
             <td>${element.phone}</td>
             <td>${element.date}</td>
             `
            View.fiveLeadsTable.appendChild(row);
        });
    }

    updateBarChart(newDataset) {
        console.log(this.barChart);
        console.log('Hey within Update barChart');
        this.barChart.data.datasets[0].data = newDataset.splice(2);
        //this.barChart.data.labels = newDataset.labels;
        this.barChart.update();
    }

    updateDoughnutChart(newDataset) {
        console.log(this.doughnutChart);
        console.log('Hey within Update doughnutChart');
        this.doughnutChart.data.datasets[0].data = newDataset;
        //this.doughnutChart.data.labels = newDataset.labels;
        this.doughnutChart.update();
    }

    render() {

        this.getBarChart();
        this.getDoughnutChart();
        this.getLineChart();

    }

}
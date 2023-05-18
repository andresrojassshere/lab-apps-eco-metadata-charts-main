function controller(view) {
    let dashboardLocalData;
    let popularityOfOS = [];

    view.onHello = (x) => {
        console.log('Hello inside the class!')
    }

    view.doughnutChartUpdate = (x) => {
        console.log('Data updated');
        console.log(x);
        x.data.datasets[0].data = [50, 50];
        x.data.labels = ["iOS", "Android"];
        x.update();
    }
    view.barChartUpdate = (x) => {
        console.log('Data updated');
        console.log(x);
        x.data.datasets[0].data = [80, 50, 60, 30];
        x.data.labels = ["Unicentro", "Jardin", "Cosmocentro", "Palmeto"];
        x.update();
    }


    (async function getDashboardData() {
        const request = await fetch('http://localhost:5050/dashboard');
        const data = await request.json();
        kpi = data;
        //popularityOfOS[0] = dashboardLocalData.interactions.filter( inter)
        console.log(kpi);

        view.updateTable(kpi.lastFiveLeads);
        view.updateDoughnutChart([kpi.osPopulatiry["Android"],kpi.osPopulatiry["iOS"]]);
        view.updateBarChart(kpi.visitsByDay);
        
    })();

    setInterval(() => {
        const min = 10;
        const max = 100;
        const randomNumbers = [
            Math.floor(Math.random() * (max - min + 1)) + min,
            Math.floor(Math.random() * (max - min + 1)) + min,
            Math.floor(Math.random() * (max - min + 1)) + min,
            Math.floor(Math.random() * (max - min + 1)) + min]

        let data = [randomNumbers[0], randomNumbers[1], randomNumbers[2], randomNumbers[3]];
        let labels = ["Unicentro", "Jardin", "Cosmocentro", "Palmeto"];

        //view.updateBarChart({ data, labels });
        //view.updateDoughnutChart({ data, labels });
    }, 2000);

    //view.getHello();
    //view.getDataUpdate();
    view.render();

}

let view = new View();
controller(view);
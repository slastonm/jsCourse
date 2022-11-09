window.onload = ()=>{
    let chartContainer = document.querySelector('.container');
    let  data = [80, 100, 190, 80, 420, 150, 10, 20];
    function createBarChart(data, width, height, color){
        let chart = document.createElement('div');
        chart.style.width = width + 'px';
        chart.style.height = height + 'px';
        chart.style.position = 'relative';

        let max = Number.NEGATIVE_INFINITY;
        for(let i = 0; i<data.length; i++){
            if(max <data[i]){
                max = data[i];
            }
        }
        let scale = height/ max
        let barWidth = Math.floor(width/ data.length);
        for(let i = 0; i<data.length; i++){
            let bar = document.createElement('div');
            bar.style.height = data[i] *scale + 'px';
            bar.style.width = barWidth - 4 + 'px';
            bar.style.left = barWidth*i + 'px';
            bar.style.position = 'absolute';
            bar.style.bottom = 0;

            bar.style.backgroundColor = color;
            chart.appendChild(bar);
        }
        return chart;
    }
    let chart = createBarChart(data, 900, 500, 'orange');
    chartContainer.appendChild(chart);
}
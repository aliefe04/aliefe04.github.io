axios.get("https://query1.finance.yahoo.com/v8/finance/chart/ODAS.IS?lang=tr-TR&includePrePost=false&useYfid=true&range=1d&corsDomain=finance.yahoo.com&.tsrc=finance", {

    headers:{
        "Host": "query1.finance.yahoo.com",
        "Access-Control-Allow-Origin": "*",
    }

}
)
      .then(response => {
        console.log(response.data.chart.result[0].indicators.quote[0].open[0]);
})
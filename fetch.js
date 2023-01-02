fetch("https://query1.finance.yahoo.com/v8/finance/chart/ODAS.IS?lang=tr-TR&includePrePost=false&useYfid=true&range=1d&corsDomain=finance.yahoo.com&.tsrc=finance",
    {
        mode: 'no-cors'
    }).then(response => {
        console.log(response);
    })
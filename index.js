const url = 'https://api.covid19india.org/data.json';

async function getTotal(){
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById('global1').innerHTML = data.statewise[0].confirmed;
    document.getElementById('global2').innerHTML = data.statewise[0].deaths;
    document.getElementById('global3').innerHTML = data.statewise[0].recovered;
    document.getElementById('global4').innerHTML = data.statewise[0].active;
}

getTotal();


async function getIndia(){
    const response = await fetch(url);
    const data = await response.json();

    for(var i=1;i<data.statewise.length;i++){
        var table = document.getElementById('myTable');
        var row=table.insertRow(i);

        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4); 

        cell0.innerHTML=data.statewise[i].state;
        cell1.innerHTML=data.statewise[i].confirmed;
        cell2.innerHTML=data.statewise[i].deaths;
        cell3.innerHTML=data.statewise[i].active;
        cell4.innerHTML=data.statewise[i].recovered;
    }

}

getIndia();
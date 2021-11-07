function sumTable() {
    const rows = document.querySelectorAll('table tr');
    let sum = 0;
    for (i = 1; i < (rows.length -1); i++) {
        const cols = rows[i].children;
        currentCost = Number(cols[cols.length - 1].textContent);


        sum += currentCost;
        console.log(sum);

        document.getElementById('sum').textContent = sum;
    }
}
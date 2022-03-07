function initProbefahrt() {
    input = document.getElementById("myInput");
    return myFunction(input.value);
}


function myFunction(input) {
    var filter, table, tr, td, i, txtValue;
    filter = input.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
    return valueForTest;
}

function loopForSearch(tr, input) {
    let filter = input.toUpperCase();
    for (i = 0; i < tr.length; i++) {
        td = tr[i];
        if (td) {
            txtValue = td;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                valueForTest = txtValue;
            }
        }
    }
    return valueForTest;
}

module.exports = {
    loopForSearch: loopForSearch
};

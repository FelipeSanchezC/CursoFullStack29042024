var items = localStorage.getItem('ListObject')
items = items ? JSON.parse(items) : []
showItems() 

function addItem() {
    let nombreProducto = document.getElementById('nombreProducto').value
    let valorProducto = document.getElementById('valorProducto').value
    let descProducto = document.getElementById('descProducto').value

    if(nombreProducto && valorProducto && descProducto){
        items.push({'nombreProducto': nombreProducto, 'valorProducto': valorProducto, 'descProducto': descProducto})
    showItems()
    }
}

function showItems(){
    document.getElementById('nombreProducto').value = ''
    document.getElementById('valorProducto').value = ''
    document.getElementById('descProducto').value = ''
    document.getElementById('nombreProducto').focus()

    let html = ''
    items.forEach((data, indice) => {
        html += `<div class=" row border border-warning  mt-2 mb-2 ms-2 me-2">`
        html += `<div class="col-3"> ${data.nombreProducto} </div>`
        html += `<div class="col-3"> ${data.valorProducto} </div>`
        html += `<div class="col-3"> ${data.descProducto} </div>`
        html += `<div class="col-3  mt-2 mb-2"> <a href='#' class="btn btn-danger" onclick=deleteItem(${indice})> X </a> </div>`
        html += `</div>`
    });

    localStorage.setItem('ListObject', JSON.stringify(items))
    document.getElementById('item-list').innerHTML = html
}

function deleteItem(indice){
    items.splice(indice, 1)
    showItems()
}
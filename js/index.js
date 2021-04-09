// show all the notes present in localstorage
showNotes()
var nodeObj = []
document.getElementById('addNotes').addEventListener('click', function () {
    let element = document.getElementById('noteTxt')
    // getting the localStorage notes 
    let data = localStorage.getItem('notes')
    if (data == null) {
        nodeObj = []
    } else {
        nodeObj = JSON.parse(data)
    }
    nodeObj.push(element.value)
    localStorage.setItem('notes', JSON.stringify(nodeObj))
    element.value = ""
    // after adding notes to the localStorage show all the notes 
    showNotes()
})
function showNotes() {
    let data = localStorage.getItem("notes")
    if (data == null) {
        nodeObj = []
    } else {
        nodeObj = JSON.parse(data)
    }
    let divElements = ""
    let tag = document.getElementById('allNotes')
    // insert div tags to show the notes 
    nodeObj.forEach(function (element, index) {
        divElements +=
            `<div class="card my-3 mx-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button class="btn btn-primary" id="${index}" onclick="deleteNotes(this.id)">Delete</button>
                </div>
            </div>`
    })
    if (nodeObj.length != 0) {
        tag.innerHTML = divElements
    } else {
        tag.innerHTML = `<h5><b>Nothing to show!!</b></h5>`
    }
}

function deleteNotes(index) {
    let data = localStorage.getItem('notes')
    if (data == null) {
        nodeObj = []
    } else {
        nodeObj = JSON.parse(data)
    }
    // remove any item at index for once (1) 
    nodeObj.splice(index, 1)
    localStorage.clear()
    localStorage.setItem('notes', JSON.stringify(nodeObj))
    showNotes()

}

document.getElementById('searchNotes').addEventListener('input', function () {
    let txt = this.value
    let cards = document.getElementsByClassName('card-text')
    Array.from(cards).forEach(function (element) {
        let data = element.innerHTML
        if (data.includes(txt)) {
            element.parentElement.parentElement.style.display = "block"
        } else {
            element.parentElement.parentElement.style.display = "none"
        }
    })

})
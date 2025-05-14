let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

// Load from localStorage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

inputBtn.addEventListener("click", function () {
    if (inputEl.value) {
        myLeads.push(inputEl.value)
        inputEl.value = ""
        saveAndRender()
    }
})

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        saveAndRender()
    })
})

deleteBtn.addEventListener("click", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

function saveAndRender() {
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
}

function render(leads) {
    ulEl.innerHTML = ""
    for (let lead of leads) {
        const li = document.createElement("li")
        li.innerHTML = `<a href="${lead}" target="_blank">${lead}</a>`
        ulEl.appendChild(li)
    }
}

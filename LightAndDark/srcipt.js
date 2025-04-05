let darkmode = localStorage.getItem('darkmode') // melakukan penyimpanan darkmode pada variable ini
const themeswitch = document.getElementById('ts') //untuk button event lister

//turn on the darkmode
const enabledark = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode','active')
}

//turn off the darkmode
const disabledark = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode',null)
}

if(darkmode === "active") enabledark()

//if condition enable and disable darkmode
themeswitch.addEventListener("click",()=> {
    darkmode = localStorage.getItem('darkmode') // updating the local storage about the mode
    darkmode !== "active" ? enabledark() : disabledark()
})


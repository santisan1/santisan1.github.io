export let checkInicio = user => {

    if (user) {
        sinlog.forEach(link => link.style.display = "none")
        conlog.forEach(link => link.style.display = "block")
    } else {
        sinlog.forEach(link => link.style.display = "block")
        conlog.forEach(link => link.style.display = "none")
    }
}
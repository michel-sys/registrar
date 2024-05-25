

function registar() {
    const nameInput = document.getElementById("nameInput").value;
    const oldInput = document.getElementById("oldInput").value;

    if (oldInput > 0 & nameInput !== '') {
            } else {
        alert("Por Favor, digite um nome ou idade valida!")
    }
    
    if (oldInput < 0 & nameInput !== '') {
        var redirecionar = './Usuarios Registrados/index.html'
        window.location.href = redirecionar;
    } else {
        alert("Já existe um usuario com esta idade!")
    }
}

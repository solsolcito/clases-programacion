let age = Number(window.prompt("¿Cual es tu edad? , numero "))
let height = Number(window.prompt("¿Cual es tu altura?"))
let allowed = Boolean(window.prompt("¿Tienes permiso de tus padres?"))

if (age >= 18) {
    document.write("Si Puede")
} else {
    if (age >= 16 && age < 18 && height >= 1.70) {
        document.write("Si Puede")
    }

    else if (age == 15 && allowed == true) {
        document.write("Si Puede")

    } else {
        document.write("No Puede")
    }
}



alert("email: adm | senha: adm")

async function logar(){
    try {
        const respostaServer = await fetch("localhost:3000/login")
        const token = respostaServer.json()

        if(!token){
            alert("Você não tem permissão para acessar essa página")
        }else{
            localStorage.setItem("token", token)
            window.location.href = "./logout.html";
        }
    } catch (error) {
        alert(`Erro ao logar - ${error}`)
    }
}
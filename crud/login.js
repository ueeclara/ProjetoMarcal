alert("email: adm | senha: adm")

async function logar(){
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value

    try {
        const respostaServer = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({email, senha})
        })
        const token = await respostaServer.json()

        if(!token.token){
            alert("Você não tem permissão para acessar essa página")
        }else{
            localStorage.setItem("token", token)
            window.location.href = "./logout.html";
        }
    } catch (error) {
        alert(`Erro ao logar - ${error}`)
    }
}
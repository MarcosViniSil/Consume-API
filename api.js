async function getApi(cep) {
    const url = `https://cdn.apicep.com/file/apicep/${cep}.json`
    let valuesApi = []
    const response = await fetch(url)
    const result = await response.json()
    valuesApi.push(result.address)
    valuesApi.push(result.city)
    valuesApi.push(result.code)
    valuesApi.push(result.district)
    valuesApi.push(result.state)

    return valuesApi



}

function getCep() {
    let cep = document.getElementById("cep").value.toString()
    if (cep.length === 8) {
        let cepFormated = ""
        for (let i = 0; i < cep.length; i++) {
            if (i === 4) {
                cepFormated += cep.charAt(i)
                cepFormated += "-"
            } else {
                cepFormated += cep.charAt(i)
            }
        }
        return cepFormated

    } else {
        window.alert("Cep inválido")
        return null
    }

}



async function getPs() {
    let address = document.getElementById("address")
    let city = document.getElementById("city")
    let code = document.getElementById("code")
    let district = document.getElementById("district")
    let state = document.getElementById("state")

    const cep = getCep()
    if (cep !== null) {
        let valuesP = await getApi(cep)
        console.log(valuesP)
        address.innerHTML = valuesP[0]
        city.innerHTML = valuesP[1]
        code.innerHTML = valuesP[2]
        district.innerHTML = valuesP[3]
        state.innerHTML = valuesP[4]
    }
}


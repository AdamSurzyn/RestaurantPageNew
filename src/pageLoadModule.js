const firstPageLoad = () => {

    const container = document.querySelector("#content")

    const makeDiv = (id) =>{
        let div = document.createElement("div")
        div.id = id
        return  div
    }


    container.appendChild(makeDiv("header"))
    document.querySelector("#content div").appendChild(makeDiv("placeholder"))


}

export default firstPageLoad
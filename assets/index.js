const buttonCopNow = document.getElementById("button-cop-now")
const hargaCopNow = document.getElementById("harga-cop-now")
console.log(buttonCopNow)

buttonCopNow.addEventListener("click", () => {
    console.log("Button cop now di klik");
    buttonCopNow.innerText = "Button klik"
    hargaCopNow.innerText = "Rp3.499.000"
    
})

const BASE_URL = "https://api-web-run.vercel.app/api/v1"
const listSepatu = document.getElementById("list-sepatu")

const fetchData = async () => {
    const response = await fetch (`${BASE_URL}/shoe`)
    const responseData = await response.json()

    console.log(responseData)
    listSepatu.innerHTML = responseData.data.map(sepatu => {
    return ` <div class="col-4">
                <div class="card rounded-5 overflow-hidden"> 
                    <div class="img-wrapper">
                    <img src="${sepatu.imageUrl}" alt="${sepatu.model}" class="img-card-top"></div>
                    <div class="card-body">
                        <h5 class="card-title"
                         >${sepatu.model}
                        </h5>
                         <p class="card-text">
                            Rp ${sepatu.price.toLocaleString(`id-ID`)}
                         </p>
                         <button class="btn btn-outline-dark w-100 rounded-pill">Quick View</button>
                    </div>
                </div>
            </div>`
    }).join("")
}
fetchData()



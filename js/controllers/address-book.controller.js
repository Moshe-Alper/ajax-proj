'use strict'

function onInit() {
    getList(renderList)

}

function renderList(data) {

    const elAddressSection = document.querySelector('.address-section')
    const strHTML = data.map(address => `
 <article class="address-book-item">
            <h3 class="info-name">${address.lname}, ${address.fname}</h3>
            <img src="https://robohash.org/${address.fname} ${address.lname}" alt="User Image">
            <ul class="info">
                <li>
                    Phone: <span class="info-phone">${address.tel}</span>
                </li>
                <li>
                    City: <span class="info-city">${address.city}</span>
                </li>
                <li>
                    State: <span class="info-state">${address.state}</span>
                </li>
                <li>
                    Zip: <span class="info-zip">${address.zip}</span>
                </li>
                <li>
                    Address: <span class="info-address">${address.address}</span>
                </li>
            </ul>
        </article>
        `)
        
        elAddressSection.innerHTML = strHTML.join('')
}
'use strict'

function getList(cb) {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const list = JSON.parse(xhr.responseText)
            cb(list)
        }
    }
    xhr.open('GET', 'lib/FillTextAPI.json', true)
    xhr.send()
}
console.log("JavaScript File is Connected")

let result =
{
    "tag": "",
    "free": false,
    "role": false,
    "user": "akshaykumar",
    "email": "akshaykumar@amity.edu.com",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "amity.edu.com",
    "reason": "invalid_mx",
    "mx_found": false,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}

// for(item of Object.keys(result))
// {
//     console.log(item)
// }

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log('Clicked!')
    resultCont.innerHTML = `<img width="123" src="img/loading.svg" alt="">`
    let key = "ema_live_kQuKPxf8QKdyqg9MaUk2u6Kt0VK5jRUYSVaYm8Pv";
    let email = document.getElementById("username").value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``

    for (key of Object.keys(result)) {
        if (result[key] !== "" && result[key] !== " ") {
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }

    console.log(str)
    resultCont.innerHTML = str
});

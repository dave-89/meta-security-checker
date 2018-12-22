function makeTableHTML(myArray) {
    var result = "<table border=1>";
    for (var i = 0; i < myArray.length; i++) {
        result += "<tr>";
        for (var j = 0; j < myArray[i].length; j++) {
            result += "<td>" + myArray[i][j] + "</td>";
        }
        result += "</tr>";
    }
    result += "</table>";
    return result;
}

function fetchData(url, api_key) {
    fetch('/check', {
        method: "POST",
        headers: {
            "x-api-key": api_key,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "url": url
        })
    })
        .then(response => {
            if (response.status == 200) {
                return response.json();
            }
            else if (response.status == 401) {
                throw {
                    type: "custom",
                    text: "Wrong API key"
                }
            }
            else {
                throw {
                    type: "custom",
                    text: "Something went wrong with the API :("
                }
            }
        })
        .then(json => {
            renderTable(json);
        })
        .catch(error => {
            if (error.hasOwnProperty("type")) {
                document.getElementById("results").innerHTML = error.text;
            } else {
                document.getElementById("results").innerHTML = "Something went wrong :(";
            }
            console.log(error);
        });
}

function clickMe() {
    const url = document.getElementById("url").value;
    const key = document.getElementById("key").value;
    console.log(`URL: ${url}`);
    console.log(`key: ${key}`);
    fetchData(url, key);
}

function renderTable(data) {
    document.getElementById("results").innerHTML = makeTableHTML(data.tags);
}
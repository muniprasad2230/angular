function getdata(){ 
    return fetch('https://api.covid19india.org/state_district_wise.json')
        .then(response => response.json())
        // .then(allData => allData )
}

function getStates(allData) {
    var stateList = []
    for(state in allData) {
        stateList.push(state)
    }
    return stateList
}

async function maindata() {
    var allData  = await getdata()
    console.log(allData)
    var states = getStates(allData)
    console.log(states)
}

maindata()


const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "L"},
    {year: "2016", result: "N/A"}
]

function superbowlWin(teamRecord){
    const winElement = teamRecord.find(compareWin)

    if(winElement !== undefined){
        return winElement.year
    }
    else{
        return winElement
    }
    
}

function compareWin(element){
    return element.result === "W"
}




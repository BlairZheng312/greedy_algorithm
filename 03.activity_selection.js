// to select the most activities that are not conflicted with each other
// the activity that finishes the earliest must be part of the solution

let actSchedule = [
    { name: 'a1', start: 1, finish: 4 },
    { name: 'a2', start: 8, finish: 12 },
    { name: 'a3', start: 0, finish: 6 },
    { name: 'a4', start: 5, finish: 7 },
    { name: 'a5', start: 12, finish: 16 },
    { name: 'a6', start: 3, finish: 9 },
    { name: 'a7', start: 6, finish: 10 },
    { name: 'a8', start: 8, finish: 11 },
    { name: 'a9', start: 3, finish: 5 },
    { name: 'a10', start: 2, finish: 14 },
    { name: 'a11', start: 5, finish: 9 }
]

function activitySelection(actSchedule) {
    // sort activities by finish time
    actSchedule.sort((a, b) => a.finish - b.finish)
    let selectedActivities = []
    selectedActivities.push(actSchedule[0])
    let actNumber = actSchedule.length
    for (let i = 1; i < actNumber; i++) {
        // always choose the next not-conflicted, earliest-finished activity
        if (actSchedule[i].start >= selectedActivities[selectedActivities.length - 1].finish) {
            selectedActivities.push(actSchedule[i])
        }
    }

    return selectedActivities
}

console.log(activitySelection(actSchedule))

let activities = [
  {
    start: 2,
    end: 5,
  },
  {
    start: 1,
    end: 7
  },
  {
    start: 3,
    end: 6,
  },
  {
    start: 9,
    end: 12
  },
  {
    start: 1,
    end: 4
  },
  {
    start: 8,
    end: 12
  },
  {
    start: 5,
    end: 9
  }
];

function findActivityList(activities) {
  let sorted = activities.sort((a, b) => {
    return a.end > b.end;
  });

  let selectedActivities = [];
  selectedActivities.push(sorted[0]);

  for(let i = 1; i < activities.length; i++) {
    if(activities[i].start >= selectedActivities[selectedActivities.length - 1].end) {
      selectedActivities.push(activities[i]);
    }
  }
  return selectedActivities;
}


console.log('FINDING ACTIVITIES');
console.log(findActivityList(activities));
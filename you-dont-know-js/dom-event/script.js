// Code goes here



//Event Propigation

//Let the html document tree load before executing code

// https://codepen.io/davidicus/details/trhme
// https://www.sitepoint.com/event-bubbling-javascript/

window.onload = () => {
    let listNode = document.getElementById('courseList');
    console.log(listNode);

    //Add a node to list
    let listItemNode = document.createElement('li');
    let listItemText = document.createTextNode('Introduction To DOM');

    listItemNode.appendChild(listItemText);
    listNode.appendChild(listItemNode);

    //Create Event Listeners
    let listItems = listNode.getElementsByTagName('li');
    console.log(listItems);

    //listItems.forEach((item) => {
    //    item.addEventListener();
    //  });

    for(let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('click', (e) => {
            e.stopPropagation(); //Stops event from bubbling up to ul
            e.stopImmediatePropagation(); //Stops other event listeners of same type from running
            console.log('List Item CLicked')
        });

        listItems[i].addEventListener('click', (e) => {
            //e.stopPropagation();
            console.log('List Item CLicked Again')
        });
    }

    //DOM && Windows
    console.log(document == window); //false
    console.log(document === window); //false
    console.log(window.document);

    var a = [];
    a.unshift(1);
    a.unshift(2);
    a.shift(); //Removes first
    a.unshift(3, [4,5]);
    a.shift();
    console.log(a);
}

function clickTest() {
    console.log('Clicked the UL');
}

function clickTest2() {
    console.log('Span Clicked');
}

//Learn more about event phases
// https://developer.mozilla.org/en-US/docs/Web/API/Event/eventPhase
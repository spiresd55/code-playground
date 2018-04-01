// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let traversalArr = [root, 's'];
    let levelWidth = [0];

    while(traversalArr.length > 1) {
        let currentNode = traversalArr.shift();

        if (currentNode === 's') {
            levelWidth.push(0);
            traversalArr.push('s');
        } else {
           traversalArr.push(...currentNode.children);
           levelWidth[levelWidth.length -1]++;
        }
    }

    return levelWidth;
}

module.exports = levelWidth;

import fs from 'fs/promises';

const text = await fs.readFile('source.txt', 'utf-8');
const arr = text.split('\n');
const lenArr = arr.length

const resultPuzzle = arr.reduce((acc, item, ind) => {
    let currItem = item
    let temp = []
    temp.push(item)
    for (let x = ind + 1; x < lenArr; x++) {
        if (currItem.slice(-2) === arr[x].slice(0, 2)) {
            temp.push(arr[x].slice(2))
            currItem = arr[x]
        }
    }
    if (temp.length > 1) temp.push(currItem)

    return acc.length < temp.length ? temp : acc
}, [])

await fs.writeFile(
    'puzzle.json',
    JSON.stringify(resultPuzzle ),
    'utf-8'
);
// let result =resultPuzzle.join("")
// console.log(result  )

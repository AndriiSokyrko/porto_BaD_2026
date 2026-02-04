import fs from 'fs/promises';

const text = await fs.readFile('source.txt', 'utf-8');
const arr = text.split('\n');
const lenArr = arr.length

const resultPuzzle = arr.reduce((acc, item, ind) => {
    let currItem = item
    let temp = []
    temp.push(item)
    for (let x = 0; x < lenArr; x++) {
        if (currItem.slice(-2) === arr[x].slice(0, 2)) {
            //не знаю як рахувати - з повторюючими чи без повторюючих чисел
            // temp.push(arr[x].slice(2))
            temp.push(arr[x])
            currItem = arr[x]
            for (let y = 0; y < lenArr; y++) {
                if (currItem.slice(-2) === arr[y].slice(0, 2)) {
                    if(temp.indexOf(arr[y])===-1){
                        // temp.push(arr[y].slice(2))
                        temp.push(arr[y])
                        currItem = arr[y]
                    }
                }
            }
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
let result =resultPuzzle.join("")
console.log(result  , result.length )

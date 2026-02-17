import fs from 'fs/promises';

const text = await fs.readFile('source.txt', 'utf-8');
const arr = text.split('\n');
const lenArr = arr.length
let result = []

function sub(item, temp) {
    let x = 0
    let currItem = item
    for (x; x < lenArr; x++) {
        if (currItem.slice(-2) === arr[x].slice(0, 2)) {
            if (!temp.includes(arr[x])) {
                currItem = arr[x]
                temp.push(arr[x])
                sub(currItem, temp)
            }
        }
    }
    return temp
}

function resultPuzzle() {
    return arr.reduce((acc, item) => {
        let currItem = item
        let temp = [item]
        temp = sub(item, temp)
        return result.length < temp.length ? temp : result
    }, [])

}

function print() {
    let result = resultPuzzle()
    let len = result.length
    let finish = [result[0]]
    let x = 0
    for (x; x < len; x++) {
        if (x > 0 && x < len - 1) {
            finish.push(result[x].slice(-4))
        }
    }
    finish.push(result[x])
    finish = result.join("")
    console.log('Length of the puzzle chain: ',finish.length)
    console.log(finish)
}

print()


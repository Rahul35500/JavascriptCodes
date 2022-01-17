
const duplicatesArray = [1, 2, 4, 6, 7, 1, 2, 4, 6];
const anotherArray = [];
let k = 0;
for (let i = 0; i < duplicatesArray.length; i++) {
    for (let j = i + 1; j < duplicatesArray.length; j++) {
        if (duplicatesArray[i] == duplicatesArray[j]) {
            anotherArray[k] = duplicatesArray[j];
            k++;

        }
    }
}


console.log(anotherArray);

//valid []
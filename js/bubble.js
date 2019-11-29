export function bubbleSort(arr) {
    for (let j = 0; j < arr.length - 1; j++) {
        let isRepeat = false;
        for (let i = 0; i < arr.length - j - 1; i++) {
            const element = arr[i];
            if (element > arr[i + 1]) {
                arr[i] = arr[i + 1];
                arr[i + 1] = element;
                isRepeat = true;
            }
            // console.log(j, i, arr);
        }
        if (isRepeat === false) break;
    }
    return arr;
}
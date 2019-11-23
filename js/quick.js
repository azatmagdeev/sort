export function quickTime(arr) {
    const time = Date.now();
    quickSort(arr);
    console.log('quick ' + (Date.now() - time) / 1000 + ' sec');
}

function quickSort(arr) {
    // console.log('arr', arr);
    const support = arr[0];
    const left = [];
    const right = [];
    const center = [];

    for (const el of arr) {
        el < support ? left.push(el) :
            el > support ? right.push(el) :
                center.push(el)
    }
    // console.log('left', left, 'center', center, 'right', right);
    let sortedLeft;
    left.length > 1 ? sortedLeft = quickSort(left) : sortedLeft = [...left];
    let sortedRight;
    right.length > 1 ? sortedRight = quickSort(right) : sortedRight = [...right];
    return [...sortedLeft, ...center, ...sortedRight];
}
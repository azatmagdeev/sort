export function quickSort(arr) {
    const support = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    const center = [];

    for (const el of arr) {
        el < support ? left.push(el) :
            el > support ? right.push(el) :
                center.push(el)
    }
    let sortedLeft;
    left.length > 1 ? sortedLeft = quickSort(left) : sortedLeft = [...left];
    let sortedRight;
    right.length > 1 ? sortedRight = quickSort(right) : sortedRight = [...right];
    return [...sortedLeft, ...center, ...sortedRight];
}

export function quickSort2(arr) {

    const support = arr[0];
    const left = [];
    const right = [];
    const center = [];

    for (const el of arr) {
        el < support ? left.push(el) :
            el > support ? right.push(el) :
                center.push(el)
    }

    let sortedLeft;
    left.length > 1 ? sortedLeft = quickSort(left) : sortedLeft = [...left];
    let sortedRight;
    right.length > 1 ? sortedRight = quickSort(right) : sortedRight = [...right];
    return [...sortedLeft, ...center, ...sortedRight];
}
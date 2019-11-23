// array generation
export function arrGen(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr[i] = Math.floor(Math.random() * length)
    }
    return arr
}
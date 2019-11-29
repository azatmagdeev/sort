export function heapSort(arr) {
    const sortedArr = [];

    function checkChildren(i) {
        let parent = arr[i];
        // console.log('start parent', parent);
        const firstChild = arr[2 * i + 1];

        if (parent > firstChild) {
            // console.log('1..child', i, arr);
            arr[i] = firstChild;
            arr[2 * i + 1] = parent;
            // parent = arr[i];
            // console.log('parent change', parent);
            // console.log('2__child', i, arr);
            checkParent(i)
        }
        const secondChild = arr[2 * i + 2];
        parent = arr[i];

        if (parent > secondChild) {
            // console.log('wtf parent', parent);
            // console.log('3..child', i, arr);// 3..child 1 (5) [1, 2, 3, 4, 0]
            arr[i] = secondChild;
            arr[2 * i + 2] = parent;
            // parent = arr[i];
            // console.log('4__child', i, arr);//4__child 1 (5) [1, 0, 3, 4, 1]
            checkParent(i)
        }
    }

    function checkParent(i) {
        // console.log('1..parent', i, arr);
        if (i > 0) {
            let parent;
            let j;
            if (i % 2 === 1) {
                j = (i - 1) / 2;
                parent = arr[j];
            }
            if (i % 2 === 0) {
                j = (i - 2) / 2;
                parent = arr[j];
            }
            if (parent > arr[i]) {
                arr[j] = arr[i];
                arr[i] = parent;
                // console.log('2__parent', i, arr);
                checkParent(j)
            }

        }
    }

    function repeat(arr) {

        for (let i = 0; i < arr.length; i++) {
            // console.log(i);
            checkChildren(i);
        }

        sortedArr.push(arr[0]);
        // console.log('sorted', sortedArr);
        arr.shift();
        // console.log('arr', arr);
        if (arr.length < 1) {
            return sortedArr
        } else {
            repeat(arr)
        }
    }

    repeat(arr)

}

export function heapSort2 (arr){

}
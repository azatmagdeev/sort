import {arrGen, sortedArrGen} from "./arrGen.js";
import {bubbleSort} from "./bubble.js";
import {quickSort, quickSort2} from "./quick.js";
import {heapSort} from "./heap.js";
// import {test} from "./__test__.js";

const root = document.querySelector('#root');

document.querySelector('#length')
    .addEventListener('click', e => {
        console.log(e.target);
        root.innerHTML = '';
        e.preventDefault();


        const arr = arrGen(e.target.id);
        const sortedArr = sortedArrGen(e.target.id);

        const algorithms = [
            bubbleSort,
            quickSort,
            quickSort2,
            heapSort
        ];

        for (const algorithm of algorithms) {

            // const tester  = document.createElement('div');
            // tester.innerHTML = `${algorithm.name} ${test(algorithm)}`;
            // root.appendChild(tester);

            const time = Date.now();
            algorithm(arr);
            const result = document.createElement('div');
            result.innerHTML = `${algorithm.name} (random array) ${(Date.now() - time) / 1000} sec`;
            root.appendChild(result);

            const time2 = Date.now();
            algorithm(sortedArr);
            const result2 = document.createElement('div');
            result2.innerHTML = `${algorithm.name} (sorted array) ${(Date.now() - time2) / 1000} sec`;
            root.appendChild(result2)
        }
    });





import {arrGen} from "./arrGen.js";
import {bubbleSort} from "./bubble.js";
import {quickTime} from "./quick.js";


document.querySelector('button')
    .addEventListener('click', e => {
        e.preventDefault();


        const loadingImg = new Image(300);
        loadingImg.src = "https://assets.materialup.com/uploads/91aba1c5-40bd-4356-849f-f6f1543638dd/preview.gif";
        loadingImg.alt = "please, wait!";

        document.querySelector('#root').appendChild(loadingImg);

        const arr = arrGen(document.querySelector('#length').value);

        bubbleSort(arr);

        quickTime(arr);


    });





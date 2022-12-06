#!/usr/bin/env node
import commonLogic from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';

const nod = () => {
    const manual = () => {
        const data = {};
        const namberOne = Math.floor(Math.random() * 101);
        const namberTwo = Math.floor(Math.random() * 101);
        const expression = `${namberOne} ${namberTwo}`;
        data.question = expression;

        const arrayOfNumbers = [namberOne, namberTwo];
        const minNumber = Math.min(...arrayOfNumbers);
        const maxNumber = Math.max(...arrayOfNumbers);
        let greaterNumber = maxNumber;
        let smallerNumber = minNumber;

        const dividers = []; // хранит делители меньшего числа
        for (let i = smallerNumber; i > 0; i -= 1) {
            if (smallerNumber % i === 0) {
                dividers.push(i);
            }
        }
    /* Ниже представлено нахождение наибольшего общего делителя Двух чисел
       Используя перебор всех найденных делителелей     
    */         
        for (let i = 0; i < dividers.length; i += 1) { 
            if (greaterNumber % dividers[i] === 0) {
                data.reply = String(dividers[i]);
                break;
            }
        }
        return data;
    };
    commonLogic(manual, description);
};
nod()

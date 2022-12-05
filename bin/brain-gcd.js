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
        const MaxNumber = Math.max(...arrayOfNumbers);
        const dividers = [];                           // хранит делители 
        for (let i = minNumber; i > 0; i -= 1) {
            if (MaxNumber % i === 0) {
                dividers.push(i);
            }
        }
    /* Ниже представлено нахождение наибольшего общего делителя Двух чисел
       Используя перебор всех найденных делителелей     
    */         
        for (let i = 0; i < dividers.length; i += 1) { 
            if (MaxNumber % dividers[i] === 0) {
                data.reply = String(dividers[i]);
            }
        }
        return data;
    };
    commonLogic(manual, description);
};
nod()

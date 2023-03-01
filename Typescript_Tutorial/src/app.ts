// Interface
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'Pedro',
    age: 35,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I have spent¡', amount);
        return amount;
    }
}

import { Invoice } from "./classes/Invoice.js";

const testInvoice = new Invoice('Pedro', 'work on the mario website', 250);
const testInvoice2 = new Invoice('Luigi', 'work on the mario website', 200);

let invoices: Invoice[] = [];
invoices.push(testInvoice);
invoices.push(testInvoice2);

invoices.forEach((invoice: Invoice) => {
    console.log(invoice.client, invoice.amount, invoice.format());
})

// HTML form
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// Form inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// Add event listener to the form
form.addEventListener('submit', (e:Event) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
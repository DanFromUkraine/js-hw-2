let balance = 23500;
const price = 3000;
const amount = prompt('Кількість товарів');


if (amount !== null) {
    if(balance - price * amount >= 0) {
        balance -= price * amount;
        console.log(balance);
        alert(`Замовлення пройшло успішно. Дякуємо за покупку! Ви замовили ${amount} товарів на суму ${price * amount} грн. На рахунку залишилось ${balance} грн`);
    } else {
        alert("Недостатньо коштів на рахунку!");
    }

}  else  { alert("Відмінено")}
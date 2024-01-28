
let total = 100;
let ordered = 200;

if (total > ordered) {
    total -= ordered;
    console.log(total);
    alert(`Замовлення пройшло успішно. Дякуємо за покупку! Ви замовили ${ordered} товарів`);
} else {
    alert(`Нажаль на складі недостатньо товарів! На даний момент ви можете замовити лише ${total} товарів`);
}
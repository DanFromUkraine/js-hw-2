


let password = function (word) {
    const ADMIN_PASSWORD = 228;
    return word === ADMIN_PASSWORD;
}

let word = Number(prompt('Введіть пароль')); 

if (password(word) === true) alert('Вітаємо, адміністраторе!');
    else if (password(word) === false) alert ('Не вітаємо, спробуйте ще раз!');

console.log(password(word));

// я доволі довго морочився із prompt, тож кілька разів переписував все завдання. Передостанній раз був із функцією. Тому я щоб з нуля все не писати переписав завдання частково





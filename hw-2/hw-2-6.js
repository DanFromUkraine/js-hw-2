let add;
let total = 0;

do {
    add = prompt('Введіть число');
    if (add !== null) {
        
        add = Number(add);
        total += add;
    } else {
        alert('Відмінено');
        break;

    }
   
    alert(total);
}
while (add != null);

alert (`Всього: ${total}`);
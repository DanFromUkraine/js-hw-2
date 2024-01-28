let country = prompt('Введіть країну і ми вам виведемо вартість доставки');
country = country.toLowerCase();
let price = 0;
if (country === 'китай') price = 100;
 else if (country === 'чилі') price = 250;
  else if (country === 'австралія') price = 170;
   else if (country === 'індія') price = 80;
    else if (country === 'ямайка') price = 120;
alert(`Доставка в ${country} буде коштувати ${price} грн.`);
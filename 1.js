const degreesСelsius = Number.parseFloat(prompt('Введите температуру в градусах Цельсия:'));

alert(`Цельсий: ${degreesСelsius}, Фаренгейт: ${Math.floor(((9/5)*degreesСelsius+32)*10)/10}`);
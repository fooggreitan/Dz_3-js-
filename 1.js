function temperature()
{
    const a  = Number.parseFloat(prompt(`Введите температуру в градусах Цельсия`));
    const b = Number.parseFloat(prompt(`Введите температуру в градусах Фаренгейтах`));
    alert(`Цельсия: ${a}, Фаренгейт: ${b}`)

    const translationInFahrenheit = (9/5) * a + 32;
    alert(`Перевод градусов Цельсия в градусы Фаренгейта = ${translationInFahrenheit.toFixed(2)}`)
}

temperature()
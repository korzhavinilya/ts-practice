# Regular Expression

Состоит из шаблона и необязательных флагов

2 синтаксиса:
- new RegExp("шаблон", "флаги")
- /шаблон/флаги

## Флаги

- i - поиск не зависит от регистра: нет разницы между A и a
- g - поиск ищет все совпадения, без него – только первое
- m - многострочный режим
- s - включает режим «dotall», при котором точка . может соответствовать символу перевода строки \n
- u - включает полную поддержку Юникода. Флаг разрешает корректную обработку суррогатных пар
- y - режим поиска на конкретной позиции в тексте

## Методы
- str.match(regexp) - возвращает совпадения с регулярным выражением. Имеет режимы;
    - если есть флаг g, возвращает массив всех совпадений
    - если такого флага нет, то возвращает первое совпадение в виде массива, и поля с дополнительной информацией
    - если совпадений нет, вернёт null
- str.replace - заменяет совпадения с regexp в строке str на replacement. В строке замены replacement мы можем использовать специальные комбинации символов для вставки фрагментов совпадения
- regexp.test - проверяет, есть ли хоть одно совпадение, если да, то возвращает true

## Символьные классы (character classes)
- \d - decimal любая одна цифра
- \s - space пробельные символы: включает в себя символ пробела, табуляции \t, перевода строки \n
- \w - word буква латинского алфавита или цифра или подчёркивание _. Нелатинские буквы не являются частью класса \w
- . - точка, любой символ кроме новой строки

## Обратные символьные классы (negation classes)
- \D - не цифра
- \S - не пробел
- \W - не буквы латиницы

## Якоря (anchors)
- ^ - начало текста
- $ - конец текста
# Intl (internalization)

## Info

Локаль – описывается строкой из трёх компонентов, которые разделяются дефисом:

- Код языка.
- Код способа записи.
- Код страны.

Examples:

- ru – русский язык, без уточнений.
- en-GB – английский язык, используемый в Англии (GB).
- en-US – английский язык, используемый в США (US).

## Intl.Collator

Comparing strings

```
let collator = new Intl.Collator([locales, [options]])
```

alternative:

```
let str = "ёжик";

alert( str.localeCompare("яблоко", "ru") ); // -1
```

## DateTimeFormat

Formatting dates

```
let formatter = new Intl.DateTimeFormat([locales, [options]])
```

alternative:

```
Date.prototype.toLocaleDateString([locales [, options]])
Date.prototype.toLocaleTimeString([locales [, options]])
```

## NumberFormat

Formatting numbers, currency and percents

```
let formatter = new Intl.DateTimeFormat([locales, [options]])
```

alternative:

```
Number.prototype.toLocaleString([locales [, options]])
```

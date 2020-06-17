# 2.3.2 - JS Fundamentals / Timing and delay

---

## [setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp)

```js
setTimeout(function(){
    alert('Hello');
}, 3000);

//doesnt need to be an alert, can be console.log, etc...
//3000 is miliseconds, makes it appear after 3 seconds
```

---

## [setInterval()](https://www.w3schools.com/jsref/met_win_setinterval.asp)

```js
setInterval(function(){
    alert('Hello');
}, 3000)

//same thing but happens over and over every 3000 miliseconds.
```

---

💡 Always use `clearInterval` to stop your `setInterval` loop

This will require the `setInterval` to be declared.

```js
// Example
const makeBacon = function (){
    const amount = Math.floor(Math.random() * 6);
    let output = '';
    for (let i = 0; i < amount; i++) {
        output+= 'bacon';
    }
    console.log(output);
}
const baconInterval = setInterval(makeBacon, 3000);
//clearInterval(baconInterval);
```

---

Workshop time!

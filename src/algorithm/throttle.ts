function throttle(callback: (...args: any[]) => void, delay: number) {
  let isThrottled = false;

  return (...args: any[]) => {
    if (isThrottled) {
      return;
    }

    callback(...args);

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
    }, delay);
  };
}

function mouseMove(x: number, y: number) {
  console.log(`Mouse: ${x} ${y}`);
}

function getRandValue() {
  return Math.round(Math.random() * 3);
}

const throttledMouseMove = throttle(mouseMove, 1000);

setInterval(() => {
  throttledMouseMove(getRandValue(), getRandValue());
}, 200);

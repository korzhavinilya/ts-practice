function fetchUrl(url: string) {
  console.log(`Fetching url ${url}`);
}

function debounce(callback: (...args: any[]) => void, delay: number) {
  let timer: NodeJS.Timeout;

  return (...args: any[]) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const debouncedFetch = debounce(fetchUrl, 300);

debouncedFetch(1);
debouncedFetch(2);
debouncedFetch(3);
debouncedFetch(4);
debouncedFetch(5);

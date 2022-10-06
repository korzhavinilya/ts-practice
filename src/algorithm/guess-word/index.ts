class Guesser {
    public static guess(wordA: string, wordB: string) {
      let hit = 0;
      for (let i = 0; i < 6; i++) {
        if (wordA[i] === wordB[i]) {
          hit++;
        }
      }
      return hit === 0 ? -1 : hit;
    }
  }
  
  class Master {
    constructor(private readonly secretWord: string) {}
  
    public guess(word: string) {
      return Guesser.guess(this.secretWord, word);
    }
  
    public showWord() {
      return this.secretWord;
    }
  }
  
  class WordGenerator {
    private static readonly alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
    public static generate(count: number, letters: number) {
      return this.getRandomWords(count, letters);
    }
  
    private static getRandomWords(count: number, letters: number) {
      const words: string[] = [];
      for (let i = 0; i < count; i++) {
        words.push(this.getRandomWord(letters));
      }
      return words;
    }
  
    private static getRandomWord(letters: number) {
      let word = '';
      for (let i = 0; i < letters; i++) {
        word += this.getRandomLetter();
      }
      return word;
    }
  
    private static getRandomLetter() {
      const index = Math.floor(Math.random() * 25);
      return this.alphabet[index];
    }
  }
  
  function selectRandomWord(words: string[], count: number) {
    return words[Math.floor(Math.random() * count - 1)];
  }
  
  const count = 100;
  const words = WordGenerator.generate(count, 6);
  const master = new Master(selectRandomWord(words, count));
  
  function solution(words: string[], master: Master, attempts: number = 1) {
    if (attempts > 10) {
      return 'You are lose!';
    }
  
    attempts++;
  
    const randomIndex = Math.floor(Math.random() * (words.length - 1));
    const randomWord = words[randomIndex];
    const hits = master.guess(randomWord);
  
    if (hits === 6 && master.showWord() === randomWord) {
      return 'You are win! The word is ' + randomWord;
    } else if (hits >= 1) {
      const newWords = words.filter(
        (word) => Guesser.guess(word, randomWord) >= hits
      );
      return solution(newWords, master, attempts);
    }
    return solution(words, master, attempts);
  }
  
  console.log(solution(words, master));
  
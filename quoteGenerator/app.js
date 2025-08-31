const quotebtn = document.querySelector('#newquote');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');

const quotes = [
    {
        quote: "In the middle of every difficulty lies opportunity.",
        person:'–Albert Einstein'
    },
      {
        quote: "In Success is not final, failure is not fatal: it is the courage to continue that counts.",
        person:'–Winston Churchill'
    },
      {
        quote: "Happiness is not something ready-made. It comes from your own actions",
        person:'–Dalai Lama'
    },
      {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        person:'–Eleanor Roosevelt'
    },
      {
        quote: "Do not pray for an easy life, pray for the strength to endure a difficult one",
        person:'–Bruce Lee'
    },
      {
        quote: "In three words I can sum up everything I’ve learned about life: it goes on.",
        person:'–Robert Frost'
    },
      {
        quote: "The best way to find yourself is to lose yourself in the service of others.",
        person:'–Mahatma Gandhi'
    },
      {
        quote: "Not everything that is faced can be changed, but nothing can be changed until it is faced.",
        person:'–ames Baldwin'
    }
]

quotebtn.addEventListener('click',function generatequote(){
    const random = Math.floor(Math.random() * quotes.length)
    
        quote.innerText = quotes[random].quote;
        person.innerText = quotes[random].person
})


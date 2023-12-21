
function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widget1 = document.querySelector('.quoteoftheday')
  widget1.classList.add('widget')

  const widget2 = document.querySelector('.corporatespeak')
  widget2.classList.add('widget')

  const widget3 = document.querySelector('.countdown')
  widget3.classList.add('widget')

  const widget4 = document.querySelector('.friends')
  widget4.classList.add('widget')

//welp
  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const randomIndx = Math.floor(Math.random() * quotes.length)
  

  const randomQuote = quotes[randomIndx]
  

  const quote = document.createElement('div')
  const quoteText = randomQuote.quote
  quote.textContent = quoteText
  
  widget1.appendChild(quote)

 //author and date

 const authorDate = document.createElement('div')
 const {author, date} = randomQuote
 
 authorDate.textContent = `${author} in ${date||'an unknown date'}`
 
 
 
 
 
 widget1.appendChild(authorDate)
 


  

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here

 const randomVerb = Math.floor(Math.random() * verbs.length)
 
 const randomVerbs = verbs[randomVerb]

//
const randomVerb2 = Math.floor(Math.random() * verbs.length)
 
 const randomVerbs2 = verbs[randomVerb2]

//
const randomNoun = Math.floor(Math.random() * nouns.length)

const randomNouns = nouns[randomNoun]

//
const randomNoun2 = Math.floor(Math.random() * nouns.length)

const randomNouns2 = nouns[randomNoun2]

//
const randomAdverb = Math.floor(Math.random() * adverbs.length)

const randomAdverbs = adverbs[randomAdverb]

//
const randomAdverb2 = Math.floor(Math.random() * adverbs.length)

const randomAdverbs2 = adverbs[randomAdverb2]



const corpTalk = `We need to ${randomVerbs} our ${randomNouns} ${randomAdverbs} in order to ${randomVerbs2} our ${randomNouns2} ${randomAdverbs2}.`
 

 const corpSpeak = document.createElement('p')
 corpSpeak.textContent = corpTalk
 

 widget2.appendChild(corpSpeak)



  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  let count = 5
  const countDown = document.createElement('p')
  
  
  widget3.appendChild(countDown)
  countDown.textContent = `T-minus ${count}...`

  const id = setInterval(() => {
    
    if (count === 1) {
      countDown.textContent = 'Liftoff! 🚀'
      clearInterval(id)
    } else {
    count--
    countDown.textContent = `T-minus ${count}...`
    }
  },1000)


  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  const randomPerson = people[Math.floor(Math.random() * people.length)]
  const peoplesFriends = document.createElement('p')
  widget4.appendChild(peoplesFriends)
  const year = randomPerson.dateOfBirth.split('-')[0]
  let sentence = `${randomPerson.fname} ${randomPerson.lname} was born in ${year} and `
  
  if (!randomPerson.friends.length) {
    sentence += 'has no friends.'
  } else {
    sentence += 'is friends with '
    for (let idx = 0; idx < randomPerson.friends.length; idx++) {
      const friendId = randomPerson.friends[idx]
      
       
  
  const friend = people.find(p => p.id === friendId)
  const fullName = `${friend.fname} ${friend.lname}`
  console.log(fullName)
  let isLastIdx = idx === randomPerson.friends.length - 1
  let isNextToLastIdx = idx === randomPerson.friends.length - 2
  if (isLastIdx) {
  sentence += `${fullName}.`
  } else if (isNextToLastIdx) {
    sentence += `${fullName} and `
  } else {
    sentence += `${fullName}, `
  }
  

    } 
  }
  peoplesFriends.textContent = sentence
 


  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
  const widgets = document.querySelectorAll('section>div')
  widgets.forEach((widget, idx) => {
    widget.setAttribute('tabIndex', idx + 1 )
  })

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()

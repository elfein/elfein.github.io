$(function () {
    console.log('present')

    const quotes = [
        '“I\’m going to mark your cognition level at fifty-five percent.”<br>“Fuck you.”<br>“Let\’s make that sixty percent.”',
        'I can\’t tell if that\’s you being passive aggressive or you being willfully obtuse.',
        'So the plan wasn\’t a clusterfuck yet, it was just circling the clusterfuck target zone getting ready to come in for a landing.',
        'Ugh, emotions.',
        'I was having an emotion, and I hate that.',
        'I hate having emotions about reality; I\’d much rather have them about Sanctuary Moon.',
        'I hate caring about stuff. But apparently once you start, you can\'t just stop.',
        'There needs to be an error code that means "I received your request but decided to ignore you."',
        '"I remember every word anyone ever said to me." That was a lie. Who would want that?',
        'There is a lot about what is going on here that I don\’t understand. But I am participating anyway.',
        '<h1>BOLDNESS IS ALL</h1>',
        'It would have been hilarious if I wasn\’t about to die. It was still a little hilarious.',
        'The upside was paranoid attention to detail. The downside was also paranoid attention to detail.',
        'It wasn’t dead, it was just catastrophically damaged. (I know, who isn\’t?)',
        'How humans decide what to do with their arms on a second by second basis, I still have no idea.',
        'Oh shit, my media! ...No, wait, I had access to some of it.',
        'I can also be kind of an asshole. (“Kind of” = in the 70 percent–80 percent range.)',
        'Humans can miss a lot of little clues, but me being able to fire energy weapons from my arms would be something of a red flag.',
        'I am actually trying my best despite the fuck-ups.',
        'I don\'t make threats, I\'m just telling you what I\'m going to do.',
        '“That could be a good sign, right?” <br>“Sure,” I said. It was a terrible sign.',
        'Again, I know in the telling it sounds like I was on top of this situation but really, I was still just thinking, <em>Oh shit oh shit oh shit.</em>',
        'Maybe it was something subliminal. Actually, it felt pretty liminal. Pro-liminal. Up-liminal?',
        '(Confession time: that moment, when the humans or augmented humans realize you\’re really here to help them. I don\’t hate that moment.)'
    ]

    const quote = quotes[Math.floor(Math.random()*quotes.length)]

    console.log(quote)

    const quoteHTML = () => {
        return(
            `<div>
            <h2>${quote}<br>--The Murderbot Diaries</h2>
            </div>`
        )
    }

    $('.gallery').html(quoteHTML)
})
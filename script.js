$(function () {
    console.log('present')

    const quotes = [
        'I\’m going to mark your cognition level at fifty-five percent.',
        'I can\’t tell if that\’s you being passive aggressive or you being willfully obtuse.',
        'So the plan wasn\’t a clusterfuck yet, it was just circling the clusterfuck target zone getting ready to come in for a landing.',
        'Ugh, emotions.',
        'I was having an emotion, and I hate that.',
        'I hate having emotions about reality; I\’d much rather have them about Sanctuary Moon.',
        'I hate caring about stuff. But apparently once you start, you can\'t just stop.',
        'There needs to be an error code that means "I received your request but decided to ignore you."',
        '"I remember every word anyone ever said to me." That was a lie. Who would want that?',
        'There is a lot about what is going on here that I don\’t understand. But I am participating anyway.',
        '<h1>BOLDNESS IS ALL</h1>'
    ]

    const quote = quotes[Math.floor(Math.random()*quotes.length)]

    console.log(quote)

    const quoteHTML = () => {
        return(
            `<div>
            <h3>${quote}</h3>
            </div>`
        )
    }

    $('.gallery').html(quoteHTML)
})
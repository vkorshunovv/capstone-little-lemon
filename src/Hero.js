import heroPic from './icons_assets/restauranfood.jpg'

export default function Hero() {
return (
<section id='hero'>
            <article>
                <div>Little Lemon</div>
                <div>Chicago</div>
                <div>
                We are a family owned Medditerranean restaurant, focused on traditional recipes served with a modern twist.
                </div>
                <button type='button'>Reserve a Table</button>
            </article>
            <img src={heroPic} alt='Restaurant chef' />
        </section>
        )
}
import heroPic from './icons_assets/restauranfood.jpg'
import { Link } from 'react-router-dom';

export default function Hero() {
return (
<section id='hero'>
            <article>
                <div>Little Lemon</div>
                <div>Chicago</div>
                <div>
                We are a family owned Medditerranean restaurant, focused on traditional recipes served with a modern twist.
                </div>
                <Link to='/booking'><button type='button'>Reserve a Table</button></Link>
            </article>
            <img src={heroPic} alt='Restaurant chef' />
        </section>
        )
}
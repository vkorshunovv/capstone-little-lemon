import firstImgCard from './icons_assets/greek salad.jpg'
import secondImgCard from './icons_assets/bruchetta.svg'
import thirdImgCard from './icons_assets/lemon dessert.jpg'
import forthImgCard from './icons_assets/sliced-layered-lemon-dessert.jpg'

export default function Specials() {
    return (
        <>
        <section id='onlineMenuButton'>
            <div>
                <p>This weeks specials!</p>
            </div>
            <button type='button'>Online Menu</button>
        </section>
        <section id='specialCards'>
            <div className='firstCardContainer'>
                <div className="card">
                    <img src={firstImgCard} alt="Greek Salad" />
                    <div className="cardContainer">
                    <h4>Greek Salad <span>$12.99</span></h4>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons</p>
                    <a href='#'>Order a delivery</a>
                    </div>
                </div>
            </div>
            <div className='secondCardContainer'>
                <div className="card">
                    <img src={secondImgCard} alt="Bruchetta" />
                    <div className="cardContainer">
                    <h4>Bruchetta <span>$5.99</span></h4>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons</p>
                    <a href='#'>Order a delivery</a>
                    </div>
                </div>
            </div>
            <div className='thirdCardContainer'>
                <div className="card">
                    <img src={forthImgCard} alt="Lemon Desert" />
                    <div className="cardContainer">
                    <h4>Lemon Dessert <span>$5.00</span></h4>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons</p>
                    <a href='#'>Order a delivery</a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
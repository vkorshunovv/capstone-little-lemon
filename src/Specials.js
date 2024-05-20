import firstImgCard from "./icons_assets/greek salad.jpg";
import forthImgCard from "./icons_assets/sliced-layered-lemon-dessert.jpg";
import scooterDelivery from "./icons_assets/output-onlinepngtools.png";
import anotherBruschetta from "./icons_assets/bruschetta-vertical-1558014808.png";

export default function Specials() {
  return (
    <>
      <section id="onlineMenuButton">
        <div>
          <p>This weeks specials!</p>
        </div>
        <button type="button">Online Menu</button>
      </section>
      <section id="specialCards">
        <div className="firstCardContainer">
          <div className="card">
            <img src={firstImgCard} alt="Greek Salad" />
            <div className="cardContainer">
              <h4>
                Greek Salad <span>$12.99</span>
              </h4>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons
              </p>
              <a href="/">
                Order a delivery
                <img src={scooterDelivery} alt="Delivery Scooter Icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="secondCardContainer">
          <div className="card">
            <img src={anotherBruschetta} alt="Bruchetta" />
            <div className="cardContainer">
              <h4>
                Bruschetta <span>$5.99</span>
              </h4>
              <p>
                Our Bruschetta is made from grilled bread smeared with garlic
                and seasoned tomatoes, a flavorful blend complemented with salt
                and olive oil.
              </p>
              <a href="/">
                Order a delivery
                <img src={scooterDelivery} alt="Delivery Scooter Icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="thirdCardContainer">
          <div className="card">
            <img src={forthImgCard} alt="Lemon Desert" />
            <div className="cardContainer">
              <h4>
                Lemon Dessert <span>$5.00</span>
              </h4>
              <p>
                Derived from grandma's cherished recipe book, every last
                ingredient has been meticulously sourced, ensuring an
                unparalleled authenticity in taste.
              </p>
              <a href="/">
                Order a delivery
                <img src={scooterDelivery} alt="Delivery Scooter Icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

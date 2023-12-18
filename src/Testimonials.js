import Avatar1 from "./icons_assets/people-1.png";
import Avatar2 from "./icons_assets/people-2.png";
import Avatar3 from "./icons_assets/people-3.png";
import Avatar4 from "./icons_assets/people-4.png";

export default function CustomersSay() {
  return (
    <div id="testimonials">
      <span className="heading">What our guests say about us.</span>
      <div className="testimonialsContainer">
        <div className="customerCard">
          <img src={Avatar1} alt="Avatar" />
          <div className="stars">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div>
          <div className="customerBio">
            <h4>Catherine</h4>
            <p>
              "An absolute gem! From the delightful ambiance to the exquisite
              cuisine, dining at Little Lemon was an unforgettable experience."{" "}
            </p>
          </div>
        </div>

        <div className="customerCard">
          <img src={Avatar2} alt="Avatar" />
          <div className="stars">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div>
          <div className="customerBio">
            <h4>
              <b>William</b>
            </h4>
            <p>
              "An enchanting blend of flavors and ambiance! The dishes were
              tasty. A recommendation for those seeking an amazing place."
            </p>
          </div>
        </div>

        <div className="customerCard">
          <img src={Avatar3} alt="Avatar" />
          <div className="stars">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div>
          <div className="customerBio">
            <h4>
              <b>Emma</b>
            </h4>
            <p>
              "Dining in restaurant was sheer joy! The fusion of flavors and
              ambiance made it an exceptional culinary expedition, truly
              unforgettable."
            </p>
          </div>
        </div>

        <div className="customerCard">
          <img src={Avatar4} alt="Avatar" />
          <div className="stars">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div>
          <div className="customerBio">
            <h4>
              <b>Alexsander</b>
            </h4>
            <p>
              "An absolute gem! From the delightful ambiance to the exquisite
              cuisine, dining at Little Lemon was an unforgettable experience."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

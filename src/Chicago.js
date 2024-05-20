import brothers1 from "./icons_assets/Mario and Adrian A copy.jpg";
import brothers2 from "./icons_assets/Mario and Adrian b copy.jpg";

export default function Chicago() {
  return (
    <div id="history">
      <div className="historyDescription">
        <span>Little Lemon</span>
        <span>Chicago</span>
        <p>
          Little Lemon is owned by two Italian brothers,{" "}
          <strong>
            <em>Mario</em>
          </strong>{" "}
          and{" "}
          <strong>
            <em>Adrian</em>
          </strong>
          , who moved to the United States to pursue their shared dream of
          owning a restaurant.
        </p>
        <p>
          To craft the menu, Mario relies on family recipes and his experience
          as a chef in Italy. Adrian does all the marketing for the restaurant
          and led the effort to expand the menu beyond classic Italian to
          incorporate additional cuisines from the Mediterranean region.
        </p>
      </div>
      <div className="brothersPictures">
        <img src={brothers2} alt="Mario and Adrian" />
        <img src={brothers1} alt="Mario and Adrian" />
      </div>
    </div>
  );
}

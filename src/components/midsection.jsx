import girl from "./girl.png";
import Button from "./button";
const Mid = () => {
  return (
    <div className="mid">
      <div className="left">
        <h1 className="big-heading">
          <span> Saving</span> Your Money <br />
          For Travel Through <br />
          Travel Fund
        </h1>
        <p style={{ fontSize: "24px", fontWeight: "700" }}>
          Save your money for travel securely and explore the whole world with
          trasave, we provide you the best travel services.
        </p>
        <div>
          <Button Display="Save Now" />
          <Button Display="UI/UX Case study" />
        </div>
      </div>

      <img className="girl" src={girl} />
    </div>
  );
};
export default Mid;

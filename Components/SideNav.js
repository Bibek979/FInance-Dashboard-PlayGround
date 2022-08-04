import "./styles.css";
const SideNav = () => {
  return (
    <div className="sideNavMenu">
      <h3 className="buyNow up">Buy Now</h3>
      <ul className="buyNowUp ul">
        <li>Buy Now</li>
        <li>Sell Now</li>
      </ul>
      <h3 className="buyNow down">Sell Now</h3>
      <ul className="buyNowDown ul">
        <li>Sell Now</li>
        <li>Buy Now</li>
      </ul>
    </div>
  );
};

export default SideNav;

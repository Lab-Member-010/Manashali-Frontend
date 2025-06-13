import construction from "../../../../assets/images/Under-Construction.gif";

const Badge = () => {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <img src={construction} alt="under construction" />
    </div>
  );
};

export default Badge;
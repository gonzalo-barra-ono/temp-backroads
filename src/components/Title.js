const Title = ({ titleOne, titleTwo }) => {
  return (
    <div className="section-title">
      <h2>
        {titleOne} <span>{titleTwo}</span>
      </h2>
    </div>
  );
};

export default Title;

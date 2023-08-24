import Calculator from '../Components/Calculator';
import '../Styles/Page-Styles/CalcPage.css';

const CalcPage = () => (
  <div className="container">
    <h2 className="calcTitle">Lets do some maths!</h2>
    <div className="calc">
      <Calculator />
    </div>

  </div>
);

export default CalcPage;

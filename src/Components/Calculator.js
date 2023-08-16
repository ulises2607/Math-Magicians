/* eslint-disable */
const Calculator = () => {
  return (
    <>
    <div className="container">
      <input className="input-calc" defaultValue={0}></input>
      <div className="buttons">
        <CalcButton value={'AC'}></CalcButton>
        <CalcButton value={'+/-'}></CalcButton>
        <CalcButton value={'%'}></CalcButton>
        <CalcButton value={'/'}></CalcButton>

        <CalcButton value={7}></CalcButton>
        <CalcButton value={8}></CalcButton>
        <CalcButton value={9}></CalcButton>
        <CalcButton value={'x'}></CalcButton>

        <CalcButton value={4}></CalcButton>
        <CalcButton value={5}></CalcButton>
        <CalcButton value={6}></CalcButton>
        <CalcButton value={'-'}></CalcButton>

        <CalcButton value={1}></CalcButton>
        <CalcButton value={2}></CalcButton>
        <CalcButton value={3}></CalcButton>
        <CalcButton value={'+'}></CalcButton>
        
        <CalcButton className={'cero'} value={'0'}></CalcButton>
        <CalcButton value={'.'}></CalcButton>
        <CalcButton className="equal" value={'='}></CalcButton>
      </div>
      
    </div>
    
  </>
  )
  
};


const CalcButton = ({value, className}) => {
  return <button className={className}>{value}</button>;
}
/* eslint-enable */

export default Calculator;

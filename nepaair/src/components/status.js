import style from './styles/status.module.css'

const CheckStatus = () => {
  

  return (
    <div className={style.container}>
      <h2 className={style.heading}>Check Status</h2>
      <div className={style.inputGroup}>
        <label htmlFor="from" className={style.label}>From</label>
        <select id="from"className={style.input}>
          <option value="">Select</option>
          <option value="Option1">Option 1</option>
          <option value="Option2">Option 2</option>
          <option value="Option3">Option 3</option>
        </select>
      </div>
      <div className={style.inputGroup}>
        <label htmlFor="to" className={style.label}>To</label>
        <select id="from"className={style.input}>
          <option value="">Select</option>
          <option value="Option1">Option 1</option>
          <option value="Option2">Option 2</option>
          <option value="Option3">Option 3</option>
        </select>
      </div>
      <button className={style.button}>Search</button>
    </div>
  );
};



export default CheckStatus;

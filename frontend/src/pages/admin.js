import style from './styles/admin.module.css'
import React from 'react';
import { AlertBox, showAlertSuccess, showAlertError, showAlertErrorUnexpected } from '../components/alertbox.js'

function AddFlights() {
  function datetime(){
    const currentDateTime = new Date();
    const formattedDateTime = `${currentDateTime.getFullYear()}-${String(currentDateTime.getMonth() + 1).padStart(2, '0')}-${String(currentDateTime.getDate()).padStart(2, '0')}T${String(currentDateTime.getHours()).padStart(2, '0')}:${String(currentDateTime.getMinutes()).padStart(2, '0')}`;
    return formattedDateTime
  }  
  async function submitFlightData(formData, url) {
      var response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      if (response.status === 409) {
        showAlertError();
      }

      if (response.status !== 409 & response.status !== 201) {
        showAlertErrorUnexpected();
      }
      if (response.status === 201){
        const data = await response.json();
        showAlertSuccess();
        console.log('Success:', data);
      }

  }


  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    submitFlightData(formData, "http://127.0.0.1:6001/storeflight");
  }
  return (
    <div className={style["container"]}>
      <h1 className={style["heading"]}>Add Flights</h1>
      <form onSubmit={handleSubmit} className={style["form"]}>
        <div className={style["inline-fields"]}>
          <div className={style["field-group"]}>
            <label htmlFor="departure" className={style["label"]}>Departure</label>
            <select id="departure" name="departure" className={style["input"]} required>
              <option value="" disabled selected>Select Departure</option>
              <option value="KTM">Kathmandu (KTM)</option>
              <option value="PKR">Pokhara (PKR)</option>
              <option value="BWA">Bhairahawa (BWA)</option>
              <option value="BIR">Biratnagar (BIR)</option>
              <option value="KEP">Nepalgunj (KEP)</option>
              <option value="BHR">Bharatpur (BHR)</option>
              <option value="SIF">Simara (SIF)</option>
              <option value="BDP">Bhadrapur (BDP)</option>
              <option value="JKR">Janakpur (JKR)</option>
              <option value="DHI">Dhangadhi (DHI)</option>
              <option value="SKH">Surkhet (SKH)</option>
              <option value="TMI">Tumlingtar (TMI)</option>
              <option value="RJB">Rajbiraj (RJB)</option>
              <option value="JUM">Jumla (JUM)</option>
              <option value="PPL">Phaplu (PPL)</option>
              <option value="DNP">Tulsipur (DNP)</option>
              <option value="TPJ">Taplejung (TPJ)</option>
              <option value="DOP">Dolpa (DOP)</option>
              <option value="IMK">Simikot (IMK)</option>
              <option value="BHP">Bhojpur (BHP)</option>
              <option value="BJU">Bajura (BJU)</option>
              <option value="LUA">Lukla (LUA)</option>
              <option value="JMO">Jomsom (JMO)</option>
              <option value="RHP">Ramechhap (RHP)</option>
              <option value="RUM">Rumjatar (RUM)</option>
              <option value="RUK">Rukumkot (RUK)</option>
              <option value="SYH">Syangboche (SYH)</option>
              <option value="MEY">Meghauli (MEY)</option>
              <option value="NGX">Manang (NGX)</option>
              <option value="LDN">Lamidanda (LDN)</option>
              <option value="BJH">Bajhang (BJH)</option>
              <option value="BIT">Baitadi (BIT)</option>
            </select>
          </div>

          <div className={style["field-group"]}>
            <label htmlFor="destination" className={style["label"]}>Destination </label>
            <select id="destination" name="destination" className={style["input"]} required>
              <option value="" disabled selected>Select Destination</option>
              <option value="KTM">Kathmandu (KTM)</option>
              <option value="PKR">Pokhara (PKR)</option>
              <option value="BWA">Bhairahawa (BWA)</option>
              <option value="BIR">Biratnagar (BIR)</option>
              <option value="KEP">Nepalgunj (KEP)</option>
              <option value="BHR">Bharatpur (BHR)</option>
              <option value="SIF">Simara (SIF)</option>
              <option value="BDP">Bhadrapur (BDP)</option>
              <option value="JKR">Janakpur (JKR)</option>
              <option value="DHI">Dhangadhi (DHI)</option>
              <option value="SKH">Surkhet (SKH)</option>
              <option value="TMI">Tumlingtar (TMI)</option>
              <option value="RJB">Rajbiraj (RJB)</option>
              <option value="JUM">Jumla (JUM)</option>
              <option value="PPL">Phaplu (PPL)</option>
              <option value="DNP">Tulsipur (DNP)</option>
              <option value="TPJ">Taplejung (TPJ)</option>
              <option value="DOP">Dolpa (DOP)</option>
              <option value="IMK">Simikot (IMK)</option>
              <option value="BHP">Bhojpur (BHP)</option>
              <option value="BJU">Bajura (BJU)</option>
              <option value="LUA">Lukla (LUA)</option>
              <option value="JMO">Jomsom (JMO)</option>
              <option value="RHP">Ramechhap (RHP)</option>
              <option value="RUM">Rumjatar (RUM)</option>
              <option value="RUK">Rukumkot (RUK)</option>
              <option value="SYH">Syangboche (SYH)</option>
              <option value="MEY">Meghauli (MEY)</option>
              <option value="NGX">Manang (NGX)</option>
              <option value="LDN">Lamidanda (LDN)</option>
              <option value="BJH">Bajhang (BJH)</option>
              <option value="BIT">Baitadi (BIT)</option>
            </select>
          </div>
        </div>

        <div className={style["inline-fields"]}>
          <div className={style["field-group"]} style={{ width: "30px" }}>
            <label htmlFor="time" className={style["label"]}>Arrival Time</label>
            <input type="datetime-local" id="time2" name="arrival_time" className={style["input"]} min={datetime()} required/>
          </div>

          <div className={style["field-group"]} style={{ width: "30px" }}>
            <label htmlFor="time" className={style["label"]}>Departure Time</label>
            <input type="datetime-local" id="time1" name="departure_time" className={style["input"]} style={{ paddingLeft: "20px" }} required min={datetime()} />
          </div>
        </div>

        <div className={style["inline-fields"]}>
          <div className={style["field-group"]}>
            <label htmlFor="price_adult" className={style["label"]}>Ticket Price (adult)</label>
            <input type="text" id="price_adult" name="price_adult" placeholder="Enter Ticket Price" className={style["input"]} required />
          </div>

          <div className={style["field-group"]}>
            <label htmlFor="price_child" className={style["label"]}>Ticket Price (child)</label>
            <input type="text" id="price_child" name="price_child" placeholder="Enter Ticket Price" className={style["input"]} required />
          </div>
        </div>

        <div className={style["inline-fields"]}>
          <div className={style["field-group"]}>
            <label htmlFor="flight_number" className={style["label"]}>Flight Number</label>
            <input type="text" id="flight_number" name="flight_number" placeholder="Enter Flight Number" className={style["input"]} required />
          </div>

          <div className={style["field-group"]}>
            <label htmlFor="pin" className={style["label"]}>Pin</label>
            <input type="password" id="pin" name="pin" placeholder="Enter Pin" className={style["input"]} required />
          </div>
        </div>

        <button type="submit" className={style["button"]}>Add Flight</button>
      </form>
      <AlertBox type="success" title="Success!" message="Flight is successfully registered!" />
      <AlertBox type="error" title="Error!" message="Flight already exists!" />
      <AlertBox type="error2" title="Error!" message="Server responded with different status code. This might be because of wrong pin." />


    </div>

  );
}

export default AddFlights;

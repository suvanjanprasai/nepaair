import style from './styles/flightsearch.module.css';
import { AlertBox, showAlertError } from '../components/alertbox.js'
import Flightresult from '../pages/flightresult.js';
import React, { useState } from 'react';
function Search() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState(null);
    function date() {
        const currentDateTime = new Date();
        const formattedDateTime = `${currentDateTime.getFullYear()}-${String(currentDateTime.getMonth() + 1).padStart(2, '0')}-${String(currentDateTime.getDate()).padStart(2, '0')}`;
        return formattedDateTime
    }
    async function searchFlightData(formData) {
        try {
            const response = await fetch('http://127.0.0.1:6001/searchflight', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                showAlertError();
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setIsSubmitted(true);
            setFormData(data)
            console.log('Success:', data);
            // Optionally, you can display a success message or clear the form here
        } catch (error) {
            console.error('Error submitting form:', error);
            // Optionally, you can display an error message here
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        searchFlightData(formData);
    }
    return (
        <>
        {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
                <div className={style['flight-search-container']}>
                    <h2 style={{ paddingBottom: "20px", paddingTop: "20px" }} className={style['flight-search-heading']}>Search Flights</h2>
                    <div className={style['trip-type']}>
                        <button className={`${style['trip-type-button']} ${style.active}`}>One Way</button>
                        <button className={style['trip-type-button']}>Round Trip</button>
                        <button className={style['trip-type-button']}>Mountain Flight</button>
                    </div>

                    <div className={style['location-container']}>
                        <div className={style['location-container-item']} style={{ paddingLeft: "20px", paddingRight: "10px" }}>
                            <label htmlFor="departure" className={style['label']}>Departure</label>
                            <select className={style['select']} name='departure'>
                                <option value="" disabled defaultValue={"Select Departure"}>Select Departure</option>
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
                        <div className={style['location-container-item']} style={{ paddingRight: "20px" }}>
                            <label htmlFor="destination" className={style['label']}>Destination</label>
                            <select className={style['select']} name='destination'>
                                <option value="" disabled defaultValue={"Select Destination"}>Select Destination</option>
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
                    <div className={style['input-container']} style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                        <label htmlFor="nationality" className={style['label']}>Nationality</label>
                        <select className={style['select']} name='nationality'>
                            <option value="" disabled defaultValue={"Select Nationality"}>Select Nationality</option>
                            <option value="Nepalese">Nepalese</option>
                            <option value="Indian">Indian</option>
                            <option value="Foreginer">Foreginer</option>

                        </select>
                    </div>
                    <div className={style['input-container']} style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                        <label htmlFor="departure" className={style['label']}>Departure</label>
                        <input type="date" id="departure" className={style['input']} name='departure_time' min={date()} />
                    </div>
                    <div className={style['passenger-count']}>
                        <div className={style['passenger-count-item']} style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                            <label htmlFor="adult" className={style['label']}>Adult (12yrs+)</label>
                            <input type="number" id="adult" defaultValue="1" min="1" max="10" className={style['input']} name='adult' />
                        </div>
                        <div className={style['passenger-count-item']} style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                            <label htmlFor="child" className={style['label']}>Child (2-12yrs)</label>
                            <input type="number" id="child" defaultValue="0" min="0" max="10" className={style['input']} name='child' />
                        </div>
                    </div>
                    <div className={style['input-container']} style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                        <label htmlFor="promo" className={style['label']}>Promo Code</label>
                        <input type="text" id="promo" placeholder="Enter Promo Code" className={style['input']} name='promo_code' />
                    </div>
                    <div className={style["button-container"]} style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                        <button className={style['btn-search']} style={{ marginBottom: "20px", paddingLeft: "20px", paddingRight: "20px" }} type="submit">Search Flights</button>
                    </div>
                </div>
            </form>
               ) : (
                <Flightresult flightData={formData}/>
            )}
            <AlertBox type="error" title="Error!" message="Flight not found!" />
        </>
    );
}

export default Search;

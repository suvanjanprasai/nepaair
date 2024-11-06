import React from 'react';
import style from './styles/alertbox.module.css';

function showAlert(type) {
  const alertBox = document.getElementById(`alert-box-${type}`);
  alertBox.classList.remove(style.hidden);

}

export function showAlertSuccess() {
  showAlert('success');
}

export function showAlertError() {
  showAlert('error');
}
export function showAlertErrorUnexpected() {
  showAlert('error2');
}
function closeAlert(type) {
  const alertBox = document.getElementById(`alert-box-${type}`);
  alertBox.classList.add(style.hidden);
}

export function closeAlertSuccess() {
  closeAlert('success');
}

export function closeAlertError() {
  closeAlert('error');
}

export function AlertBox({ type, title, message }) {
  const iconId = type === 'success' ? 'checkmark' : 'crossmark';
  const stroke = type === 'success' ? '#387478' : '#243642';
  const path = type === 'success' 
    ? 'M14.1 27.2l7.1 7.2 16.7-16.8' 
    : 'M16 16 L36 36 M36 16 L16 36';

  return (
    <div>
      
      <div id={`alert-box-${type}`} className={`${style.alert} ${style.hidden}`}>
        <div className={style.icon}>
          <svg id={iconId} viewBox="0 0 52 52">
            <circle className={style["checkmark-circle"]} cx="26" cy="26" r="25" fill="none" />
            <path className={style["checkmark-check"]} fill="none" d={path} stroke={stroke} strokeWidth="4" />
          </svg>
        </div>
        <p className={style.title}>{title}</p>
        <p className={style.message}>{message}</p>
        <button className={style["ok-btn"]} onClick={() => closeAlert(type)}>
          CLOSE
        </button>
      </div>
    </div>
  );
}

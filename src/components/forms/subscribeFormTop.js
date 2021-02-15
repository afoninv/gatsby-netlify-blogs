import React from 'react';
import HubspotForm from "./HubspotForm";
import './index.scss';

const SubscribeFormTop = (props) => {
  const decorationClass = props.type ? `subscribeForm_${props.type}` : ''
  return (
    <div className={`subscribeForm ${decorationClass}`}>
      <div className='subscribeForm__description'>
        <span className='subscribeForm__header'>Subscribe to our newsletter</span>
        <span className='subscribeForm__subheader'>Latest news, data privacy insights and updates</span>
      </div>

      <div className='subscribeForm__hubspot'>
        <HubspotForm id={props.id} type='updatesTop' />
      </div>
    </div>
  )
}


export default SubscribeFormTop;

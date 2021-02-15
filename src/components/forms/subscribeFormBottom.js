import React from 'react';
import HubspotForm from "./HubspotForm";
import './index.scss';

const SubscribeFormBottom = (props) => {
  const decorationClass = props.type ? `subscribeForm_${props.type}` : ''

  return (
    <div className={`subscribeForm ${decorationClass}`}>
      <div className='subscribeForm__description'>
        <span className='subscribeForm__header'>Subscribe to our newsletter</span>
        <span className='subscribeForm__subheader'>Receive the latest news, data privacy insights and updates</span>
      </div>

      <div className='subscribeForm__hubspot'>
        <HubspotForm id={props.id} type='updatesTop' />
        <span className="subscribeForm__inputDescription">We will not share your email address. For more information, read our
          <a
            href="../../documents/Soveren_Privacy_Policy_20102020.pdf"
            target="_blank"
          >
            &nbsp;privacy policy
          </a>
          .
        </span>
      </div>
    </div>
  )
}


export default SubscribeFormBottom;

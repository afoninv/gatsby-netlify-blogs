import React from 'react'
import './index.scss';
import '../../formComponents/buttons.scss';

const typesList = {
  updatesTop: {
    portalId: "8941784",
    formId: "02dbe62e-0a4e-4c2a-8974-0061aaadcb02",
    cssClass: 'hubspotForm',
    submitButtonClass: 'button button_small',
    errorClass: 'hubspotForm__error',
    errorMessageClass: 'hubspotForm__errorMessage',
  },
  updatesMiddle: {
    portalId: "8941784",
    formId: "02dbe62e-0a4e-4c2a-8974-0061aaadcb02",
    cssClass: 'hubspotForm',
    submitButtonClass: 'button button_big',
    errorClass: 'hubspotForm__error',
    errorMessageClass: 'hubspotForm__errorMessage',
  },
  updatesBottom: {
    portalId: "8941784",
    formId: "2c06fceb-1609-40b4-a381-5b5f53d0d770",
    cssClass: 'hubspotForm',
    submitButtonClass: 'button button_big',
    errorClass: 'hubspotForm__error',
    errorMessageClass: 'hubspotForm__errorMessage',
  }
}


class HubspotForm extends React.Component {
  constructor(props) {
    super(props);

    this.form = React.createRef();
  }

  hsFormByConfig(type = 'updates', selector) {
    window.hbspt.forms.create({
      ...typesList[type],
      target: selector
    })
  }

  componentDidMount () {
    const { type, id } = this.props

    if (!window.hbspt) {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/v2.js';
      document.body.appendChild(script);

      script.addEventListener('load', () => {
        this.hsFormByConfig(type,`#${id}`)
      });
    } else {
      this.hsFormByConfig(type, `#${id}`)
    }
  }

  render() {
    return (
        <div className="hubspotFormNewsletter" ref={this.form} id={this.props.id}/>
    )
  }
}

export default  HubspotForm;

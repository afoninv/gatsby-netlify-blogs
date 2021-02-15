import React from 'react';
import './index.scss';
import '../formComponents/buttons.scss';

const MappingTemplate = () => {
  return (
    <div className='mappingTemplate'>
      <div className='mappingTemplate__header'>Free data mappping template</div>
      <div className='mappingTemplate__description'>
        Save time and effort by downloading Soveren’s<br />
        free GDPR data mapping template.
      </div>

      <a href="/data-mappinig-template" className='button button_big mappingTemplate__button'>Download now</a>
    </div>
  )
}


export default MappingTemplate;

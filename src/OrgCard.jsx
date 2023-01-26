import React from 'react'; 

function OrgCard(props) {
    return (
      <>
      <div className='cards'>
        <div className='card'>
          <img 
            src={props.imgsrc}
            alt='myPic' 
            className='card_img' 
          />
          <div className='card_info'>
            <span className='card_category'>{props.title}</span>
            <h3 className='card_title'>{props.sname}</h3>
            <a target='_blank' rel="noopener noreferrer" href={props.link}>
              <button>Click Here</button>
            </a>
          </div>
        </div>
      </div>
    </>
    );
}
export default OrgCard;

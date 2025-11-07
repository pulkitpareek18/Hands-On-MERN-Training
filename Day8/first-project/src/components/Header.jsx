import React from 'react'

const Header = (props) => {
  // let title = "React project";
  // let home = "Home variale";
  // let about = "About";
  // let contact = "Contact";
  console.log(props)

  let {title, home, about, contact, borderColor, bgColor} = props;

  // let title = props.title;
  // let home = props.home;
  // let about = props.about;
  // let contact = props.contact;
  
  return (
    <div>
      <nav className={`flex border-2 border-${borderColor}-500 justify-between
 m-2 p-2 h-12 bg-${bgColor}-500 text-white rounded-lg`}>
        <h1 className=' font-bold'>{title}</h1>
        <ul className='flex items-center'>
            <li className='m-2'>{home}</li>
            <li className='m-2'>{about}</li>
            <li className='m-2'>{contact}</li>
        </ul>  
      </nav>
    </div>
  )
}

export default Header

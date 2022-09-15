import React, {useState} from 'react';
import logo from "../images/logo1.png";
import socials from "../images/socials.png";
import profile from "../images/profile.jpg"


const Search = ({onSubmit}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (event) => setSearchTerm(event.target.value);
  
  const keyPress = (event) => {
    if(event.key === "Enter") {
      onSubmit=(searchTerm);
    }
  }

  return (
    <div>
      {/* HEADER SECTION START */}
      <div className='header'> 
          <a href="/" className='brand'>
            <img className='logo-brand' src={logo} alt="logo" />
          </a>
          <input
          type="text"
          fullWidth
          placeholder='Search...'
          value={searchTerm}
          onChange={handleChange}
          onKeyPress={keyPress}
          />

          {/* YOUTUBE FUNCTIONAL SECTION */}
          
            <div className='icons'>
              <img className='socials' src={socials} alt="socials" />

              {/* PROFILE BAR */}
              <a className="profile" href="/">
                <img src={profile} alt="profile" />
              </a>
            </div>

      </div>
    </div>
  )
}

export default Search
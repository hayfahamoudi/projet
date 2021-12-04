import React from "react";
import './Header.css';
import { FaYoutube } from 'react-icons/fa';
import { MdSearch, MdVideoCall, MdViewComfy } from 'react-icons/md';
import { AiTwotoneBell } from 'react-icons/ai';
function Header() {
    return (

        <div className='HeaderA'>
            <div className='Header'>
                <div className='header'>
                    <button className='button'>&#9776;</button>
                    <FaYoutube color='red' fontSize="3rem" />
                    <div>Youtube</div>
                </div>
                <div className='Search'>
                    <input type='search' placeholder='search' />
                    <div className='search'>
                        <MdSearch fontSize="3rem" />
                    </div>
                </div>

                <div style={{display:"flex"}}>
                    <div className='Icon'><MdVideoCall fontSize="2.8rem" /></div>
                    <div className='Icon'><MdViewComfy fontSize="2.8rem" /></div>
                    <div className='Icon'><AiTwotoneBell fontSize="2.8rem" /></div>
                    <div className='Icon'><img src="image/im1.jpg" alt="image " /></div>
                </div>

            </div>
        </div>

    );
}
export default Header;
import React from "react";
import './Main.css';
import {MdHistory, MdHome, MdPlaylistPlay, MdWatchLater, MdVideoLibrary, MdRssFeed} from "react-icons/md";
import{FaFutbol, FaGripfire, FaMusic, FaRegNewspaper} from "react-icons/fa";
import{BsFillCollectionPlayFill} from "react-icons/bs";
import {GiGamepad} from "react-icons/gi";
import ReactPlayer from 'react-player';

function Main()
{
    return(
<div className='MainA'>
    <div className="sideBar">
        <div className="Home">
            <div className='Q_Icon'>
                <MdHome color="red" fontSize="3rem"/>
                <div>Accueil</div>
            </div>
            <div className='Q_Icon'>
                <FaGripfire color="grey" fontSize="3rem"/>
                <div>Explorer</div>
            </div>
            <div className='Q_Icon'>
                <BsFillCollectionPlayFill color="grey" fontSize="2rem"/>
                <div>Abonnements</div>
            </div>
           
                <div className='Q_Icon'>
                <MdVideoLibrary color="grey" fontSize="2rem"/>
                <div>Bibliothéque</div>
            </div>
                <div className='Q_Icon'>
                <MdHistory color="grey" fontSize="3rem"/>
                <div>Historique</div>
            </div>
                <div className='Q_Icon'>
                <MdWatchLater color="grey" fontSize="2rem"/>
                <div>A regarder plus tard</div>
            </div>
        
            </div>
            <div className="Plus">
            <div className='Q_Icon'>
                <GiGamepad color="grey" fontSize="3rem"/>
                <div>Jeux vidéo</div>
            
            </div> <div className='Q_Icon'>
                <MdRssFeed color="grey" fontSize="3rem"/>
                <div>En direct</div>
                </div>
            <div className='Q_Icon'>
                <FaFutbol color="grey" fontSize="2rem"/>
                <div>Sport</div>
            </div>
            <div className='Q_Icon'>
                <FaMusic color="grey" fontSize="2rem"/>
                <div>Musique</div>
                </div>
                <div className='Q_Icon'>
                <FaRegNewspaper color="grey" fontSize="2rem"/>
                <div>News</div>   
        </div>
    </div>
    </div>
    <div className='Main'>
        <div className="Videos">
            <div className="video">
                <ReactPlayer 
                url="https://www.youtube.com/watch?v=8_UdZqwDTmM&ab_channel=HAYFAHAMOUDI"
                height="170px"
                width="280px"
                controls/>
                <br></br>
            <div className="logo">
                <img src="image/logo.jpg" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                <div>création d'un formulaire avec HTML5</div>
            </div>
            <br></br>
            <div className="View">
            550 177 vues .29 nov 2021
            </div>
            </div>

        
            <div className="video">
                <ReactPlayer 
                url="https://www.youtube.com/watch?v=_SXBrPwknOE&ab_channel=HAYFAHAMOUDI"
                height="170px"
                width="280px"
                controls/>
                <br></br>
            <div className="logo">
                <img src="image/logo.jpg" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                <div>Langage C :Exercices corrigés sur les instructions de base</div>
            </div>
            <br></br>
            <div className="View">
            2 542 410 vues .2 déc 2021
            </div>
            </div>
            
            <div className="video">
                <ReactPlayer 
                url="https://www.youtube.com/watch?v=lcfCosmNBC8&ab_channel=HAYFAHAMOUDI"
                height="170px"
                width="280px"
                controls/>
                <br></br>
            <div className="logo">
                <img src="image/logo.jpg" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                <div>Langage Python :Exercice Corrigés sur Les Fonctions et Les Modules</div>
            </div>
            <br></br>
            <div className="View">
            1 668 500 vues .4 déc 2021
            </div>
            </div>
            <div className="video">
                <ReactPlayer 
                url="https://www.youtube.com/watch?v=hZK5ktMz4mQ&ab_channel=HAYFAHAMOUDI"
                height="170px"
                width="280px"
                controls/>
                <br></br>
            <div className="logo">
                <img src="image/logo.jpg" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
                <div>création d'un formulaire avec HTML5/CSS3</div>
            </div>
            <br></br>
            <div className="View">
            1 668 204 vues .4 déc 2021
            </div>
            </div>
            
        </div>
    </div>
    </div>
    );
}
export default Main;  
import '/src/cardsst.css';

import imgCard1 from './assets/imgcardssampil/123dcasrdidv.jpg';
import imgCard2 from './assets/imgcardssampil/cardivdglden.webp';
import imgCard3 from './assets/imgcardssampil/bb.webp';
import imgCard4 from './assets/imgcardssampil/idvcard123.jpg'   

function Cards(){
    return(
        <div className='cardsDiv'> 
            <div className='card' id='card1'>
                <img src={imgCard1} alt="Miku" />
                <h1>Miku Epsilon</h1>   
                </div>

            <div className='card' id='card2'>
                <img src={imgCard2} alt="Teto" />
                <h1>Kasane Cateto</h1>
            </div>

            <div className='card' id='card3'>
                <img src={imgCard3} alt="Neru" />
                <h1>infoderfrente</h1>
            </div>

              <div className='card' id='card4'>
                <img src={imgCard4} alt="Neru" />
                <h1>infode tras</h1>
            </div>
        </div>
    )
}

export default Cards;
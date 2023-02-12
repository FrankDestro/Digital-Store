import './styles.css';
import Gamecard from 'assets/img/cardgame.jpg';
import DetailsButton from 'DetailsButton';


function CarCard() {
  return (
    <div className='card-car base-card'>
      <div className='card-top-container'>
        <img src={Gamecard} alt="Nome do Game" />
      </div>
      <div className='card-bottom-container'>
        <h6> God of war Ragnarok </h6>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisio </p>
        <DetailsButton></DetailsButton>
      </div>
    </div>
  );
}

export default CarCard;

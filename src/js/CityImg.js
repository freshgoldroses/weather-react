import '../css/CityImg.css';

function CityImg(props) {
  return (
    <div className="CityImg">
       <img src={props.img} alt="viewed-city" class="viewed-city-image" />

       <div class="viewed-city-name title" id="location">
            <span id="city">{props.city}</span>,
            <span id="country">{props.country}</span>
        </div>
    </div>
  );
}

export default CityImg;
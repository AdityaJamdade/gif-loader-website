import './Card.css'
import IMAGES from '../../index.json'

const Card = () => {
  const total_images = IMAGES.length
  const num = (Math.random()*(total_images-1)).toFixed(0);
  console.log(num)
  return (
    <div className='card-body'>
        <img src={IMAGES[num]} alt="Logo" />
    </div>
  )
}

export default Card
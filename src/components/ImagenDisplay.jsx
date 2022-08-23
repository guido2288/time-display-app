import night from '../images/night.jpg';
import day from '../images/day.jpg';



export const ImagenDisplay = ({ date }) => {

  return (
    <>
      {
        (date >= 8 && date <= 18)
          ? <img src={day} />
          : <img src={night} />

      }

    </>
  )
}

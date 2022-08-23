
export const Data = ({ date }) => {
  return (
    <div className='data-container'>
      <p>Current Time</p>

      {
        (date >= 8 && date <= 18)
          ? <h2>Good Day!</h2>
          : <h2>Good Night!</h2>

      }



    </div>
  )
}

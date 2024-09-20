/** @format */

export default function AllTime({ onClosealltime }) {
  return (
    <div>
      <div className='profiledropdown'>
        <div className='overlaydropdown' onClick={onClosealltime}></div>
        <div className='all-time-container'>
          <ul className='alltime-ul'>
            <div className='oneoff-dropdown'>
              <li className='alltime-container'>Today </li>
            </div>
            <li className='alltime-container'>Yesterday</li>
            <li className='alltime-container'> This week</li>
            <li className='alltime-container'>Last 7 days</li>
            <li className='alltime-container'>This month</li>
            <li className='alltime-container'>Last 30 days</li>
            <li className='alltime-container'>All time</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

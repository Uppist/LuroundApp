/** @format */

export default function ServiceCreate() {
  return (
    <div className='time-service-description'>
      <div className='time-service'>
        <span>Service Name</span>
        <input type='text' placeholder='e.g Personal Training' />
      </div>

      <div className='time-description'>
        <span>Description</span>
        <textarea placeholder='Write a brief descriptive summary of the service you provide'></textarea>
      </div>
    </div>
  );
}

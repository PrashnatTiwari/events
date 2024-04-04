import './index.css'

const EventItem = props => {
  const {eventItemDetails, setActiveEventId, isActive} = props
  const {id, imageUrl, name, location} = eventItemDetails
  const eventImageClassName = isActive ? 'event-image active' : 'event-image'
  const onClickItem = () => {
    setActiveEventId(id)
  }
  return (
    <li className="event-item" onClick={onClickItem}>
      <button>
        <img src={imageUrl} alt="event" className={eventImageClassName} />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem

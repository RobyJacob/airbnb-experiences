import star1 from '../assets/star1.svg'

export default function Card(props) {
    let badgeText;

    if (props.openspots === 0) badgeText = 'SOLD OUT'
    else if (props.location === 'Online') badgeText = 'ONLINE'

    return (
        <div className='card'>
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img src={`/src/assets/${props.imgSrc}`} className='card--img1' />
            <div className='card--details'>
                <div className='card--details--rating--wrapper'>
                    <img src={star1} className='card--details--star1' />
                    <span className='card--details--rating'>{props.rating} ({props.reviewCount}) . {props.location}</span>
                </div>
                <p className='card--details--title'>{props.title}</p>
                <p className='card--details--price'><span className='bold'>From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}
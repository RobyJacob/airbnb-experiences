import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

export default function App() {
  const cardElements = data.map(cardData => {
    return (
      <Card 
        key={cardData.id}
        imgSrc={cardData.coverImg} 
        rating={cardData.stats.rating}
        reviewCount={cardData.stats.reviewCount}
        title={cardData.title}
        price={cardData.price}
        location={cardData.location}
        openspots={cardData.openSpots}
        />
    )
  })

  return (
    <div className='main'>
      <Nav />
      <Hero />
      <section className='card-list'>
        {cardElements}
      </section>
    </div>
  )
}

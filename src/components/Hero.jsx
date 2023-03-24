import image22 from '../assets/image22.svg'
import image23 from '../assets/image23.svg'
import image24 from '../assets/image24.svg'
import image25 from '../assets/image25.svg'
import image26 from '../assets/image26.svg'
import image27 from '../assets/image27.svg'
import image28 from '../assets/image28.svg'
import image29 from '../assets/image29.svg'
import image30 from '../assets/image30.svg'

export default function Hero() {
    return (
        <div className='hero'>
            <div className='hero--gallery'>
                <div className='column1'>
                    <img className='col1--img1' src={ image28 } />
                </div>
                <div className='column2'>
                    <img className='col2--img1' src={ image30 } />
                    <img className='col2--img2' src={ image26 } />
                </div>
                <div className='column3'>
                    <img className='col3--img1' src={ image27 } />
                    <img className='col3--img2' src={ image29 } />
                </div>
                <div className='column4'>
                    <img className='col4--img1' src={ image22 } />
                    <img className='col4--img2' src={ image23 } />
                </div>
                <div className='column5'>
                    <img className='col5--img1' src={ image24 } />
                    <img className='col5--img2' src={ image25 } />
                </div>
            </div>
            <h1 className='hero--heading'>Online Experiences</h1>
            <p className='hero--para'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}
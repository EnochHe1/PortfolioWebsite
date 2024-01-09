import React from 'react'
import CV from '../../Assets/cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Resume</a> {}
        <a href="#contacts" className='btn btn-primary'>Let's Chat!</a> {/*If you click here, it'll take you to another section */}
    </div>
  )
}

export default CTA
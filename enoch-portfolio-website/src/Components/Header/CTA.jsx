import React from 'react'
import CV from '../../Assets/cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download>Resume</a> {}
        <a href="#contact">Let's Chat!</a> {/*If you click here, it'll take you to another section */}
    </div>
  )
}

export default CTA
import Contact from '@/components/Contact/Contact'
import { Hero } from '@/components/Hero/Hero'
import React from 'react'

const contact = () => {
    return (
        <div>
            <Hero heading='Contact' message='Submit the form for more work and quotes.' />
            <Contact />
        </div>
    )
}

export default contact
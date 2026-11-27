import React from 'react'
import './KeyFeatures.css'
import { Settings, Star, Zap, TriangleAlert, BookOpen} from 'lucide-react'
import FeatureCard from './FeatureCard'
function KeyFeatures() {
  return (
    <section className="key-features">

        <div className="key-features-container">

            <div className="features">
                <Star className="features-icon-star" size={30} />
                <span className="features-text"> Key <span className="features-highlight">Features</span> </span>
            </div>

            <div className="features-list">
                <FeatureCard icon={Zap} size={30} title="Real-Time Matching" description="See results instantly as you type." />
                <FeatureCard icon={Settings} size={30} title="Multiple Flags" description="Use g, i, m, s, u for advanced search." />
                <FeatureCard icon={TriangleAlert} size={30} title="Error Handling" description="Get helpful error messages for invalid patterns." />
                <FeatureCard icon={BookOpen} size={30} title="Helpful Examples" description="Try ready to use examples for common patterns." />

            </div>
        </div>

    </section>
  )
}

export default KeyFeatures

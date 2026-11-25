import React from 'react'
import "./Features.css"
import Card from './Card'
import {
  Zap,
  ShieldCheck,
  Palette,
  Heart
} from 'lucide-react'
function Features() {
  return (

    <div className = "cards">
        <Card logo={<Zap size={35} color="#A020F0" fill="#A020F0" />}
        title = {"Lightning Fast"} text = {"Get instant results as you type"} />
        <Card logo={<ShieldCheck size={35} color="#269BFF" fill="#269BFF" />}
        title = {"Developer Focused"} text = {"Built for developers, by developers"} />
        <Card logo={<Palette size={35} color="#20D5AE" fill="#20D5AE" />}
        title = {"Beautiful UI"} text = {"Clean and modern interface"} />
        <Card logo={<Heart size={35} color="#F044A0" fill="#F044A0" />}
        title = {"Open Source"} text = {"Free to use and contribute"} />
    </div>
  )
}

export default Features

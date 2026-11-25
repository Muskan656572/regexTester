import React from 'react'
import Navbar from '../components/Home/Navbar'
import RegexHeader from '../components/RegexFunction/RegexHeader'
import RegexTester from '../components/RegexFunction/RegexTester'
import Features from '../components/Home/Features'
function RegexTest() {
  return (
    <>
        <Navbar />
        <RegexHeader />
        <RegexTester />
        <Features />
    </>
  )
}

export default RegexTest

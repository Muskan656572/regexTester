import React from 'react'
import './RegexTester.css'
import RegexTestPanel from './RegexTestPanel'
import ResultPanel from './ResultPanel'
function RegexTester() {
  return (
    <div className = "regex-workspace">
      <RegexTestPanel />
      <ResultPanel />
    </div>
  )
}

export default RegexTester

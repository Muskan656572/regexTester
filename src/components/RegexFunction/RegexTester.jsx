import React from 'react'
import {useState} from 'react'
import './RegexTester.css'
import RegexTestPanel from './RegexTestPanel'
import ResultPanel from './ResultPanel'
function RegexTester() {
  const [regexPattern, setRegexPattern] = useState('');
  const [testString, setTestString] = useState('');
  const [selectedFlags, setSelectedFlags] = useState([]);
  return (
    <div className = "regex-workspace">
      <RegexTestPanel 
        regexPattern={regexPattern}
        setRegexPattern={setRegexPattern}
        testString={testString}
        setTestString={setTestString}
        selectedFlags={selectedFlags}
        setSelectedFlags={setSelectedFlags}
      />
      <ResultPanel />
    </div>
  )
}

export default RegexTester

import React from 'react'
import {useState, useEffect} from 'react'
import './RegexTester.css'
import RegexTestPanel from './RegexTestPanel'
import ResultPanel from './ResultPanel'
import {useLocation} from 'react-router-dom'
function RegexTester() {
  const location = useLocation();
  const incomingPattern = location.state?.pattern || '';
  const incomingText = location.state?.sampleText || '';
  const [regexPattern, setRegexPattern] = useState('');
  const [testString, setTestString] = useState('');
  const [selectedFlags, setSelectedFlags] = useState([]);
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (incomingPattern !== undefined) {
      setRegexPattern(incomingPattern);
      setTestString(incomingText);
    }
  }, [incomingPattern, incomingText]);

  const regexTest = () => {
    try {
      const flags = selectedFlags.join('');
      const regex = new RegExp(regexPattern, flags);
      const matches = [...testString.matchAll(regex)];
      
      setResults(matches);
      setError('');
    }
    catch ( err ) {
      
      setResults([]);
      setError(err.message);
    }
  }
  return (
    <div className = "regex-workspace">
      <RegexTestPanel 
        regexPattern={regexPattern}
        setRegexPattern={setRegexPattern}
        testString={testString}
        setTestString={setTestString}
        selectedFlags={selectedFlags}
        setSelectedFlags={setSelectedFlags}
        results={results}
        setResults={setResults}
        error={error}
        setError={setError}
        testRegex={regexTest}
      />
      <ResultPanel
        results={results}
        error={error}
      />
    </div>
  )
}

export default RegexTester

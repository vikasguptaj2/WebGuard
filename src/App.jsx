import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Scanner from './components/Scanner'
import Results from './components/Results'
import Features from './components/Features'
import History from './components/History'
import Footer from './components/Footer'
import { generateMockResults, initialScanHistory } from './utils/mockData'

function App() {
  const [scanHistory, setScanHistory] = useState([])
  const [currentScan, setCurrentScan] = useState(null)
  const [isScanning, setIsScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)

  useEffect(() => {
    setScanHistory(initialScanHistory)
  }, [])

  const scanWebsite = (url) => {
    if (!url) return
    
    setIsScanning(true)
    setScanProgress(0)
    
    const progressInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 10
      })
    }, 300)
    
    setTimeout(() => {
      clearInterval(progressInterval)
      setIsScanning(false)
      
      const mockResults = generateMockResults(url)
      setCurrentScan(mockResults)
      
      const newScan = {
        id: scanHistory.length + 1,
        url: url,
        date: new Date().toISOString().split('T')[0],
        risk: mockResults.overallRisk,
        issues: mockResults.issues.length
      }
      
      setScanHistory(prev => [newScan, ...prev])
    }, 3500)
  }

  const clearResults = () => {
    setCurrentScan(null)
  }

  return (
    <div className="App">
      <Header />
      <Hero onScan={scanWebsite} isScanning={isScanning} />
      <Scanner 
        isScanning={isScanning} 
        scanProgress={scanProgress} 
        currentUrl={currentScan?.url}
      />
      {currentScan && !isScanning && (
        <Results 
          scanData={currentScan} 
          onRescan={scanWebsite}
          onClear={clearResults}
        />
      )}
      <Features />
      <History scanHistory={scanHistory} onRescan={scanWebsite} />
      <Footer />
    </div>
  )
}

export default App
import React, { useState } from 'react'

const Hero = ({ onScan, isScanning }) => {
  const [url, setUrl] = useState('')

  const handleScan = () => {
    if (url.trim()) {
      onScan(url.trim())
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleScan()
    }
  }

  return (
    <section className="hero-section">
      <div className="container text-center">
        <h1 className="display-4 fw-bold mb-3">Website Security & Fault Detection</h1>
        <p className="lead mb-4">
          Comprehensive scanning for security vulnerabilities, performance issues, and potential threats
        </p>
        
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="input-group input-group-lg mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Enter website URL (e.g., https://example.com)" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isScanning}
              />
              <button 
                className="btn btn-warning" 
                type="button"
                onClick={handleScan}
                disabled={isScanning || !url.trim()}
              >
                {isScanning ? (
                  <span>
                    <span className="scan-animation">Scanning</span>...
                  </span>
                ) : (
                  <span>
                    <i className="fas fa-search me-2"></i> Scan Website
                  </span>
                )}
              </button>
            </div>
            <small className="text-light">
              Scan any website for security issues, malware, and vulnerabilities
            </small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
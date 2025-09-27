import React from 'react'

const Scanner = ({ isScanning, scanProgress, currentUrl }) => {
  if (!isScanning) return null

  return (
    <section className="scan-section">
      <div className="container">
        <h3 className="mb-3">Scanning in Progress</h3>
        <div className="mb-3">
          <div className="d-flex justify-content-between mb-1">
            <span>Scanning: {currentUrl || 'Website'}</span>
            <span>{scanProgress}%</span>
          </div>
          <div className="progress">
            <div 
              className="progress-bar progress-bar-striped progress-bar-animated" 
              role="progressbar" 
              style={{width: `${scanProgress}%`}}
            ></div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-3">
            <i className="fas fa-shield-alt fa-2x mb-2 text-primary"></i>
            <p>Security Check</p>
          </div>
          <div className="col-md-3">
            <i className="fas fa-bug fa-2x mb-2 text-primary"></i>
            <p>Malware Detection</p>
          </div>
          <div className="col-md-3">
            <i className="fas fa-tachometer-alt fa-2x mb-2 text-primary"></i>
            <p>Performance Analysis</p>
          </div>
          <div className="col-md-3">
            <i className="fas fa-search fa-2x mb-2 text-primary"></i>
            <p>SEO Audit</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Scanner
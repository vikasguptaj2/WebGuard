import React from 'react'

const Results = ({ scanData, onRescan, onClear }) => {
  const getRiskBadgeClass = (risk) => {
    switch (risk.toLowerCase()) {
      case 'high': return 'risk-high'
      case 'medium': return 'risk-medium'
      case 'low': return 'risk-low'
      default: return 'risk-low'
    }
  }

  return (
    <section className="results-section">
      <div className="container">
        <div className="scan-results-card">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3>Scan Results for {scanData.url}</h3>
            <span className={`risk-badge ${getRiskBadgeClass(scanData.overallRisk)}`}>
              Risk: {scanData.overallRisk}
            </span>
          </div>
          
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="stat-card">
                <h5>Security Score</h5>
                <div className="stat-value text-primary">{scanData.securityScore}/100</div>
                <div className="progress">
                  <div 
                    className="progress-bar bg-primary" 
                    role="progressbar" 
                    style={{width: `${scanData.securityScore}%`}}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="stat-card">
                <h5>Performance Score</h5>
                <div className="stat-value text-success">{scanData.performanceScore}/100</div>
                <div className="progress">
                  <div 
                    className="progress-bar bg-success" 
                    role="progressbar" 
                    style={{width: `${scanData.performanceScore}%`}}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          <h5 className="mb-3">Detected Issues</h5>
          {scanData.issues.map(issue => (
            <div key={issue.id} className={`result-card ${issue.risk.toLowerCase()}`}>
              <div className="d-flex justify-content-between align-items-center">
                <h6>{issue.type}</h6>
                <span className={`risk-badge ${getRiskBadgeClass(issue.risk)}`}>
                  {issue.risk} Risk
                </span>
              </div>
              <p className="mb-2">{issue.description}</p>
              <p className="mb-0"><strong>Recommendation:</strong> {issue.recommendation}</p>
            </div>
          ))}
          
          <div className="mt-4">
            <button className="btn btn-primary me-2">
              <i className="fas fa-download me-2"></i> Download Report
            </button>
            <button 
              className="btn btn-outline-secondary me-2"
              onClick={() => onRescan(scanData.url)}
            >
              <i className="fas fa-redo me-2"></i> Rescan Website
            </button>
            <button 
              className="btn btn-outline-danger"
              onClick={onClear}
            >
              <i className="fas fa-times me-2"></i> Clear Results
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Results
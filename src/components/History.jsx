import React from 'react'

const History = ({ scanHistory, onRescan }) => {
  const getRiskBadgeClass = (risk) => {
    switch (risk.toLowerCase()) {
      case 'high': return 'risk-high'
      case 'medium': return 'risk-medium'
      case 'low': return 'risk-low'
      default: return 'risk-low'
    }
  }

  return (
    <section id="history" className="history-section">
      <div className="container">
        <div className="scan-history-card">
          <h3 className="mb-4">Recent Scans</h3>
          {scanHistory.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Website</th>
                    <th>Date</th>
                    <th>Risk Level</th>
                    <th>Issues Found</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {scanHistory.map(scan => (
                    <tr key={scan.id}>
                      <td>{scan.url}</td>
                      <td>{scan.date}</td>
                      <td>
                        <span className={`risk-badge ${getRiskBadgeClass(scan.risk)}`}>
                          {scan.risk}
                        </span>
                      </td>
                      <td>{scan.issues}</td>
                      <td>
                        <button 
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => onRescan(scan.url)}
                        >
                          Rescan
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-muted py-4">
              No scan history available. Scan a website to see results here.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default History
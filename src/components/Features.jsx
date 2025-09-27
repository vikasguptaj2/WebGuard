import React from 'react'

const Features = () => {
  const features = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Security Scanning',
      description: 'Detect malware, vulnerabilities, and security threats with advanced scanning technology.'
    },
    {
      icon: 'fas fa-tachometer-alt',
      title: 'Performance Analysis',
      description: 'Identify performance bottlenecks and optimization opportunities for faster loading.'
    },
    {
      icon: 'fas fa-search',
      title: 'SEO & Accessibility',
      description: 'Check for SEO issues and accessibility problems that affect user experience.'
    },
    {
      icon: 'fas fa-code',
      title: 'Code Quality',
      description: 'Analyze HTML, CSS, and JavaScript for best practices and potential issues.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Responsiveness',
      description: 'Test how well your website adapts to different screen sizes and devices.'
    },
    {
      icon: 'fas fa-lock',
      title: 'Privacy Compliance',
      description: 'Check for GDPR, CCPA, and other privacy regulation compliance issues.'
    }
  ]

  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2 className="text-center mb-5">Comprehensive Website Analysis</h2>
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card feature-card h-100">
                <div className="card-body text-center">
                  <div className="feature-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <h5 className="card-title">{feature.title}</h5>
                  <p className="card-text">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
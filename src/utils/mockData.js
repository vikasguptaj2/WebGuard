export const initialScanHistory = [
  { id: 1, url: 'https://example.com', date: '2023-06-15', risk: 'Low', issues: 2 },
  { id: 2, url: 'https://testsite.org', date: '2023-06-14', risk: 'High', issues: 8 },
  { id: 3, url: 'https://demo-website.net', date: '2023-06-10', risk: 'Medium', issues: 5 }
];

export const generateMockResults = (url) => {
  const riskLevels = ['Low', 'Medium', 'High'];
  const issueTypes = [
    'SSL Certificate Issue', 'Outdated Software', 'Malware Detected', 
    'Phishing Indicators', 'Suspicious Redirects', 'Blacklisted Domain',
    'Weak Security Headers', 'Vulnerable Libraries', 'Exposed Sensitive Data',
    'Suspicious JavaScript', 'Poor Performance', 'Broken Links'
  ];
  
  const issuesCount = Math.floor(Math.random() * 8) + 1;
  const issues = [];
  
  for (let i = 0; i < issuesCount; i++) {
    const randomType = issueTypes[Math.floor(Math.random() * issueTypes.length)];
    const randomRisk = riskLevels[Math.floor(Math.random() * riskLevels.length)];
    
    issues.push({
      id: i,
      type: randomType,
      risk: randomRisk,
      description: `This website has ${randomType.toLowerCase()}. This could pose a security risk.`,
      recommendation: `We recommend addressing this issue by following security best practices.`
    });
  }
  
  let overallRisk = 'Low';
  if (issues.some(issue => issue.risk === 'High')) overallRisk = 'High';
  else if (issues.some(issue => issue.risk === 'Medium')) overallRisk = 'Medium';
  
  return {
    url: url,
    scanDate: new Date().toLocaleString(),
    overallRisk: overallRisk,
    issues: issues,
    securityScore: Math.floor(Math.random() * 40) + 60,
    performanceScore: Math.floor(Math.random() * 30) + 70
  };
};
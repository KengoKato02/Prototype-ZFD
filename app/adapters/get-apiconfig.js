export default function getApiEndpoint() {
  const apiEndpoint = window.location.origin.includes('localhost')
    ? 'http://localhost:3000/'
    : 'https://verlce.zfd.com/api'; 
  return apiEndpoint;
}



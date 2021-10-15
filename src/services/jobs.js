import axios from 'axios';

const URL = 'https://www.zippia.com/api/jobs',
PAYLOAD = {
  'companySkills': true,
  'dismissedListingHashes': [],
  'fetchJobDesc': true,
  'jobTitle': 'Business Analyst',
  'locations': [],
  'numJobs': 20,
  'previousListingHashes': []
};

export async function get() {
  try {
    let res = await axios.post(URL, PAYLOAD);
    return res.status === 200 ? res.data : false;    
  } catch (err) {
    console.error(err);
  };
};
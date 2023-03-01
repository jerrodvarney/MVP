import axios from 'axios';

const url = 'http://localhost:3000';

const requests = {
  addNew: (trip) => {
    const options = {
      url: `${url}/trips`,
      method: 'post',
      data: trip,
    };

    return axios(options);
  },
};

export default requests;
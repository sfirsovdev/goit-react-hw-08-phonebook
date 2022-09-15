import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function getContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(newContact) {
  const { data } = await axios.post('/contacts', newContact);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}

export async function updateContact(id, newContact) {
  const { data } = await axios.patch(`/contacts/${id}`, newContact);
  return data;
}

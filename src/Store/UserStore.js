import { defineStore } from 'pinia';
import axios from 'axios';

export const UserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    userRole: localStorage.getItem('userRole') || '',
    logedUser: JSON.parse(localStorage.getItem('logedUser')) || null, 
  }),

  actions: {
    async login(credentials) {
      try {
        const response = await axios.post('/api/login', {
          email: credentials.email,
          password: credentials.password,
        });

        this.token = response.data.token;
        this.userRole = response.data.user.role;
        this.logedUser = response.data.user;

        localStorage.setItem('token', this.token);
        localStorage.setItem('userRole', this.userRole);
        localStorage.setItem('logedUser', JSON.stringify(this.logedUser)); 

        return this.token;
      } catch (error) {
        console.error('Login Error:', error);
        throw error;
      }
    },

 logout() {
  this.token = null;
  this.userRole = '';
  this.logedUser = null;

  localStorage.removeItem('token');
  localStorage.removeItem('userRole');
  localStorage.removeItem('logedUser');
}
  },

  
  

  getters: {
    getToken: (state) => state.token,
  },
});

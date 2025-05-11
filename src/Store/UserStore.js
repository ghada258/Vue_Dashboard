import { defineStore } from 'pinia';
import axios from 'axios';

export const UserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    userRole: ''
  }),
  actions: {
    async login(credentials) {
      try {
        const response = await axios.post('/api/login', {
          email: credentials.email,
          password: credentials.password,
        });

        console.log('Full response:', response);
        console.log('user role',response.data.role);
        
        this.userRole = response.data.role;
        const token = response.data.token;
        this.token = token; 
        localStorage.setItem('token', token);
     
        return token;
      } catch (error) {

        console.error('Login Error:', error);
        throw error;
      }
    },
  },
  getters: {
    getToken: (state) => state.token, 
  },
});
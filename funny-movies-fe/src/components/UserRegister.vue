<template>
    <header class="header">
  <a class="header-brand" href="#">
    <img src="../assets/2790961.png" width="22" height="24" class="d-inline-block align-top" alt="CoreUI Logo">
    Funny Movies
  </a>
  <button class="header-toggler" type="button">
    <span class="header-toggler-icon"></span>
  </button>
  <form class="d-flex">
    <input class="form-control me-2" type="email" placeholder="Email" aria-label="Search">
    <input class="form-control me-2" type="password" placeholder="Password" aria-label="Search">
    <button class="btn btn-outline-success" type="submit">Register/Login</button>
  </form>
</header>
  </template>
  
  <script>
  import UserService from '../services/UserService';
  export default {
    data() {
      return {
        user: {
            password: '',
            email: ''
        }
      };
    },
    methods: {
      submit(e) {
        e.preventDefault();
        UserService.registerUser(this.user)
          .then(response => {
            this.$router.push('/users/' + response.data.id);
          });
      },
    }
  };
  </script>
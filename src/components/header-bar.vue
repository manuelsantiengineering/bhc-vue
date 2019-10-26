<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand href="#">
        <router-link class="navbar-brand" to="/home"
          >Beartooth Hiking Company</router-link
        >
      </b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item><router-link to="/home">Home</router-link></b-nav-item>
          <b-nav-item><router-link to="/tours">Tours</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

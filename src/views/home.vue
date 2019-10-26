<template>
  <b-container class="bv-example-row bv-example-row-flex-cols">
    <br />
    <b-row>
      <b-jumbotron
        header="Beartooth Hiking Company (BHC)"
        lead="Find great hiking trips!"
      >
      </b-jumbotron>
    </b-row>
    <b-row>
      <b-col sm="4">
        <img
          src="../assets/001_womanHiker.jpg"
          alt="New Horizons"
          width="350"
          height="220"
        />
        <h3>Explore New Horizons</h3>
        <p>Multiple adventures to choice from.</p>
      </b-col>
      <b-col sm="4">
        <img
          src="../assets/002_freedom.jpg"
          alt="Freedom"
          width="350"
          height="220"
        />
        <h3>Enjoy Freedom</h3>
        <p>Incredible panoramic views.</p>
      </b-col>
      <b-col sm="4">
        <img
          src="../assets/003_groupselfie.jpg"
          alt="Sharing"
          width="350"
          height="220"
        />
        <h3>Share it with Friends</h3>
        <p>Great trips to enjoy with friends.</p>
      </b-col>
    </b-row>
    <br />
    <b-row align-h="end">
      <b-col cols="2" align-self="end">
        <b-button
          size="sm"
          variant="outline-primary"
          href="https://www.fs.usda.gov/recarea/shoshone/recarea/?recid=80899"
          >More information</b-button
        >
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col>
        <ul class="pager">
          <p>
            To find out more about prices and reservations click on our
            <a href="./tours.html">Tours</a> link.
          </p>
        </ul>
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col>
        <p class="text-right">Created by: Manuel E. Santiago Laboy</p>
      </b-col>
    </b-row>
  </b-container>
</template>

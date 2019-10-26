<template>
  <b-container class="bv-example-row bv-example-row-flex-cols">
    <br />
    <b-row>
      <h1>Tours</h1>
    </b-row>
    <b-row>
      <p>Select tours for more information and reservations</p>
    </b-row>
    <br />
    <br />
    <b-row>
      <b-col>
        <b-list-group>
          <b-list-group-item v-b-modal.modal01 class="list-group-item" button
            >Gardiner Lake</b-list-group-item
          >
          <b-list-group-item v-b-modal.modal02 class="list-group-item" button
            >Hellroaring Plateau</b-list-group-item
          >
          <b-list-group-item v-b-modal.modal03 class="list-group-item" button
            >The Beaten Path</b-list-group-item
          >
        </b-list-group>
      </b-col>
    </b-row>
  </b-container>

  <!--  <div class="modal fade" id="modal01" role="dialog">-->
  <!--    <div class="modal-dialog">-->
  <!--      <div class="modal-content">-->
  <!--        <div class="modal-header">-->
  <!--          <button type="button" class="close" data-dismiss="modal">&times;</button>-->
  <!--          <h3>Costs</h3>-->
  <!--          <p>Gardiner Lake</p>-->
  <!--        </div>-->
  <!--        <div class="modal-body">-->
  <!--          <table class="table">-->
  <!--            <thead>-->
  <!--            <tr>-->
  <!--              <th>Duration</th>-->
  <!--              <th>Cost Per Day</th>-->
  <!--              <th>Premium Days</th>-->
  <!--              <th>Level</th>-->
  <!--            </tr>-->
  <!--            </thead>-->
  <!--            <tbody>-->
  <!--            <tr>-->
  <!--              <td>3 or 5 days</td>-->
  <!--              <td>$40.00/day</td>-->
  <!--              <td>$60.00/day</td>-->
  <!--              <td>Intermediate</td>-->
  <!--            </tr>-->
  <!--            </tbody>-->
  <!--          </table>-->
  <!--          <div class="text-right">-->
  <!--            <a type="button" class="btn btn-primary btn-sm"-->
  <!--               href="./reservationGardiner.html">Reserve</a>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->

  <!--  <div class="modal fade" id="modal02" role="dialog">-->
  <!--    <div class="modal-dialog">-->
  <!--      <div class="modal-content">-->
  <!--        <div class="modal-header">-->
  <!--          <button type="button" class="close" data-dismiss="modal">&times;</button>-->
  <!--          <h3>Costs</h3>-->
  <!--          <p>Hellroaring Plateau</p>-->
  <!--        </div>-->
  <!--        <div class="modal-body">-->
  <!--          <table class="table">-->
  <!--            <thead>-->
  <!--            <tr>-->
  <!--              <th>Duration</th>-->
  <!--              <th>Cost Per Day</th>-->
  <!--              <th>Premium Days</th>-->
  <!--              <th>Level</th>-->
  <!--            </tr>-->
  <!--            </thead>-->
  <!--            <tbody>-->
  <!--            <tr>-->
  <!--              <td>2,3, or 4 days</td>-->
  <!--              <td>$35.00/day</td>-->
  <!--              <td>$62.50/day</td>-->
  <!--              <td>Easy</td>-->
  <!--            </tr>-->
  <!--            </tbody>-->
  <!--          </table>-->
  <!--          <div class="text-right">-->
  <!--            <a type="button" class="btn btn-primary btn-sm"-->
  <!--               href="./reservationHellroaring.html">Reserve</a>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
  <!--  <div class="modal fade" id="modal03" role="dialog">-->
  <!--    <div class="modal-dialog">-->
  <!--      <div class="modal-content">-->
  <!--        <div class="modal-header">-->
  <!--          <button type="button" class="close" data-dismiss="modal">&times;</button>-->
  <!--          <h3>Costs</h3>-->
  <!--          <p>The Beaten Path</p>-->
  <!--        </div>-->
  <!--        <div class="modal-body">-->
  <!--          <table class="table">-->
  <!--            <thead>-->
  <!--            <tr>-->
  <!--              <th>Duration</th>-->
  <!--              <th>Cost Per Day</th>-->
  <!--              <th>Premium Days</th>-->
  <!--              <th>Level</th>-->
  <!--            </tr>-->
  <!--            </thead>-->
  <!--            <tbody>-->
  <!--            <tr>-->
  <!--              <td>5 or 7 days</td>-->
  <!--              <td>$45.00/day</td>-->
  <!--              <td>$67.50/day</td>-->
  <!--              <td>Difficult</td>-->
  <!--            </tr>-->
  <!--            </tbody>-->
  <!--          </table>-->
  <!--          <div class="text-right">-->
  <!--            <a type="button" class="btn btn-primary btn-sm"-->
  <!--               href="./reservationBeatenPath.html">Reserve</a>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

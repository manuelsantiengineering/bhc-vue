<template>
  <b-modal ref="my-modal" hide-footer title="Using Component Methods">
    <b-row>
      <h3>{{ tourName }}</h3>
    </b-row>
    <b-row>
      <b-table :items="items" :fields="fields"> </b-table>
    </b-row>
    <b-button class="mt-3" variant="outline-danger" block @click="hideModal"
      >Close Me</b-button
    >
  </b-modal>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    tourName: {
      type: String,
      default: () => '',
    },
    duration: {
      type: Number,
      default: () => 0,
    },
    costPerDay: {
      type: Number,
      default: () => 0.0,
    },
    costPerPremiumDay: {
      type: Number,
      default: () => 0.0,
    },
    level: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      fields: ['Duration', 'Cost Per Day', 'Premium Days', 'Level'],
      items: [
        {
          tourName: this.props.tourName,
          duration: this.props.duration,
          costPerDay: this.props.costPerDay,
          costPerPremiumDay: this.props.costPerPremiumDay,
          level: this.props.level,
        },
      ],
    };
  },
  methods: {
    onNo() {
      this.$emit('handleNo');
    },
    hideModal() {
      this.$refs['my-modal'].hide();
    },
  },
};
</script>

<style lang="scss"></style>

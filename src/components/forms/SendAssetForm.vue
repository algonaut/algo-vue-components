<template>
  <b-form class="text-left" @submit.prevent="handleSubmit">
    <vue-form-generator :schema="schema" :model="model" :options="formOptions">
    </vue-form-generator>
    <b-button type="submit">Submit</b-button>
  </b-form>
</template>

<script>
import validators from '@/lib/validators';

export default {
  name: 'SendAssetForm',
  data() {
    return {
      model: {
        amt: '',
        rcv: ''
      },
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Amount',
            model: 'amt'
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Recipient address',
            model: 'rcv',
            validator: validators.algoAddress
          }
        ]
      },
      formOptions: {
        validateAfterChanged: true
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', this.model);
    }
  }
};
</script>

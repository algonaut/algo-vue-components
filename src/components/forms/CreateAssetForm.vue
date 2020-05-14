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
  name: 'CreateAssetForm',
  data() {
    return {
      model: {
        assetName: '',
        unitName: '',
        decimalPlaces: 0,
        totalIssuance: 0,
        network: 'testnet',
        defaultFrozen: false
      },
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Asset Name',
            model: 'assetName',
            validator: validators.assetName
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Unit Name',
            model: 'unitName',
            validator: validators.unitName
          },
          {
            type: 'select',
            values: Array.from(Array(20), (x, i) => i),
            label: 'Decimal Places',
            model: 'decimalPlaces',
            selectOptions: {
              hideNoneSelectedText: true
            }
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Total Issuance',
            model: 'totalIssuance',
            validator: validators.totalIssuance
          },
          {
            type: 'select',
            label: 'Network',
            model: 'network',
            values: ['BetaNet', 'TestNet', 'MainNet']
          },
          {
            type: 'input',
            inputType: 'checkbox',
            label: 'Frozen by default',
            model: 'defaultFrozen'
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

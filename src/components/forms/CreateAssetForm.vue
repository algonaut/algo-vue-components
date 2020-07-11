<template>
  <b-form class="text-left" @submit.prevent="handleSubmit">
    <vue-form-generator
      :schema="schema"
      :model="model"
      :options="formOptions"
      @validated="handleValidation"
    >
    </vue-form-generator>
    <!-- <div v-if="!isValid" class="error text-danger" style="margin-bottom: 1rem;">
      Please correct the errors above before submitting
    </div> -->
    <b-button :disabled="!isValid" type="submit">Submit</b-button>
  </b-form>
</template>

<script>
import validators from '@/lib/validators';

export default {
  name: 'CreateAssetForm',
  data() {
    return {
      isValid: false,
      model: {
        assetName: '', // asset name
        assetUnitName: '', // unit name
        decimalPlaces: 0, // decimal places
        assetTotal: 0, // total issuance
        assetURL: '', // asset url
        assetClawback: '', // clawback address
        assetFreeze: '', // freeze address
        assetManager: '', // manager address
        assetReserve: '', // reserve address
        assetMetadataHash: '', // asset metadata hash
        defaultFrozen: false
      },
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Asset Name',
            model: 'assetName',
            required: true,
            validator: validators.assetName
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Unit Name',
            model: 'assetUnitName',
            required: true,
            validator: validators.assetUnitName
          },
          {
            type: 'select',
            values: Array.from(Array(20), (x, i) => i),
            label: 'Decimal Places',
            model: 'assetDecimals',
            required: true,
            selectOptions: {
              hideNoneSelectedText: true
            },
            hint: 'For whole numbers, set decimal places to 0'
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Total Issuance',
            required: true,
            model: 'assetTotal',
            validator: validators.assetTotal,
            hint: 'Decimal places are implied'
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Asset Url',
            model: 'assetURL',
            validator: validators.assetUrl
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Clawback Address',
            model: 'assetClawback',
            required: true,
            validator: validators.algoAddress
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Freeze Address',
            model: 'assetFreeze',
            validator: validators.algoAddress
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Manager Address',
            model: 'assetManager',
            validator: validators.algoAddress
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Reserve Address',
            model: 'assetReserve',
            validator: validators.algoAddress
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Asset Metadata Hash',
            model: 'assetMetadataHash',
            validator: validators.assetMetadataHash
          },
          {
            type: 'input',
            inputType: 'checkbox',
            label: 'Freeze by default',
            model: 'defaultFrozen',
            validator: validators.defaultFrozen
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
      if (this.$data.isValid) {
        this.$emit('submit', {
          apar: this.model
        });
      }
    },
    handleValidation(isValid, errors) {
      this.$data.isValid = isValid;
      console.log('Validation result: ', isValid, ', Errors:', errors);
    }
  }
};
</script>

<style lang="scss" scoped></style>

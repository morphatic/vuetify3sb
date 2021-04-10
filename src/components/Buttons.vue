<template>
  <v-btn
    :text="text"
    :flat="flat"
  >
    Click Me
  </v-btn>
</template>

<script>
/**
 * The v-btn component replaces the standard html button with a material design theme
 * and a multitude of options. Any color helper class can be used to alter the
 * background or text color.
 */
export default {
  name: 'VButton',
  props: {
    /**
     * Makes the background transparent. When using the color prop, the color will
     * be applied to the button text instead of the background.
     */
    text: {
      type: Boolean,
      default: false,
    },
    /**
     * Removes the button box shadow.
     */
    flat: {
      type: Boolean,
      default: false,
    },
  },
  setup (props) {},
}
</script>

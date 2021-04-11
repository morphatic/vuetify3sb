<template>
  <v-btn
    :text="text"
    :flat="flat"
    :plain="plain"
    :icon="icon"
    :block="block"
    :color="color"
    :disabled="disabled"
    :outlined="outlined"
    :border="border"
    :rounded="rounded"
    :density="density"
    :height="height"
    :max-height="maxHeight"
    :max-width="maxWidth"
    :min-height="minHeight"
    :min-width="minWidth"
    :width="width"
    :elevation="elevation"
    :absolute="absolute"
    :bottom="bottom"
    :fixed="fixed"
    :left="left"
    :position="position"
    :right="right"
    :top="top"
    :size="size"
    :tag="tag"
  ><slot /></v-btn>
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
    /**
     * Removes the default background change applied when hovering over the button.
     */
    plain: {
      type: Boolean,
      default: false,
    },
    /**
     * Designates the button as icon. Button will become round and applies the text prop.
     */
    icon: {
      type: [Boolean, String],
      default: false,
    },
    /**
     * Expands the button to 100% of available space.
     */
    block: {
      type: Boolean,
      default: false,
    },
    /**
     * Applies specified color to the control - it can be the name of material color
     * (for example success or purple) or css color (`#033` or `rgba(255, 0, 0, 0.5)`).
     * You can find list of built in classes on the [colors page](https://next.vuetifyjs.com/styles/colors#material-colors).
     */
    color: {
      type: String,
      default: 'primary',
    },
    /**
     * Removes the ability to click or target the component.
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Applies the outlined border style.
     */
    outlined: {
      type: Boolean,
      default: false,
    },
    /**
     * Applies border styles to component.
     */
    border: {
      type: [Boolean, Number, String],
      default: false,
    },
    /**
     * TBD.
     */
    rounded: {
      type: [Boolean, Number, String],
      default: undefined,
    },
    /**
     * Adjusts the spacing within the component. Available options are: `default`,
     * `comfortable`, and `compact`.
     */
    density: {
      type: String,
      default: 'default',
    },
    /**
     * Sets the height for the component.
     */
    height: {
      type: [Number, String],
      default: undefined,
    },
    /**
     * Sets the maxiumum height for the component.
     */
    maxHeight: {
      type: [Number, String],
      default: undefined,
    },
    /**
     * Sets the maximum width for the component.
     */
    maxWidth: {
      type: [Number, String],
      default: undefined,
    },
    /**
     * Sets the minimum height for the component.
     */
    minHeight: {
      type: [Number, String],
      default: undefined,
    },
    /**
     * Sets the minimum width for the component.
     */
    minWidth: {
      type: [Number, String],
      default: undefined,
    },
    /**
     * Sets the width for the component.
     */
    width: {
      type: [Number, String],
      default: undefined,
    },
    /**
     * Designates an elevation applied to the component between 0 and 24. You can
     * find more information on the [elevation page](https://next.vuetifyjs.com/styles/elevation).
     */
    elevation: {
      type: [Number, String],
      default: undefined,
    },
    /**
     * Applies `position: absolute` to the component.
     */
    absolute: {
      type: Boolean,
      default: false,
    },
    /**
     * Aligns the component towards the bottom.
     */
    bottom: {
      type: [Boolean, Number, String],
      default: false,
    },
    /**
     * Applies `position: fixed` to the component.
     */
    fixed: {
      type: Boolean,
      default: false,
    },
    /**
     * Aligns the component towards the left.
     */
    left: {
      type: [Boolean, Number, String],
      default: false,
    },
    /**
     * Specifies the type of positioning method used for an element. Available
     * options are: `static`, `relative`, `fixed`, `absolute`, and `sticky`.
     */
    position: {
      type: String,
      default: undefined,
    },
    /**
     * Aligns the component towards the right.
     */
    right: {
      type: [Boolean, Number, String],
      default: false,
    },
    /**
     * Aligns the component towards the top.
     */
    top: {
      type: [Boolean, Number, String],
      default: false,
    },
    /**
     * Sets the height and width of the component. Default unit is `px`.
     * Can also use the following predefined sizes: `x-small`, `small`,
     * `default`, `large`, and `x-large`.
     */
    size: {
      type: [String, Number],
      default: 'default',
    },
    /**
     * Specify a custom tag used on the root element.
     */
    tag: {
      type: String,
      default: 'button',
    },
  },
  setup (props) {},
}
</script>

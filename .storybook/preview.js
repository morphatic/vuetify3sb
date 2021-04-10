import { app } from '@storybook/vue3'
import vuetify from '@/plugins/vuetify'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

app.use(vuetify)

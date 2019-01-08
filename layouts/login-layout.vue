<template>
  <v-app dark>
    <v-content>
      <v-container>
        <v-sheet>
          <logo/>
          <vuetify-logo/>
          <nuxt/>
        </v-sheet>
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>


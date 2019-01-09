<template>
  <v-app dark>
    <v-content>
      <v-container fill-height>
        <v-layout fill-height align-center justify-center>
          <v-card raised>
            <v-container>
              <v-layout row justify-center>
                <logo/>
              </v-layout>
              <nuxt/>
            </v-container>
          </v-card>
        </v-layout>
      </v-container>
    </v-content>
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


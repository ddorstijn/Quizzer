<template>
  <v-container>
    <v-form v-model="valid">
      <v-container>
        <v-layout justify-center="true">
          <h1>Login</h1>
        </v-layout>
        <v-layout wrap="true">
          <v-flex xs12 sm6>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <v-text-field v-model="nickname" :rules="nicknameRules" label="Nickname" required></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout justify-center>
          <v-btn large color="success">Login</v-btn>
        </v-layout>
      </v-container>
    </v-form>
    <v-layout justify-space-between>
      <v-btn flat block outline class="mx-3">New user? Register</v-btn>
      <v-btn flat block outline class="mx-3">Forgot password?</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: "login-layout"
};
</script>
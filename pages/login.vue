<template>
  <v-container>
    <v-form ref="login" v-model="valid">
      <v-container>
        <v-layout justify-center>
          <h1>Login</h1>
        </v-layout>
        <v-layout column>
          <v-flex>
            <v-text-field
              v-model="nickname"
              :rules="nameRules"
              label="Nickname"
              prepend-icon="account_circle"
              required
            ></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              v-model="password"
              :rules="passwdRules"
              label="Password"
              prepend-icon="vpn_key"
              required
            ></v-text-field>
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
  layout: "login-layout",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    password: "",
    passwdRules: [v => !!v || "Password is required"]
  }),
  methods: {
    validate() {
      if (this.$refs.login.validate()) {
        this.snackbar = true;
      }
    }
  }
};
</script>
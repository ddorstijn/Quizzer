<template>
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
            type="password"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout justify-end>
        <v-btn flat small class="mt-0">
          <v-icon class="pr-1" small dark>contact_support</v-icon>
          <span>Forgot password?</span>
        </v-btn>
      </v-layout>
      <v-layout justify-space-between align-center>
        <v-btn>Register</v-btn>
        <v-btn large color="blue" class="px-4">Login</v-btn>
      </v-layout>
    </v-container>
  </v-form>
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
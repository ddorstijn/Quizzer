<template>
  <v-form ref="register" v-model="valid">
    <v-container>
      <v-layout justify-center>
        <h1>Register</h1>
      </v-layout>
      <v-window v-model="step">
        <v-window-item :value="1">
          <v-layout wrap>
            <v-flex xs12 md6>
              <v-text-field v-model="firstname" :rules="nameRules" label="First name" required></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field v-model="lastname" :rules="nameRules" label="Last name" required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout column>
            <v-flex>
              <v-text-field v-model="nickname" :rules="nameRules" label="Nickname" required></v-text-field>
            </v-flex>
          </v-layout>
        </v-window-item>

        <v-window-item :value="2">
          <v-layout wrap>
            <v-flex>
              <v-text-field
                v-model="password"
                :rules="passwdRules"
                label="Password"
                type="password"
                required
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="passwordCheck"
                :rules="passwdRules"
                label="Retype password"
                type="password"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-window-item>
      </v-window>

      <v-layout justify-space-between align-center>
        <v-btn large :disabled="step === 1" flat @click="step--">Back</v-btn>
        <v-btn large color="blue" :disabled="step === 2" @click="step++">Next</v-btn>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  layout: "login-layout",
  data: () => ({
    valid: true,
    firstname: "",
    lastname: "",
    nickname: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    password: "",
    passwordCheck: "",
    passwdRules: [v => !!v || "Password is required"],
    step: 1
  }),
  methods: {
    validate() {
      if (this.$refs.register.validate()) {
        this.snackbar = true;
      }
    }
  }
};
</script>
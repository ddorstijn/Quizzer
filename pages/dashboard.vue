<template>
  <v-layout wrap justify-center>
    <v-flex xs12 sm8 md6>
      <v-form>
        <v-container>
          <v-layout justify-center>
            <h1>Join a Quiz!</h1>
          </v-layout>
          <v-layout column>
            <v-flex>
              <v-text-field v-model="quizName" :rules="quizRules" label="Quiz ID" box required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-btn large color="success">Start Quiz</v-btn>
          </v-layout>
        </v-container>
      </v-form>
    </v-flex>
    <v-flex xs8>
      <v-divider dark/>
    </v-flex>
    <v-flex xs12 sm8 md6>
      <v-form>
        <v-container>
          <v-layout justify-center>
            <h1>Or create your own!</h1>
          </v-layout>
          <v-layout column>
            <v-flex>
              <v-text-field v-model="quizName" :rules="quizRules" label="Quiz Title" box required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-btn large color="secondary">Create</v-btn>
          </v-layout>
        </v-container>
      </v-form>
    </v-flex>
  </v-layout>
</template>

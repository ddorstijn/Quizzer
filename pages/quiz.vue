<template>
  <v-layout column>
    <v-flex>
      <h1>Question title</h1>
    </v-flex>
    <v-layout wrap row>
      <v-flex md7>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis ante at neque mattis varius at non justo. Nulla consequat semper nibh, quis pretium elit tristique ac. Vestibulum lectus risus, eleifend at viverra at, auctor et sem. Vestibulum bibendum bibendum accumsan. Nunc volutpat lorem ut neque finibus iaculis. Proin luctus ultricies eros, vitae congue quam auctor in. Fusce congue ut eros sit amet rutrum.
          Vivamus eget enim nec urna lobortis eleifend vitae id justo. Nam eget eleifend libero, quis feugiat urna. Maecenas tristique cursus enim vel tempor. In a pellentesque nulla, eu accumsan enim. Phasellus hendrerit tristique felis quis mattis. Mauris convallis tristique nibh eu consectetur. Donec velit leo, lobortis a luctus imperdiet, laoreet ac lorem. Vestibulum mollis non neque at euismod. Praesent ultricies congue fringilla. Phasellus condimentum ullamcorper laoreet. Nullam id libero eget quam faucibus dapibus.
          Nulla tellus tellus, laoreet quis tellus nec, vulputate convallis diam. In hac habitasse platea dictumst. Suspendisse ut tempor sapien. In eget faucibus lectus. Nullam egestas blandit dolor, eu lobortis diam imperdiet sit amet. Etiam orci elit, elementum et viverra ac, egestas vel tellus. Suspendisse suscipit aliquam diam, non mollis velit laoreet eu. Fusce id fermentum justo. Mauris at efficitur risus. Nulla tempor egestas posuere. Phasellus lobortis, ante a ultricies tristique, nibh elit viverra diam, quis porta nisl urna a eros.
        </p>
      </v-flex>
      <v-spacer/>
      <v-flex md5>
        <img src="https://via.placeholder.com/350" align="right">
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <h2>This is a sample question?</h2>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex d-none>
        <v-radio-group v-model="radioGroup" dark>
          <v-radio dark color="blue" v-for="n in 3" :key="n" :label="`Radio ${n}`" :value="n"></v-radio>
        </v-radio-group>
      </v-flex>
      <v-flex>
        <v-text-field label="Answer" single-line></v-text-field>
      </v-flex>
      <v-spacer/>
    </v-layout>
    <v-layout>
      <v-flex md7>
        <v-layout align-center justify-end>
          <v-btn>Hint</v-btn>
          <v-btn large color="blue" class="mr-0">Validate</v-btn>
        </v-layout>
      </v-flex>
      <v-spacer/>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  radioGroup: 1
};
</script>

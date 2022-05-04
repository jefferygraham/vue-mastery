<template>
    <div>
        <!-- Registration Form -->
          <div class="text-white text-center font-bold p-5 mb-4" v-if="registering_alert" :class="registering_alert_variant">{{registering_alert_message}}</div>
          <vee-form
            :validation-schema="schema"
            @submit="register"
            :initial-values="userData"
          >
            <!-- Name -->
            <div class="mb-3">
              <label class="inline-block mb-2">Name</label>
              <vee-field
                type="text"
                name="name"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Name"
              />
              <ErrorMessage class="text-red-600" name="name" />
            </div>
            <!-- Email -->
            <div class="mb-3">
              <label class="inline-block mb-2">Email</label>
              <vee-field
                type="email"
                name="email"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Email"
              />
              <ErrorMessage class="text-red-600" name="email" />
            </div>
            <!-- Age -->
            <div class="mb-3">
              <label class="inline-block mb-2">Age</label>
              <vee-field
                type="number"
                name="age"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
              />
              <ErrorMessage class="text-red-600" name="age" />
            </div>
            <!-- Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Password</label>
              <vee-field
                name="password" :bails="false" v-slot="{field, errors}">
                <input type="password" placeholder="password" v-bind="field"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"/>
                <div class="text-red-600" v-for="error in errors" :key="error">{{error}}</div>
              </vee-field>
            </div>
            <!-- Confirm Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Confirm Password</label>
              <vee-field
                type="password"
                name="confirm_password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Confirm Password"
              />
              <ErrorMessage class="text-red-600" name="confirm_password" />
            </div>
            <!-- Country -->
            <div class="mb-3">
              <label class="inline-block mb-2">Country</label>
              <vee-field
                as="select"
                name="country"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
              >
                <option value="USA">USA</option>
                <option value="Mexico">Mexico</option>
                <option value="Germany">Germany</option>
                <option value="Antarctica">Antarctica</option>
              </vee-field>
              <ErrorMessage name="country" class="text-red-600" />
            </div>
            <!-- TOS -->
            <div class="mb-3 pl-6">
              <vee-field
                name="tos"
                value="1"
                type="checkbox"
                class="w-4 h-4 float-left -ml-6 mt-1 rounded"
              />
              <label class="inline-block">Accept terms of service</label>
              <ErrorMessage class="text-red-600 block" name="tos" />
            </div>
            <button
              type="submit"
              :disabled="registering"
              class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
            >
              Submit
            </button>
          </vee-form>
    </div>
</template>
<script>

export default {
  name: 'RegistrationForm',
  data() {
    return {
      schema: {
        name: 'required|min:3|max:100|alpha_spaces',
        email: 'required|min:3|max:100|email',
        age: 'required|min_value:18|max_value:100',
        password: 'required|min:6|max:32|alpha_num',
        confirm_password: 'passwords_mismatch:@password',
        country: 'required|country_excluded:Antarctica',
        tos: 'tos',
      },
      userData: {
        country: "USA",
      },
      registering: false,
      registering_alert: false,
      registering_alert_variant: 'bg-blue-500',
      registering_alert_message: 'Please wait. You account is being prepared.',
    };
  },
  methods: {
    async register(values) {
      this.registering = true;
      this.registering_alert = true;
      this.registering_alert_variant = "bg-blue-500";
      this.registering_alert_message = 'Please wait. You account is being prepared.';

      try {
        await this.$store.dispatch('register', values);
      } catch (error) {
        this.registering = false;
        this.registering_alert_variant = "bg-red-500";
        this.registering_alert_message = "Unexpected error occured. Please try again later.";
        return;
      }

      this.registering_alert_variant = 'bg-green-500';
      this.registering_alert_message = 'Success! Your account has been created.';
    },
  },
};
</script>
<style>

</style>

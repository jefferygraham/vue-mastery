<template>
    <div>
        <div class="text-white text-center font-bold p-5 mb-4" v-if="loggingIn_alert" :class="loggingIn_alert_variant">{{loggingIn_alert_message}}</div>
          <vee-form :validation-schema="loginSchema" @submit="login">
            <!-- Email -->
            <div class="mb-3">
              <label class="inline-block mb-2">Email</label>
              <vee-field
                name="email"
                type="email"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Email"
              />
              <ErrorMessage class="text-red-600" name="email" />
            </div>
            <!-- Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Password</label>
              <vee-field
                type="password"
                name="password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Password"
              />
              <ErrorMessage class="text-red-600" name="password" />
            </div>
            <button
              type="submit"
              class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
              :disabled="loggingIn"
            >
              Submit
            </button>
          </vee-form>
    </div>
</template>
<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      loginSchema: {
        email: 'required|email',
        password: 'required|min:3|max:32',
      },
      userData: {
        country: "USA",
      },
      loggingIn: false,
      loggingIn_alert: false,
      loggingIn_alert_variant: 'bg-blue-500',
      loggingIn_alert_message: 'Please wait. You are being logged in.',
    };
  },
  methods: {
    login(values) {
      this.loggingIn = true;
      this.loggingIn_alert = true;
      this.loggingIn_alert_variant = "bg-blue-500";
      this.loggingIn_alert_message = 'Please wait. You are being logged in';

      this.loggingIn_alert_variant = 'bg-green-500';
      this.loggingIn_alert_message = 'Success! You are now logged in.';
      console.log(values);
    },
  },
};
</script>
<style>

</style>

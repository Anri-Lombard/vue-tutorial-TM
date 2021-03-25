const app = Vue.createApp({
    data() {
        return {
            firstName: "Anri",
            lastName: "Lombard",
            age: 18,
            email: "anri.m.lombard@gmail.com",
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
            gender: "male",
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()

            this.firstName = results[0].name.first 
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        },
    },
})

app.mount("#app")

// Syncronous code will execute from top to bottom.
// Asyncronous code will execute from top to bottom, but 
    // stop to first execute special code before moving on.
    // Also executes at the same time other code executes.
    // Async always returns promises

// Promises: like real promises: if the promise is kept it
    // is resolved, else it is rejected.
    // .then runs after a promise is resolved.
    // Replaces callbacks.
    // Promise.all runs all promises at the same time, then 
        // the .then.

// Fetch: Always executes asyncronously.
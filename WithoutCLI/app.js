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
        getUser() {
            alert(this.firstName + " " + this.lastName);
        }
    }
})

app.mount("#app")
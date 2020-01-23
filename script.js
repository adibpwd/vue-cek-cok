const vueApp = new Vue({
   
  el: '#app',
  
  data() {
      return {
         appName: 'User Management',
         author: 'Adib-cs Corp',
         users: [{
            "id": 1,
            "name": "Adib-cs",
            "email": "adib-cs@hacker.id",
            "gender": "male"
          }, {
            "id": 2,
            "name": "Geri Waldera",
            "email": "gwaldera1@ftc.gov",
            "gender": "Male"
          }, {
            "id": 3,
            "name": "Freedman Batchelour",
            "email": "fbatchelour2@bloglovin.com",
            "gender": "Male"
          }, {
            "id": 4,
            "name": "Violet Van den Broek",
            "email": "vvan3@tamu.edu",
            "gender": "Female"
          }, {
            "id": 5,
            "name": "Mariquilla Liccardo",
            "email": "mliccardo4@wp.com",
            "gender": "Female"
          }],
          userUpdate: {},
          genders: [
              'male', 'female'
          ]
      }
  },


  computed: {
        appTitle() {
            return this.appName + ' by ' + this.author
        }    
  },

  methods: {
     edit(user) {
         this.userUpdate = user
         
     },

     del(indexUser) {
        let question = confirm('yakin mau dihapus')

        if(question) {
            this.users.splice(indexUser, 1)
        }
     },

     hapus() {
        console.log('hapus');
        
     }
  },

})

const  app = new Vue({
    el: '#app',
    mounted: function(){
        fetch  ("https://api.mockaroo.com/api/22b9e5c0?count=5&key=f1d27b90") 
        

.then(res => res.json())
.then(emails => {
    //set vue's emails variable to the array that was fetched
this.emails = emails;
//then set Vue's selectedEmail
this.selectedEmail = this.emails[0];


})
.catch(err => console.log(err));    
    },
    data: {
    message:"hello vue!",
    emails:[],
    selectedEmail:{},
    view:'inbox'
    },

    methods: {
        getPic: function(emailObj) {
            return emailObj.Picture;
        },
        getalt(emailObj){
            return  `${emailObj.first_name} ${emailObj.last_name}'s avatar`;
        },
        clickedEmail: function(emailObj){
            this.selectedEmail = emailObj;
        },
        isSelected: function(emailObj){
            return emailObj == this.selectedEmail;
        },
        incomingEmail(){
            fetch  ("https://api.mockaroo.com/api/22b9e5c0?count=1&key=f1d27b90") 
            
    
    .then(res => res.json())
    .then(emails => {
        this.emails.unshift(emails[0]);
    
  })
  .catch(err => console.log(err));  

    },
    currentView(){
        switch (this.view) {
            case "inbox":
            return this.emails.filter(email => !email.deleted);
            break;

            case 'trash':
            return this.emails.filter(email => !email.deleted);
            break;

        }
    },
    
    setView(clickedView){
        this.View = clickedView;
    },
    deleteEmail(){
        this.$set(this.selectedEmail,"deleted", true);
    }
    }
});
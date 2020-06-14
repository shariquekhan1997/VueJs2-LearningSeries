
//Vue Instance
var vm = new Vue({
    //el option specifies to which html element is this Vue is associated to.
    // '#myapp' - is a css selector which selects the div tag of id myapp.
    el: '#myapp',
    //data property is plain js object for dynamic data
    data: {
        name: "Sharique!",
        age: 23,
        appName: "VueJs",
        website: "www.vuejs.org",
        brandName: "<b>Code Evolution</b>"
    },
    //methods property can be used for writing functions
    methods:{
        greet: function(time){
            return 'Good ' + time + " " + this.name;
        }
    }
});

//Binding Attribute
var vm2 = new Vue({
    el: '#bind-attribute',
    data: {
        myId: "data-id",
        isDisabled: true
    }
});

//Binding Inline Styles with Object and Array Syntax
var styleModel = new Vue({
    el: '#style',
    data: {
        highLightColor: "Orange",
        headerSize: 50,
        headerStyleObject: {
            color: "orange",
            fontSize: "50px",
            margin:"0"
        },
        baseStyleObject:{
            fontSize: "50px",
            margin:"0"
        },
        //latest style wil override the old style - margin will be 10px
        successStyleObject:{
            color: "green",
            backgroundColor:"lightgreen",
            border: "1px solid darkgreen",
            margin:"10px"
        },
        //Here latest are the clolor, backgroundColor and border which will be change
        dangerStyleObject:{
            color: "darkred",
            backgroundColor: "tomato",
            border: "1px solid darkred"
        }
    }
});



'use strict'
const axios = require('axios');

async function getapidata(require,response) {
    const url =`https://fruit-api-301.herokuapp.com/getFruit`
    await axios.get(url).then(response => 
       {
     let result=response.data.map(f => {return new Apidta(f);}
     )
     response.send(result);
       } 
        
        ).catch(error => console.log(error));

}


class Apidta{
    constructor(item){
        this.name=item.name;
        this.image=image;
        this.price=price;


    }
}

module.exports = (getapidata);
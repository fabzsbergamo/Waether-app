import axios from "axios";

export default axios.create({
    baseURL: 'https://api.ambeedata.com',
    headers: {
        api_key: '47758073513ba5cbcf0f3020c4b14f40a6ac3e2dd9813be793f77dfe04417857',
    }
})

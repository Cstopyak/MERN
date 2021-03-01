const axios = require('axios');

const route1 = (req, res)=>{
    res.status(200).send({
        success:'true'
    })
}

// gather query params

const gatherTags = (req, res)=>{
    const { tags, sortBy } = req.params;
    const valSortBy = ['id', 'tags', 'reads', 'likes', 'popularity',]
}

// validating sortby

if(valSortBy.indexOf(sortBy) === -1){
    res.status(400).send({
        error: "sortBy is invalid"
    });
}



// requesting multiple tags

if(tags.indexOf(',') !== -1){
    let tagArr = tags.split(',');
    let paths = tagArr.map((tag, i) =>{
        return axios.get(`https://api.hatchways.io/assessment/blog/posts?tag=${tag}&sortBy=${sortBy}`)
    });
}

axios.all([...paths])



module.eports = {route1, gatherTags}

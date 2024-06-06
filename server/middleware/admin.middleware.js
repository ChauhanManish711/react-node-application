module.exports.test = (req,res,next) => {
    console.log(req.params);
    if(!req.params.age)
    {
        res.send({'message': 'This is a test middleware , please set your age'});
    }
    else{
        const age = req.params.age;
        if(age<18){
            res.send({'message' : 'You are under age'});
        }
        else if(age>60)
        {
            res.send({"message":'You are overage'});
        }
        else{
            next();
        }
    }
}

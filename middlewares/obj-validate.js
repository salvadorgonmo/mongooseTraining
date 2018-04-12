const objAccount = function (req, res, next) {
    
    let { email: e, password: p, phone: o} = req.body
    //console.log(e.length+' '+p.length+' '+o.length)
    try{
        if(e && p && o.length )
            next()
        else 
            res.send( {message: 'invalid object format: properties cannot be empty'})
    }catch(err){
        res.send( {message: 'invalid object format: missed proppertie'})
    }
}

const objUser = function (req, res, next) {
    let { name , type } = req.body
    try{
        if(name.length > 0 && type.length > 0 )
            next()
        else 
            res.send( {message: 'invalid object format: properties cannot be empty'})
    }catch(err){
        res.send( {message: 'invalid object format: missed proppertie'})
    }
}

const objDocumental = function (req, res, next) {
    let { name, clasification: c, duration: d} = req.body
    try{
        if( name.length > 0 && c.length > 0 && d.toString().length > 0 && !isNaN(d) )
            next()
        else 
            res.send( {message: 'invalid object format: properties cannot be empty'})
    }catch(err){
        res.send( {message: 'invalid object format: missed or invalid proppertie'})
    }
}

const objMovie = function (req, res, next) {
    let { title, gender , duration_minutes: d, clasification: c } = req.body
    try{
        if( title.length > 0 && gender.length > 0 && d.toString().length > 0 && !isNaN(d) && c.length > 0)
            next()
        else 
            res.send( {message: 'invalid object format: properties cannot be empty'})
    }catch(err){
        res.send( {message: 'invalid object format: missed or invalid proppertie'})
    }
}

const objSerie = function (req, res, next) {
    let { title, gender , seasons, clasification: c } = req.body
    try{
        if( title.length > 0 && gender.length > 0 && seasons.length && c.length > 0)
            next()
        else 
            res.send( {message: 'invalid object format: properties cannot be empty'})
    }catch(err){
        res.send( {message: 'invalid object format: missed or invalid proppertie'})
    }
}
    

module.exports = {
    objAccount,
    objUser,
    objDocumental,
    objMovie,
    objSerie
}
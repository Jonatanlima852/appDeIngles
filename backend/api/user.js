
module.exports = app => {
    
    const save = async (req, res) => {
        const user = { ...req.body }
        res.json({sucess: true})
        console.log(user)
    }

    return { save }
}
const userQuery = require('../../querries/user');

module.exports = {
    async createUser(req, res) {
        let name = req.body.name;
        let email = req.body.email;
        let dob = req.body.dob;
        let gender = req.body.gender;
        let totalAmount = req.body.totalAmount;
        let data = {
            name: name,
            email: email,
            dob: dob,
            gender: gender,
            totalAmount: totalAmount
        };

        try {
            let user = await userQuery.createUser(data);
            return res
                .status(200)
                .send({
                    code: 200,
                    status: "success",
                    data: user
                });
        } catch (err) {
            return res 
                .status(422)
                .send({
                    code: 422,
                    status: "failed",
                    msg: err.message
                })
        }
    },

    async getUsers(req, res) {
        try {
            let user = await userQuery.getUser();
            return res 
                .status(200)
                .send({
                    code: 200,
                    status: "success",
                    data: user
                });
        } catch (err) {
            return res 
                .status(422)
                .send({
                    code: 422,
                    status: "failed",
                    msg: err.message
                });
        }
    },

    async getByName(req, res) {
        let name = req.body.name;
        let email = req.body.email;
        let dob = req.body.dob;
        let gender = req.body.gender;
        let data = {
            name : name,
            email : email,
            dob : dob,
            gender : gender
        };

        try {
            let userExist = await userQuery.getByName(data);
            if(userExist != null && userExist != undefined && userExist != '') {
                return res 
                    .status(400)
                    .send({
                        code: 200, 
                        status: "user exist",
                    });
            }

            let user = await userQuery.createUser(data);
            return res
                .status(200)
                .send({
                    code: 200, 
                    status: "success", 
                    data: user
                });
            
        } catch (err) {
            console.log(err);
            return res
                .status(422)
                .send({ 
                    code: 422, 
                    status: "failed", 
                    msg: err.message 
                });
        }
    },

    async getUserById(req, res) {
        let data = req.body;
        try {
            let userExist = await userQuery.getUserById(data)
        } catch (err) {
            
        }
    }
} 
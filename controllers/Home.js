var SinhVienModel = require('../models/SinhVien');

class HomeController {
    static index(req, res, next) {
        res.render('index', {title: 'Trung'});
        return new Promise((resolve, reject) => {
            SinhVienModel.find({})
                .then(function (data) {
                    console.log(data);
                })
                .catch(function (error) {
                    console.error(error);
                });
        });

    }
}

module.exports = HomeController;
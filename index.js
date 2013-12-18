exports.home = function(db) {
    return function(req, res) {
        db.getProducts(null, function(error, result) {
            if (error) throw error;
            var data = {};
            data.all = result;
            data.Item1Name = result[0].ProductName;
            data.Item2ReorderLevel = result[1].ReorderLevel;
            res.send(data);
        });
    }
}

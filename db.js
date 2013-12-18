var edge = require('edge');

exports.getProducts = edge.func('sql', function() {/*
					    select top 10 * from Products 
					 */});
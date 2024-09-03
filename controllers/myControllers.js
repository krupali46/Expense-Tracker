const transactionsModel = require('../models/transaction.js');


const defultcon = async (req, res) => {
    let data = await transactionsModel.find({});
    res.render('index', { transactions: data });
};


const addcon = async (req, res) => {
    const newTracker = new transactionsModel(req.body);
    await newTracker.save();
    res.redirect('/');
};


const createcon = (req, res) => {
    res.render('addTransactions', { transactions: null });
};


const editcon = async (req, res) => {
    const { id } = req.params;
    let data = await transactionsModel.findOne({ _id: id });
    res.render('addTransactions', { transactions: data });
};

const updatecon = async (req, res) => {
    const { id } = req.params;
    await transactionsModel.updateOne({ _id: id }, { $set: req.body });
    console.log("update  transactions");
    
    res.redirect('/');
};


const deletecon = async (req, res) => {
    const { id } = req.params;
    await transactionsModel.deleteOne({ _id: id });
    res.redirect('/');
};

module.exports = { defultcon, addcon, createcon, editcon, updatecon, deletecon };

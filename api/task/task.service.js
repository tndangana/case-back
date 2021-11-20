const Task = require('./task.model').Task;



async function create(param) {

    try {

        if (await Task.findOne({ title: param.title })) return;
        let task = new Task(param);
        let taxTaken = Number(0);
        let profit = Number(0);
        taxTaken = Number(task.taxRate) / 100 * Number(task.sellingPrice);
        profit = Number(task.sellingPrice) - (Number(taxTaken) + Number(task.costPrice));
        console.log(taxTaken, "" + "   ", profit);
        //Decimal places two
        task.taxTaken = taxTaken.toFixed(2);
        task.profit = profit.toFixed(2);
        await task.save();
        return Task.findById(task._id);

    } catch (e) {
          throw new Error(e)
    }
}

async function findOne(id) {
    try {
        if (!await Task.findById(id)) return;
        else return Task.findById(id);
    } catch (error) {

    }

}
async function findAll() {
    try {
        return await Task.find({})
    } catch (error) {

    }

}
async function update(_id, param) {

    try {

        let task = await Task.findById(_id);
        if (!task) return;
        let taxTaken = Number(0);
        let profit = Number(0);
        taxTaken = Number(param.taxRate) / 100 * Number(param.sellingPrice);
        profit = Number(param.sellingPrice) - (Number(taxTaken) + Number(param.costPrice));
        //Decimal places two
        param.taxTaken = taxTaken.toFixed(2);
        param.profit = profit.toFixed(2);
        Object.assign(task, param);
        await task.save();
        return Task.findById(task._id)
    } catch (error) {

    }

}
async function _delete(_id) {
    try {
        return await Task.deleteOne({ _id: _id })
    } catch (error) {

    }
}

module.exports = { delete: _delete, update: update, findAll: findAll, findOne: findOne, create: create }
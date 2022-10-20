////////////////////////////////////////////// Helper code, do not edit /////////////////////////////////////////
import { allIds, fetchOrderById } from "../api";

////////////////////////////////// Your code tasks is below //////////////////////////////////////////////////////

const fetchAllOrders = async () => {
    const ids = allIds;
    return await Promise.all(
        ids.map(async id => await fetchOrderById(id))
    )
};

const bucketOrdersByUsers = async () => {
    let ordersByUsers = {};
    const allOrders = await fetchAllOrders();
    allOrders.forEach(order => {
        if(!ordersByUsers[order.userId]) ordersByUsers[order.userId] = [order]
        else ordersByUsers[order.userId].push(order);
    })
    return ordersByUsers;
};

const getLast2WeeksOrders = async () => {
    const allOrders = await fetchAllOrders();
    const calculate2Weeks = new Date();
    calculate2Weeks.setDate(calculate2Weeks.getDate() - 14);
    return allOrders.filter(order => order.timestamp >= calculate2Weeks.getTime());
};

const bucketOrdersByDate = async () => {
    let ordersByDate = {};
    const allOrders2Weeks = await getLast2WeeksOrders();
    allOrders2Weeks.forEach(order => {
        if(!ordersByDate[order.timestamp]) ordersByDate[order.timestamp] = [order];
        else ordersByDate[order.timestamp].push(order);
    })
    return ordersByDate;
};

fetchAllOrders()
// .then(res => console.log(res));

bucketOrdersByUsers()
 //.then(res => console.log(res));

getLast2WeeksOrders()
//.then(res => console.log(res));

bucketOrdersByDate()
 //.then(res => console.log(res));

////////////////////////////////////////

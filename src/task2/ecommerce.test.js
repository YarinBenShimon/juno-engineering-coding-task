import { fetchOrderById } from "../api";
import {fetchAllOrders, bucketOrdersByUsers, getLast2WeeksOrders, bucketOrdersByDate } from './ecommerce';

const ORDER_ID = "70ef599e5eca171b2bce84d1"
test("Ecommerce - fetchOrderById", async () => {
    let orders = await fetchOrderById(ORDER_ID);
    expect(orders).toBeTruthy();
});

test('Ecommerce - fetchAllOrders check truthness', async () => {
    const allOrders = await fetchAllOrders();
    expect(allOrders).toBeTruthy();
  });
  
test('Ecommerce - bucketOrdersByUsers check truthness', async () => {
    const usersBucket = await bucketOrdersByUsers();
    expect(usersBucket).toBeTruthy();
  });
  
test('Ecommerce - getLast2WeeksOrders check truthness', async () => {
    const last2WeekOrders = await getLast2WeeksOrders();
    expect(last2WeekOrders).toBeTruthy();
  });
  
test('Ecommerce - bucketOrdersByDate check truthness', async () => {
    const ordersByDate = await bucketOrdersByDate();
    expect(ordersByDate).toBeTruthy();
  });
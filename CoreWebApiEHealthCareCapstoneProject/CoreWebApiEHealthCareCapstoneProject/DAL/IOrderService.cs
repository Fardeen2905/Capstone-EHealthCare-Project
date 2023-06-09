﻿using CoreWebApiEHealthCareCapstoneProject.Models;

namespace CoreWebApiEHealthCareCapstoneProject.DAL
{
    public interface IOrderService
    {
        public Task<List<Order>> GetOrdersListAsync();
        public Task<IEnumerable<Order>> GetOrderByIdAsync(int id);
        public Task<int> AddOrderAsync(Order order);
        public Task<int> UpdateOrderAsync(Order order, int id);
        public Task<int> DeleteOrderAsync(int id);
    }
}

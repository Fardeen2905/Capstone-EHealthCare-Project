using CoreWebApiEHealthCareCapstoneProject.DAL;
using CoreWebApiEHealthCareCapstoneProject.Models;
using Microsoft.AspNetCore.Mvc;

namespace CoreWebApiEHealthCareCapstoneProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService orderService;
        public OrderController(IOrderService orderService)
        {
            this.orderService = orderService;
        }

        [HttpPost("addorder")]
        public async Task<IActionResult> AddOrderAsync(Order order)
        {
            if (order == null)
            {
                return BadRequest();
            }
            try
            {
                var response = await orderService.AddOrderAsync(order);
                return Ok(response);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}

using CoreWebApiEHealthCareCapstoneProject.DAL;
using CoreWebApiEHealthCareCapstoneProject.Models;
using Microsoft.AspNetCore.Mvc;

namespace CoreWebApiEHealthCareCapstoneProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService userService;
        public UserController(IUserService userService)
        {
            this.userService = userService;
        }
        [HttpGet("getuserlist")]
        public async Task<List<User>> GetUsersListAsync()
        {
            try
            {
                return await userService.GetUsersListAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }
        [HttpGet("getuserbyid")]
        public async Task<IEnumerable<User>> GetUserByIdAsync(int UserId)
        {
            try
            {
                var response = await userService.GetUserByIdAsync(UserId);
                if (response == null)
                {
                    return null;
                }
                return response;

            }
            catch (Exception)
            {
                throw;
            }
        }
        [HttpPost("adduser")]
        public async Task<IActionResult> AddUserAsync(User user)
        {
            if (user == null)
            {
                return BadRequest();
            }
            try
            {
                var response = await userService.AddUserAsync(user);
                return Ok(response);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}

using CoreWebApiEHealthCareCapstoneProject.DAL;
using CoreWebApiEHealthCareCapstoneProject.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace CoreWebApiEHealthCareCapstoneProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService categoryService;
        public CategoryController(ICategoryService categoryService)
        {
            this.categoryService = categoryService;
        }

        [HttpGet("getcategorylist")]
        public async Task<List<Category>> GetCategoriesListAsync()
        {
            try
            {
                return await categoryService.GetCategoriesListAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }
        [HttpGet("getcategorybyid")]
        public async Task<IEnumerable<Category>> GetCategoryByIdAsync(int CategoryId)
        {
            try
            {
                var response = await categoryService.GetCategoryByIdAsync(CategoryId);
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
        [HttpPost("addcategory")]
        public async Task<IActionResult> AddCategoryAsync(Category category)
        {
            if (category == null)
            {
                return BadRequest();
            }
            try
            {
                var response = await categoryService.AddCategoryAsync(category);
                return Ok(response);
            }
            catch (Exception)
            {
                throw;
            }
        }
        [EnableCors]
        [HttpPut("updatecategorybyid")]
        public async Task<int> UpdateCategoryAsync(Category category, int id)
        {
            try
            {
                var response = await categoryService.UpdateCategoryAsync(category, id);
                return response;
            }
            catch (Exception)
            {
                throw;
            }
        }


        [HttpDelete("deletecategorybyid")]



        public async Task<int> DeleteCategoryByIdAsync(int id)
        {
            try
            {
                var response = await categoryService.DeleteCategoryAsync(id);
                return response;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}

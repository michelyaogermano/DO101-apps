using Microsoft.AspNetCore.Mvc;

namespace OpenShiftApi.Controllers
{
    [ApiController]
    [Route("/")]
    public class HelloController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Hello from OpenShift!");
        }
    }
}

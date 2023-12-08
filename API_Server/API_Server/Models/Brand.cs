using System.ComponentModel;

namespace API_Server.Models
{
    public class Brand
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Image { get; set; }

        [DefaultValue(true)]
        public bool Status { get; set; }

        public Brand()
        {
            Status = true;
        }
    }
}

using System.ComponentModel;

namespace API_Server.Models
{
    public class PhoneModelImage
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Path { get; set; }

        [DefaultValue(true)]
        public bool Status { get; set; }

        public int PhoneModelId { get; set; }

        public PhoneModel PhoneModel { get; set; }

        public PhoneModelImage()
        {
            Status = true;
        }
    }
}

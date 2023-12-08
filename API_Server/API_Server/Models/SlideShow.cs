using System.ComponentModel;

namespace API_Server.Models
{
    public class SlideShow
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Path { get; set; }

        [DefaultValue(0)]
        public int Numerical { get; set; }

        [DefaultValue(true)]
        public bool Status { get; set; }

        public int PhoneModelId { get; set; }

        public PhoneModel PhoneModel { get; set; }

        public SlideShow()
        {
            Status = true;
            Numerical = 0;
        }
    }
}

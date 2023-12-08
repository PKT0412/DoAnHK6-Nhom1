using System.ComponentModel;

namespace API_Server.Models
{
    public class Invoice
    {
        public int Id { get; set; }

        public string Code { get; set; }

        public DateTime IssuedDate { get; set; }

        public string ShippingAddress { get; set; }

        public string ShippingPhone { get; set;}

        [DefaultValue(0)]
        public int Total { get; set;}

        [DefaultValue(true)]
        public bool Status { get; set; }

        public int UserId { get; set; }

        public int PaymentMethodId { get; set; }

        public PaymentMethod PaymentMethod { get; set; }

        public int DiscountCodeId { get; set; }

        public DiscountCode DiscountCode { get; set; }

        public Invoice()
        {
            Status = true;
            Total = 0;
        }
    }
}

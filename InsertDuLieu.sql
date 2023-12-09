USE WebBanDienThoai
GO


DELETE FROM Brands;
DBCC CHECKIDENT ('WebBanDienThoai.dbo.Brands', RESEED, 0);
GO
DELETE FROM Carts;
DBCC CHECKIDENT ('WebBanDienThoai.dbo.Carts', RESEED, 0);
GO
DELETE FROM Comments;
DBCC CHECKIDENT ('WebBanDienThoai.dbo.Comments', RESEED, 0);
GO
DELETE FROM DiscountCodes;
DBCC CHECKIDENT ('WebBanDienThoai.dbo.DiscountCodes', RESEED, 0);
GO
DELETE FROM InvoiceDetails;
DBCC CHECKIDENT ('WebBanDienThoai.dbo.InvoiceDetails', RESEED, 0);
GO
DELETE FROM Invoices;
DBCC CHECKIDENT ('WebBanDienThoai.dbo.Invoices', RESEED, 0);
GO
DELETE FROM PaymentMethods;
DBCC CHECKIDENT ('WebBanDienThoai.dbo.PaymentMethods', RESEED, 0);
GO
DELETE FROM PhoneModelImages;
DBCC CHECKIDENT ('WebBanDienThoai.dbo.PhoneModelImages', RESEED, 0);
GO
DELETE FROM PhoneModels;
DBCC CHECKIDENT ('WebBanDienThoai.dbo.PhoneModels', RESEED, 0);
GO
DELETE FROM Phones;
DBCC CHECKIDENT ('WebBanDienThoai.dbo.Phones', RESEED, 0);
GO
DELETE FROM Reviews;
DBCC CHECKIDENT ('WebBanDienThoai.dbo.Reviews', RESEED, 0);
GO
DELETE FROM SlideShows;
DBCC CHECKIDENT ('WebBanDienThoai.dbo.SlideShows', RESEED, 0);
GO
DELETE FROM WishLists;
DBCC CHECKIDENT ('WebBanDienThoai.dbo.WishLists', RESEED, 0);
GO


INSERT INTO Brands(Name, Image, Status) VALUES (N'IPhone', N'IPhone.png', 1);
INSERT INTO Brands(Name, Image, Status) VALUES (N'SamSung', N'SamSung.jpg', 1);
INSERT INTO Brands(Name, Image, Status) VALUES (N'Oppo', N'Oppo.png', 1);
INSERT INTO Brands(Name, Image, Status) VALUES (N'Xiaomi', N'Xiaomi.png', 1);
INSERT INTO Brands(Name, Image, Status) VALUES (N'Vivo', N'Vivo.jpg', 1);
INSERT INTO Brands(Name, Image, Status) VALUES (N'Realme', N'Realme.png', 1);


INSERT INTO PhoneModels(Name, Screen, OperatingSystem, RearCamera, FrontCamera, Chip, RAM, SIM, BatteryAndCharger, PhoneModelType, OldPrice, PromotionalPrice, Image, StarAverage, Status, BrandId) 
VALUES (N'Xiaomi Redmi 12', N'IPS LCD, 6.79", Full HD+', N'Android 13', N'Chính 50 MP & Phụ 8 MP, 2 MP', N'8 MP', N'MediaTek Helio G88', N'4 GB', 
N'2 Nano SIM (SIM 2 chung khe thẻ nhớ), Hỗ trợ 4G', N'5000 mAh, 18 W', N'Android', 4390000, 4290000, N'xiaomi-redmi-12-bac-thumb.jpg', 0, 1, 4);
INSERT INTO PhoneModels(Name, Screen, OperatingSystem, RearCamera, FrontCamera, Chip, RAM, SIM, BatteryAndCharger, PhoneModelType, OldPrice, PromotionalPrice, Image, StarAverage, Status, BrandId) 
VALUES (N'Xiaomi 13T 5G', N'AMOLED, 6.67", 1.5K', N'Android 13', N'Chính 50 MP & Phụ 50 MP, 12 MP', N'20 MP', N'MediaTek Dimensity 8200-Ultra', N'8 GB', 
N'2 Nano SIM, Hỗ trợ 5G', N'5000 mAh, 67 W', N'Android', 12990000, 11990000, N'xiaomi-13-t-xanh-duong-thumb.jpg', 0, 1, 4);
INSERT INTO PhoneModels(Name, Screen, OperatingSystem, RearCamera, FrontCamera, Chip, RAM, SIM, BatteryAndCharger, PhoneModelType, OldPrice, PromotionalPrice, Image, StarAverage, Status, BrandId) 
VALUES (N'Samsung Galaxy S21 FE 5G', N'Dynamic AMOLED 2X, 6.4", Full HD+', N'Android 12', N'Chính 12 MP & Phụ 12 MP, 8 MP', N'32 MP', N'Exynos 2100', N'6 GB', 
N'2 Nano SIM, Hỗ trợ 5G', N'4500 mAh, 25 W', N'Android', 12990000, 9490000, N'Samsung-Galaxy-S21-FE-vang-600x600.jpg', 0, 1, 2);
INSERT INTO PhoneModels(Name, Screen, OperatingSystem, RearCamera, FrontCamera, Chip, RAM, SIM, BatteryAndCharger, PhoneModelType, OldPrice, PromotionalPrice, Image, StarAverage, Status, BrandId) 
VALUES (N'Samsung Galaxy S22 Ultra 5G', N'Dynamic AMOLED 2X, 6.8", Quad HD+ (2K+)', N'Android 12', N'Chính 108 MP & Phụ 12 MP, 10 MP, 10 MP', N'40 MP', N'Snapdragon 8 Gen 1', N'8 GB', 
N'2 Nano SIM hoặc 1 Nano SIM + 1 eSIM, Hỗ trợ 5G', N'5000 mAh, 45 W', N'Android', 30990000, 16990000, N'Galaxy-S22-Ultra-Burgundy.jpg', 0, 1, 2);
INSERT INTO PhoneModels(Name, Screen, OperatingSystem, RearCamera, FrontCamera, Chip, RAM, SIM, BatteryAndCharger, PhoneModelType, OldPrice, PromotionalPrice, Image, StarAverage, Status, BrandId) 
VALUES (N'vivo V25 5G', N'AMOLED, 6.44", Full HD+', N'Android 12', N'Chính 64 MP & Phụ 8 MP, 2 MP', N'50 MP', N'MediaTek Dimensity 900 5G', N'8 GB', 
N'2 Nano SIM (SIM 2 chung khe thẻ nhớ), Hỗ trợ 5G', N'4500 mAh, 44 W', N'Android', 10490000, 7490000, N'vivo-v25-5g-vang-thumb.jpg', 0, 1, 5);


INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Xiaomi Redmi 12', N'xiaomi-redmi-12-4gb-slider01.jpg', 1, 1);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Xiaomi Redmi 12', N'xiaomi-redmi-12-4gb-slider02.jpg', 1, 1);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Xiaomi Redmi 12', N'xiaomi-redmi-12-4gb-slider03.jpg', 1, 1);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Xiaomi Redmi 12', N'xiaomi-redmi-12-4gb-slider04.jpg', 1, 1);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Xiaomi Redmi 12', N'xiaomi-redmi-12-4gb-slider05.jpg', 1, 1);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Xiaomi Redmi 12', N'xiaomi-redmi-12-4gb-slider06.jpg', 1, 1);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Xiaomi 13T 5G', N'xiaomi-13t-8gb-slider01.jpg', 1, 2);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Xiaomi 13T 5G', N'xiaomi-13t-8gb-slider02.jpg', 1, 2);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Xiaomi 13T 5G', N'xiaomi-13t-8gb-slider03.jpg', 1, 2);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Xiaomi 13T 5G', N'xiaomi-13t-8gb-slider04.jpg', 1, 2);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Xiaomi 13T 5G', N'xiaomi-13t-8gb-slider05.jpg', 1, 2);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Xiaomi 13T 5G', N'xiaomi-13t-8gb-slider06.jpg', 1, 2);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Xiaomi 13T 5G', N'xiaomi-13t-8gb-slider07.jpg', 1, 2);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Xiaomi 13T 5G', N'xiaomi-13t-8gb-slider08.jpg', 1, 2);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Samsung Galaxy S21 FE 5G', N'samsung-galaxy-s21-FE-5G-01.jpg', 1, 3);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Samsung Galaxy S21 FE 5G', N'samsung-galaxy-s21-FE-5G-02.jpg', 1, 3);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Samsung Galaxy S21 FE 5G', N'samsung-galaxy-s21-FE-5G-03.jpg', 1, 3);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Samsung Galaxy S21 FE 5G', N'samsung-galaxy-s21-FE-5G-04.jpg', 1, 3);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Samsung Galaxy S21 FE 5G', N'samsung-galaxy-s21-FE-5G-05.jpg', 1, 3);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Samsung Galaxy S21 FE 5G', N'samsung-galaxy-s21-FE-5G-06.jpg', 1, 3);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Samsung Galaxy S21 FE 5G', N'samsung-galaxy-s21-FE-5G-07.jpg', 1, 3);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Samsung Galaxy S21 FE 5G', N'samsung-galaxy-s21-FE-5G-08.jpg', 1, 3);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Samsung Galaxy S22 Ultra 5G', N'samsung-galaxy-s22-ultra-01.jpg', 1, 4);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Samsung Galaxy S22 Ultra 5G', N'samsung-galaxy-s22-ultra-02.jpg', 1, 4);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Samsung Galaxy S22 Ultra 5G', N'samsung-galaxy-s22-ultra-03.jpg', 1, 4);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Samsung Galaxy S22 Ultra 5G', N'samsung-galaxy-s22-ultra-04.jpg', 1, 4);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Samsung Galaxy S22 Ultra 5G', N'samsung-galaxy-s22-ultra-05.jpg', 1, 4);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Samsung Galaxy S22 Ultra 5G', N'samsung-galaxy-s22-ultra-06.jpg', 1, 4);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'Samsung Galaxy S22 Ultra 5G', N'samsung-galaxy-s22-ultra-07.jpg', 1, 4);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'vivo V25 5G', N'vi-vn-vivo-v25-slider-01.jpg', 1, 5);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'vivo V25 5G', N'vi-vn-vivo-v25-slider-02.jpg', 1, 5);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'vivo V25 5G', N'vi-vn-vivo-v25-slider-03.jpg', 1, 5);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'vivo V25 5G', N'vi-vn-vivo-v25-slider-04.jpg', 1, 5);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'vivo V25 5G', N'vi-vn-vivo-v25-slider-05.jpg', 1, 5);
INSERT INTO PhoneModelImages(Name, Path, Status, PhoneModelId) VALUES (N'vivo V25 5G', N'vi-vn-vivo-v25-slider-06.jpg', 1, 5);


INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi Redmi 12 64GB', N'Bạc', N'64GB', N'xiaomi-redmi-12-bac.jpg', 4290000, 10, 1, 1);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi Redmi 12 64GB', N'Đen', N'64GB', N'xiaomi-redmi-12-den.jpg', 4290000, 10, 1, 1);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi Redmi 12 64GB', N'Xanh', N'64GB', N'xiaomi-redmi-12-xanh.jpg', 4290000, 10, 1, 1);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi 13T 5G 64GB', N'Xanh dương', N'64GB', N'xiaomi-13t-xanh-duong.jpg', 9990000, 10, 1, 2);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi 13T 5G 64GB', N'Xanh lá', N'64GB', N'xiaomi-13t-xanh-la.jpg', 9990000, 10, 1, 2);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi 13T 5G 64GB', N'Đen', N'64GB', N'xiaomi-13t-den.jpg', 9990000, 10, 1, 2);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi 13T 5G 128GB', N'Xanh dương', N'128GB', N'xiaomi-13t-xanh-duong.jpg', 11990000, 10, 1, 2);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi 13T 5G 128GB', N'Xanh lá', N'128GB', N'xiaomi-13t-xanh-la.jpg', 11990000, 10, 1, 2);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi 13T 5G 128GB', N'Đen', N'128GB', N'xiaomi-13t-den.jpg', 11990000, 10, 1, 2);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S21 FE 5G 128GB', N'Xanh lá nhạt', N'128GB', N'samsung-galaxy-s21-fe-xanh.jpg', 9490000, 10, 1, 3);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S21 FE 5G 128GB', N'Xám đậm', N'128GB', N'samsung-galaxy-s21-fe-xam.jpg', 9490000, 10, 1, 3);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S21 FE 5G 256GB', N'Xanh lá nhạt', N'256GB', N'samsung-galaxy-s21-fe-xanh.jpg', 12990000, 10, 1, 3);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S21 FE 5G 256GB', N'Xám đậm', N'256GB', N'samsung-galaxy-s21-fe-xam.jpg', 12990000, 10, 1, 3);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S22 Ultra 5G 128GB', N'Đỏ đô', N'128GB', N'samsung-galaxy-s22-ultra-do.jpg', 16990000, 10, 1, 4);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S22 Ultra 5G 128GB', N'Đen', N'128GB', N'samsung-galaxy-s22-ultra-den.jpg', 16990000, 10, 1, 4);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'vivo V25 5G', N'Vàng', N'128GB', N'vivo-v25-vang.jpg', 7490000, 10, 1, 5);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'vivo V25 5G', N'Đen', N'128GB', N'vivo-v25-den.jpg', 7490000, 10, 1, 5);


INSERT INTO PaymentMethods(Name, Image, Status) VALUES (N'Thanh toán tiền mặt khi nhận hàng', N'Cash.png', 1);
INSERT INTO PaymentMethods(Name, Image, Status) VALUES (N'Chuyển khoảng ngân hàng', N'BankTransfer.png', 1);
INSERT INTO PaymentMethods(Name, Image, Status) VALUES (N'Qua thẻ ATM (có Internet Banking)', N'ATM.png', 1);
INSERT INTO PaymentMethods(Name, Image, Status) VALUES (N'Qua VNPAY-QR', N'VNPAY.png', 1);
INSERT INTO PaymentMethods(Name, Image, Status) VALUES (N'Ví MoMo', N'MoMo.png', 1);


INSERT INTO SlideShows(Path, Numerical, Status, PhoneModelId) VALUES (N'slider01.png', 1, 1, 1);
INSERT INTO SlideShows(Path, Numerical, Status, PhoneModelId) VALUES (N'slider02.png', 1, 1, 1);
INSERT INTO SlideShows(Path, Numerical, Status, PhoneModelId) VALUES (N'slider03.png', 1, 1, 1);
INSERT INTO SlideShows(Path, Numerical, Status, PhoneModelId) VALUES (N'slider04.png', 1, 1, 1);
INSERT INTO SlideShows(Path, Numerical, Status, PhoneModelId) VALUES (N'slider05.png', 1, 1, 1);
INSERT INTO SlideShows(Path, Numerical, Status, PhoneModelId) VALUES (N'slider06.png', 1, 1, 1);
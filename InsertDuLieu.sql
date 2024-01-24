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
INSERT INTO PhoneModels(Name, Screen, OperatingSystem, RearCamera, FrontCamera, Chip, RAM, SIM, BatteryAndCharger, PhoneModelType, OldPrice, PromotionalPrice, Image, StarAverage, Status, BrandId) 
VALUES (N'Xiaomi 13 Lite 5G', N'AMOLED, 6.55", Full HD+', N'Android 12', N'Chính 50 MP & Phụ 8 MP, 2 MP', N'Chính 32 MP & Phụ 8 MP', N'Snapdragon 7 Gen 1 8 nhân', N'8 GB', 
N'2 Nano SIM, Hỗ trợ 5G', N'4500 mAh, 67 W', N'Android', 11490000, 8990000, N'xiaomi-13-lite-xanh-thumb.jpg', 0, 1, 4);
INSERT INTO PhoneModels(Name, Screen, OperatingSystem, RearCamera, FrontCamera, Chip, RAM, SIM, BatteryAndCharger, PhoneModelType, OldPrice, PromotionalPrice, Image, StarAverage, Status, BrandId) 
VALUES (N'Xiaomi Redmi Note 12 Pro', N'AMOLED, 6.67", Full HD+', N'Android 11', N'Chính 108 MP & Phụ 8 MP, 2 MP, 2 MP', N'16 MP', N'Snapdragon 732G', N'8 GB', 
N'2 Nano SIM (SIM 2 chung khe thẻ nhớ), Hỗ trợ 4G', N'5000 mAh, 67 W', N'Android', 7190000, 6290000, N'xiaomi-redmi-12-pro-4g-xanh-thumb.jpg', 0, 1, 4);
INSERT INTO PhoneModels(Name, Screen, OperatingSystem, RearCamera, FrontCamera, Chip, RAM, SIM, BatteryAndCharger, PhoneModelType, OldPrice, PromotionalPrice, Image, StarAverage, Status, BrandId) 
VALUES (N'Xiaomi Redmi Note 12S', N'AMOLED, 6.43", Full HD+', N'Android 13', N'Chính 108 MP & Phụ 8 MP, 2 MP', N'16 MP', N'MediaTek Helio G96', N'8 GB', 
N'2 Nano SIM, Hỗ trợ 4G', N'5000 mAh, 33 W', N'Android', 6690000, 5490000, N'xiaomi-redmi-note12s-den-thumb.jpg', 0, 1, 4);
INSERT INTO PhoneModels(Name, Screen, OperatingSystem, RearCamera, FrontCamera, Chip, RAM, SIM, BatteryAndCharger, PhoneModelType, OldPrice, PromotionalPrice, Image, StarAverage, Status, BrandId) 
VALUES (N'vivo V29e 5G', N'AMOLED, 6.67", Full HD+', N'Android 13', N'Chính 64 MP & Phụ 8 MP', N'50 MP', N'Snapdragon 695 5G', N'12 GB', 
N'2 Nano SIM, Hỗ trợ 5G', N'4800 mAh, 44 W', N'Android', 9990000, 9690000, N'vivo-v29e-tim-thumb.jpg', 0, 1, 5);
INSERT INTO PhoneModels(Name, Screen, OperatingSystem, RearCamera, FrontCamera, Chip, RAM, SIM, BatteryAndCharger, PhoneModelType, OldPrice, PromotionalPrice, Image, StarAverage, Status, BrandId) 
VALUES (N'vivo Y17s', N'IPS LCD, 6.56", HD+', N'Android 13', N'Chính 50 MP & Phụ 2 MP', N'8 MP', N'MediaTek Helio G85', N'4 GB', 
N'2 Nano SIM, Hỗ trợ 4G', N'5000 mAh, 15 W', N'Android', 3690000, 3390000, N'vivo-y17-xanh-thumb.jpg', 0, 1, 5);
INSERT INTO PhoneModels(Name, Screen, OperatingSystem, RearCamera, FrontCamera, Chip, RAM, SIM, BatteryAndCharger, PhoneModelType, OldPrice, PromotionalPrice, Image, StarAverage, Status, BrandId) 
VALUES (N'Samsung Galaxy S23 5G', N'Dynamic AMOLED 2X, 6.1", Full HD+', N'Android 13', N'Chính 50 MP & Phụ 12 MP, 10 MP', N'12 MP', N'Snapdragon 8 Gen 2 for Galaxy', N'8 GB', 
N'2 Nano SIM hoặc 1 Nano SIM + 1 eSIM, Hỗ trợ 5G', N'3900 mAh, 25 W', N'Android', 22990000, 13990000, N'samsung-galaxy-s23.jpg', 0, 1, 2);
INSERT INTO PhoneModels(Name, Screen, OperatingSystem, RearCamera, FrontCamera, Chip, RAM, SIM, BatteryAndCharger, PhoneModelType, OldPrice, PromotionalPrice, Image, StarAverage, Status, BrandId) 
VALUES (N'Samsung Galaxy S23 Ultra 5G', N'Dynamic AMOLED 2X, 6.8", Quad HD+ (2K+)', N'Android 13', N'Chính 200 MP & Phụ 12 MP, 10 MP, 10 MP', N'12 MP', N'Snapdragon 8 Gen 2 for Galaxy', N'12 GB', 
N'2 Nano SIM hoặc 1 Nano SIM + 1 eSIM, Hỗ trợ 5G', N'5000 mAh, 45 W', N'Android', 31990000, 23990000, N'samsung-galaxy-s23-ultra-thumb-xanh.jpg', 0, 1, 2);
INSERT INTO PhoneModels(Name, Screen, OperatingSystem, RearCamera, FrontCamera, Chip, RAM, SIM, BatteryAndCharger, PhoneModelType, OldPrice, PromotionalPrice, Image, StarAverage, Status, BrandId) 
VALUES (N'Samsung Galaxy S23+ 5G', N'Dynamic AMOLED 2X, 6.6", Full HD+', N'Android 13', N'Chính 50 MP & Phụ 12 MP, 10 MP', N'12 MP', N'Snapdragon 8 Gen 2 for Galaxy', N'8 GB', 
N'2 Nano SIM hoặc 1 Nano SIM + 1 eSIM, Hỗ trợ 5G', N'4700 mAh, 45 W', N'Android', 26990000, 17990000, N'samsung-galaxy-s23-plus.jpg', 0, 1, 2);
INSERT INTO PhoneModels(Name, Screen, OperatingSystem, RearCamera, FrontCamera, Chip, RAM, SIM, BatteryAndCharger, PhoneModelType, OldPrice, PromotionalPrice, Image, StarAverage, Status, BrandId) 
VALUES (N'Samsung Galaxy Z Flip5 5G', N'Chính: Dynamic AMOLED 2X, Phụ: Super AMOLED, Chính 6.7" & Phụ 3.4", Full HD+', N'Android 13', N'2 camera 12 MP', N'10 MP', N'Snapdragon 8 Gen 2 for Galaxy', N'8 GB', 
N'1 Nano SIM & 1 eSIM, Hỗ trợ 5G', N'3700 mAh, 25 W', N'Android', 25990000, 19790000, N'samsung-galaxy-z-flip5-xanh-mint-thumb.jpg', 0, 1, 2);
INSERT INTO PhoneModels(Name, Screen, OperatingSystem, RearCamera, FrontCamera, Chip, RAM, SIM, BatteryAndCharger, PhoneModelType, OldPrice, PromotionalPrice, Image, StarAverage, Status, BrandId) 
VALUES (N'Samsung Galaxy Z Fold5 5G', N'Dynamic AMOLED 2X, Chính 7.6" & Phụ 6.2", Quad HD+ (2K+)', N'Android 13', N'Chính 50 MP & Phụ 12 MP, 10 MP', N'10 MP & 4 MP', N'Snapdragon 8 Gen 2 for Galaxy', N'12 GB', 
N'2 Nano SIM hoặc 1 Nano SIM + 1 eSIM, Hỗ trợ 5G', N'4400 mAh, 25 W', N'Android', 40990000, 37990000, N'samsung-galaxy-z-fold5- kem.jpg', 0, 1, 2);


INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-redmi-12-4gb-slider01.jpg', 1, 1);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-redmi-12-4gb-slider02.jpg', 1, 1);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-redmi-12-4gb-slider03.jpg', 1, 1);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-redmi-12-4gb-slider04.jpg', 1, 1);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-redmi-12-4gb-slider05.jpg', 1, 1);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-redmi-12-4gb-slider06.jpg', 1, 1);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-13t-8gb-slider01.jpg', 1, 2);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-13t-8gb-slider02.jpg', 1, 2);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-13t-8gb-slider03.jpg', 1, 2);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-13t-8gb-slider04.jpg', 1, 2);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-13t-8gb-slider05.jpg', 1, 2);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-13t-8gb-slider06.jpg', 1, 2);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-13t-8gb-slider07.jpg', 1, 2);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-13t-8gb-slider08.jpg', 1, 2);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'samsung-galaxy-s21-FE-5G-01.jpg', 1, 3);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'samsung-galaxy-s21-FE-5G-02.jpg', 1, 3);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'samsung-galaxy-s21-FE-5G-03.jpg', 1, 3);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'samsung-galaxy-s21-FE-5G-04.jpg', 1, 3);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'samsung-galaxy-s21-FE-5G-05.jpg', 1, 3);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'samsung-galaxy-s21-FE-5G-06.jpg', 1, 3);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'samsung-galaxy-s21-FE-5G-07.jpg', 1, 3);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'samsung-galaxy-s21-FE-5G-08.jpg', 1, 3);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'samsung-galaxy-s22-ultra-01.jpg', 1, 4);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'samsung-galaxy-s22-ultra-02.jpg', 1, 4);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'samsung-galaxy-s22-ultra-03.jpg', 1, 4);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'samsung-galaxy-s22-ultra-04.jpg', 1, 4);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'samsung-galaxy-s22-ultra-05.jpg', 1, 4);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'samsung-galaxy-s22-ultra-06.jpg', 1, 4);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'samsung-galaxy-s22-ultra-07.jpg', 1, 4);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vi-vn-vivo-v25-slider-01.jpg', 1, 5);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vi-vn-vivo-v25-slider-02.jpg', 1, 5);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vi-vn-vivo-v25-slider-03.jpg', 1, 5);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vi-vn-vivo-v25-slider-04.jpg', 1, 5);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vi-vn-vivo-v25-slider-05.jpg', 1, 5);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vi-vn-vivo-v25-slider-06.jpg', 1, 5);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-13-lite-5g-01.jpg', 1, 6);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-13-lite-5g-02.jpg', 1, 6);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-13-lite-5g-03.jpg', 1, 6);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-13-lite-5g-04.jpg', 1, 6);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-13-lite-5g-05.jpg', 1, 6);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-13-lite-5g-06.jpg', 1, 6);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-13-lite-5g-07.jpg', 1, 6);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-redmi-note-12-pro-4g-01.jpg', 1, 7);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-redmi-note-12-pro-4g-02.jpg', 1, 7);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-redmi-note-12-pro-4g-03.jpg', 1, 7);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-redmi-note-12-pro-4g-04.jpg', 1, 7);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-redmi-note-12-pro-4g-05.jpg', 1, 7);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-redmi-note-12-pro-4g-06.jpg', 1, 7);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-redmi-note-12-pro-4g-07.jpg', 1, 7);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-redmi-note-12s-01.jpg', 1, 8);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-redmi-note-12s-02.jpg', 1, 8);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-redmi-note-12s-03.jpg', 1, 8);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-redmi-note-12s-04.jpg', 1, 8);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-redmi-note-12s-05.jpg', 1, 8);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-redmi-note-12s-06.jpg', 1, 8);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'xiaomi-redmi-note-12s-07.jpg', 1, 8);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vivo-v29e-slider-8gb-01.jpg', 1, 9);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vivo-v29e-slider-8gb-02.jpg', 1, 9);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vivo-v29e-slider-8gb-03.jpg', 1, 9);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vivo-v29e-slider-8gb-04.jpg', 1, 9);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vivo-v29e-slider-8gb-05.jpg', 1, 9);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vivo-v29e-slider-8gb-06.jpg', 1, 9);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vivo-v29e-slider-8gb-07.jpg', 1, 9);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vivo-y17s-6gb-slider-01.jpg', 1, 10);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vivo-y17s-6gb-slider-02.jpg', 1, 10);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vivo-y17s-6gb-slider-03.jpg', 1, 10);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vivo-y17s-6gb-slider-04.jpg', 1, 10);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vivo-y17s-6gb-slider-05.jpg', 1, 10);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vivo-y17s-6gb-slider-06.jpg', 1, 10);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'man-hinh-s23-series-01.jpg', 1, 11);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'man-hinh-s23-series-02.jpg', 1, 11);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'man-hinh-s23-series-03.jpg', 1, 11);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'man-hinh-s23-series-04.jpg', 1, 11);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'man-hinh-s23-series-05.jpg', 1, 11);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'man-hinh-s23-series-06.jpg', 1, 11);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'man-hinh-s23-series-07.jpg', 1, 11);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'tong-quan-s23-ultra-01.jpg', 1, 12);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'tong-quan-s23-ultra-02.jpg', 1, 12);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'tong-quan-s23-ultra-03.jpg', 1, 12);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'tong-quan-s23-ultra-04.jpg', 1, 12);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'tong-quan-s23-ultra-05.jpg', 1, 12);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'tong-quan-s23-ultra-06.jpg', 1, 12);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'tong-quan-s23-ultra-07.jpg', 1, 12);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'tong-quan-s23-ultra-08.jpg', 1, 12);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'tong-quan-s23-plus-01.jpg', 1, 13);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'tong-quan-s23-plus-02.jpg', 1, 13);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'tong-quan-s23-plus-03.jpg', 1, 13);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'tong-quan-s23-plus-04.jpg', 1, 13);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'tong-quan-s23-plus-05.jpg', 1, 13);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'tong-quan-s23-plus-06.jpg', 1, 13);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'tong-quan-s23-plus-07.jpg', 1, 13);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vi-vn-samsung-galaxy-z-flip5-256gb-01.jpg', 1, 14);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vi-vn-samsung-galaxy-z-flip5-256gb-02.jpg', 1, 14);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vi-vn-samsung-galaxy-z-flip5-256gb-03.jpg', 1, 14);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vi-vn-samsung-galaxy-z-flip5-256gb-04.jpg', 1, 14);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vi-vn-samsung-galaxy-z-flip5-256gb-05.jpg', 1, 14);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vi-vn-samsung-galaxy-z-flip5-256gb-06.jpg', 1, 14);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vi-vn-samsung-galaxy-z-flip5-256gb-07.jpg', 1, 14);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vi-vn-samsung-galaxy-z-flip5-256gb-08.jpg', 1, 14);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vi-vn-samsung-galaxy-z-fold5-256-01.jpg', 1, 15);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vi-vn-samsung-galaxy-z-fold5-256-02.jpg', 1, 15);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vi-vn-samsung-galaxy-z-fold5-256-03.jpg', 1, 15);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vi-vn-samsung-galaxy-z-fold5-256-04.jpg', 1, 15);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vi-vn-samsung-galaxy-z-fold5-256-05.jpg', 1, 15);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vi-vn-samsung-galaxy-z-fold5-256-06.jpg', 1, 15);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vi-vn-samsung-galaxy-z-fold5-256-07.jpg', 1, 15);
INSERT INTO PhoneModelImages(Image, Status, PhoneModelId) VALUES (N'vi-vn-samsung-galaxy-z-fold5-256-08.jpg', 1, 15);


INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi Redmi 12 64GB', N'Bạc', N'64GB', N'xiaomi-redmi-12-bac.jpg', 4290000, 10, 1, 1);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi Redmi 12 64GB', N'Đen', N'64GB', N'xiaomi-redmi-12-den.jpg', 4290000, 10, 1, 1);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi Redmi 12 64GB', N'Xanh', N'64GB', N'xiaomi-redmi-12-xanh.jpg', 4290000, 10, 1, 1);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi 13T 5G 128GB', N'Xanh dương', N'128GB', N'xiaomi-13t-xanh-duong.jpg', 11990000, 10, 1, 2);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi 13T 5G 128GB', N'Xanh lá', N'128GB', N'xiaomi-13t-xanh-la.jpg', 11990000, 10, 1, 2);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi 13T 5G 128GB', N'Đen', N'128GB', N'xiaomi-13t-den.jpg', 11990000, 10, 1, 2);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi 13T 5G 256GB', N'Xanh dương', N'256GB', N'xiaomi-13t-xanh-duong.jpg', 13990000, 10, 1, 2);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi 13T 5G 256GB', N'Xanh lá', N'256GB', N'xiaomi-13t-xanh-la.jpg', 13990000, 10, 1, 2);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi 13T 5G 256GB', N'Đen', N'256GB', N'xiaomi-13t-den.jpg', 13990000, 10, 1, 2);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S21 FE 5G 128GB', N'Xanh lá nhạt', N'128GB', N'samsung-galaxy-s21-fe-xanh.jpg', 9490000, 10, 1, 3);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S21 FE 5G 128GB', N'Xám đậm', N'128GB', N'samsung-galaxy-s21-fe-xam.jpg', 9490000, 10, 1, 3);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S21 FE 5G 256GB', N'Xanh lá nhạt', N'256GB', N'samsung-galaxy-s21-fe-xanh.jpg', 12990000, 10, 1, 3);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S21 FE 5G 256GB', N'Xám đậm', N'256GB', N'samsung-galaxy-s21-fe-xam.jpg', 12990000, 10, 1, 3);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S22 Ultra 5G', N'Đỏ đô', N'128GB', N'samsung-galaxy-s22-ultra-do.jpg', 16990000, 10, 1, 4);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S22 Ultra 5G', N'Đen', N'128GB', N'samsung-galaxy-s22-ultra-den.jpg', 16990000, 10, 1, 4);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'vivo V25 5G', N'Vàng', N'128GB', N'vivo-v25-vang.jpg', 7490000, 10, 1, 5);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'vivo V25 5G', N'Đen', N'128GB', N'vivo-v25-den.jpg', 7490000, 10, 1, 5);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi 13 Lite 5G', N'Đen', N'256GB', N'xiaomi-13-lite-den.jpg', 8990000, 10, 1, 6);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi 13 Lite 5G', N'Xanh dương', N'256GB', N'xiaomi-13-lite-xanh.jpg', 8990000, 10, 1, 6);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi Redmi Note 12 Pro 128GB', N'Xanh dương nhạt', N'128GB', N'xiaomi-redmi-12-pro-4g-xanh-duong-nhat.jpg', 6290000, 10, 1, 7);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi Redmi Note 12 Pro 128GB', N'Xám', N'128GB', N'xiami-redmi-12-pro-xam.jpg', 6290000, 10, 1, 7);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi Redmi Note 12 Pro 128GB', N'Xanh dương', N'128GB', N'xiaomi-redmi-12-pro-4g-xanh-duong.jpg', 6290000, 10, 1, 7);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi Redmi Note 12 Pro 256GB', N'Xanh dương nhạt', N'256GB', N'xiaomi-redmi-12-pro-4g-xanh-duong-nhat.jpg', 6790000, 10, 1, 7);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi Redmi Note 12 Pro 256GB', N'Xám', N'256GB', N'xiami-redmi-12-pro-xam.jpg', 6790000, 10, 1, 7);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi Redmi Note 12 Pro 256GB', N'Xanh dương', N'256GB', N'xiaomi-redmi-12-pro-4g-xanh-duong.jpg', 6790000, 10, 1, 7);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi Redmi Note 12S', N'Đen', N'256GB', N'xiaomi-redmi-note-12s-den.jpg', 5490000, 10, 1, 8);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi Redmi Note 12S', N'Xanh dương', N'256GB', N'xiaomi-redmi-note-12s-xanh-duong.jpg', 5490000, 10, 1, 8);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Xiaomi Redmi Note 12S', N'Xanh lá', N'256GB', N'xiaomi-redmi-note-12s-xanh-la.jpg', 5490000, 10, 1, 8);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'vivo V29e 5G', N'Đen', N'256GB', N'vivo-v29e-den.jpg', 9690000, 10, 1, 9);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'vivo V29e 5G', N'Xanh dương nhạt', N'256GB', N'vivo-v29e-xanh.jpg', 9690000, 10, 1, 9);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'vivo Y17s 64GB', N'Tím', N'64GB', N'vivo-y17s-tim.jpg', 3390000, 10, 1, 10);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'vivo Y17s 64GB', N'Xanh đen', N'64GB', N'vivo-y17s-xanh-den.jpg', 3390000, 10, 1, 10);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'vivo Y17s 128GB', N'Tím', N'128GB', N'vivo-y17s-tim.jpg', 3990000, 10, 1, 10);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'vivo Y17s 128GB', N'Xanh đen', N'128GB', N'vivo-y17s-xanh-den.jpg', 3990000, 10, 1, 10);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S23 5G', N'Kem', N'128GB', N'samsung-galaxy-s23-kem.jpg', 13990000, 10, 1, 11);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S23 5G', N'Xanh rêu', N'128GB', N'samsung-galaxy-s23-xanh.jpg', 13990000, 10, 1, 11);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S23 5G', N'Tím nhạt', N'128GB', N'samsung-galaxy-s23-tim.jpg', 13990000, 10, 1, 11);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S23 5G', N'Đen', N'128GB', N'samsung-galaxy-s23-den.jpg', 13990000, 10, 1, 11);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S23 Ultra 5G 256GB', N'Xanh rêu', N'256GB', N'samsung-galaxy-s23-ultra-xanh.jpg', 23990000, 10, 1, 12);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S23 Ultra 5G 256GB', N'Tím nhạt', N'256GB', N'samsung-galaxy-s-ultra-tim.jpg', 23990000, 10, 1, 12);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S23 Ultra 5G 256GB', N'Kem', N'256GB', N'samsung-galaxy-s23-ultra-kem.jpg', 23990000, 10, 1, 12);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S23 Ultra 5G 256GB', N'Đen', N'256GB', N'samsung-galaxy-s23-ultra-den.jpg', 23990000, 10, 1, 12);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S23 Ultra 5G 512GB', N'Xanh rêu', N'512GB', N'samsung-galaxy-s23-ultra-xanh.jpg', 26190000, 10, 1, 12);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S23 Ultra 5G 512GB', N'Tím nhạt', N'512GB', N'samsung-galaxy-s-ultra-tim.jpg', 26190000, 10, 1, 12);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S23 Ultra 5G 512GB', N'Kem', N'512GB', N'samsung-galaxy-s23-ultra-kem.jpg', 26190000, 10, 1, 12);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S23 Ultra 5G 512GB', N'Đen', N'512GB', N'samsung-galaxy-s23-ultra-den.jpg', 26190000, 10, 1, 12);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S23+ 5G 256GB', N'Xanh rêu', N'256GB', N'samsung-galaxy-s23-plus-xanh.jpg', 17990000, 10, 1, 13);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S23+ 5G 256GB', N'Kem', N'256GB', N'samsung-galaxy-s23-plus-kem.jpg', 17990000, 10, 1, 13);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S23+ 5G 256GB', N'Tím nhạt', N'256GB', N'samsung-galaxy-s23-plus-tim.jpg', 17990000, 10, 1, 13);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S23+ 5G 256GB', N'Đen', N'256GB', N'samsung-galaxy-s23-plus-den.jpg', 17990000, 10, 1, 13);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S23+ 5G 512GB', N'Xanh rêu', N'512GB', N'samsung-galaxy-s23-plus-xanh.jpg', 22990000, 10, 1, 13);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S23+ 5G 512GB', N'Kem', N'512GB', N'samsung-galaxy-s23-plus-kem.jpg', 22990000, 10, 1, 13);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S23+ 5G 512GB', N'Tím nhạt', N'512GB', N'samsung-galaxy-s23-plus-tim.jpg', 22990000, 10, 1, 13);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy S23+ 5G 512GB', N'Đen', N'512GB', N'samsung-galaxy-s23-plus-den.jpg', 22990000, 10, 1, 13);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy Z Flip5 5G 256GB', N'Xanh mint', N'256GB', N'samsung-galaxy-zflip5-xanh.jpg', 19790000, 10, 1, 14);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy Z Flip5 5G 256GB', N'Tím nhạt', N'256GB', N'samsung-galaxy-zflip-5-tim.jpg', 19790000, 10, 1, 14);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy Z Flip5 5G 256GB', N'Xám', N'256GB', N'samsung-galaxy-zflip-5-xam.jpg', 19790000, 10, 1, 14);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy Z Flip5 5G 256GB', N'Kem', N'256GB', N'samsung-galaxy-zflip-5-kem.jpg', 19790000, 10, 1, 14);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy Z Flip5 5G 512GB', N'Xanh mint', N'512GB', N'samsung-galaxy-zflip5-xanh.jpg', 23790000, 10, 1, 14);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy Z Flip5 5G 512GB', N'Tím nhạt', N'512GB', N'samsung-galaxy-zflip-5-tim.jpg', 23790000, 10, 1, 14);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy Z Flip5 5G 512GB', N'Xám', N'512GB', N'samsung-galaxy-zflip-5-xam.jpg', 23790000, 10, 1, 14);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy Z Flip5 5G 512GB', N'Kem', N'512GB', N'samsung-galaxy-zflip-5-kem.jpg', 23790000, 10, 1, 14);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy Z Fold5 5G 256GB', N'Kem', N'256GB', N'samsung-galaxy-zfold5-kem-256gb.jpg', 37990000, 10, 1, 15);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy Z Fold5 5G 256GB', N'Xanh da trời nhạt', N'256GB', N'samsung-galaxy-zfold5-xanh-256gb.jpg', 37990000, 10, 1, 15);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy Z Fold5 5G 256GB', N'Đen', N'256GB', N'samsung-galaxy-zfold5-den-256gb.jpg', 37990000, 10, 1, 15);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy Z Fold5 5G 512GB', N'Kem', N'512GB', N'samsung-galaxy-zfold5-kem-256gb.jpg', 41490000, 10, 1, 15);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy Z Fold5 5G 512GB', N'Xanh da trời nhạt', N'512GB', N'samsung-galaxy-zfold5-xanh-256gb.jpg', 41490000, 10, 1, 15);
INSERT INTO Phones(Name, Color, Storage, Image, Price, Stock, Status, PhoneModelId)
VALUES (N'Samsung Galaxy Z Fold5 5G 512GB', N'Đen', N'512GB', N'samsung-galaxy-zfold5-den-256gb.jpg', 41490000, 10, 1, 15);


INSERT INTO PaymentMethods(Name, Image, Status) VALUES (N'Thanh toán tiền mặt khi nhận hàng', N'Cash.png', 1);
INSERT INTO PaymentMethods(Name, Image, Status) VALUES (N'Chuyển khoảng ngân hàng', N'BankTransfer.png', 1);
INSERT INTO PaymentMethods(Name, Image, Status) VALUES (N'Qua thẻ ATM (có Internet Banking)', N'ATM.png', 1);
INSERT INTO PaymentMethods(Name, Image, Status) VALUES (N'Qua VNPAY-QR', N'VNPAY.png', 1);
INSERT INTO PaymentMethods(Name, Image, Status) VALUES (N'Ví MoMo', N'MoMo.png', 1);


INSERT INTO SlideShows(Image, Status, PhoneModelId) VALUES (N'slider01.png', 1, 1);
INSERT INTO SlideShows(Image, Status, PhoneModelId) VALUES (N'slider02.png', 1, 1);
INSERT INTO SlideShows(Image, Status, PhoneModelId) VALUES (N'slider03.png', 1, 1);
INSERT INTO SlideShows(Image, Status, PhoneModelId) VALUES (N'slider04.png', 1, 1);
INSERT INTO SlideShows(Image, Status, PhoneModelId) VALUES (N'slider05.png', 1, 1);
INSERT INTO SlideShows(Image, Status, PhoneModelId) VALUES (N'slider06.png', 1, 1);


INSERT INTO DiscountCodes(Name, Code, StartDay, EndDay, Quantity, [Percent], Status) 
VALUES (N'Không có', '', '2024-01-20', '2024-05-20', 999999999, 0, 1);
INSERT INTO DiscountCodes(Name, Code, StartDay, EndDay, Quantity, [Percent], Status) 
VALUES (N'Giảm 25%', 'MTD25', '2024-01-20', '2024-05-20', 10, 25, 1);
INSERT INTO DiscountCodes(Name, Code, StartDay, EndDay, Quantity, [Percent], Status) 
VALUES (N'Giảm 50%', 'MTD50', '2024-01-20', '2024-05-20', 10, 50, 1);
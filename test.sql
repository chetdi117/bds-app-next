
AlALTER PROCEDURE GetMinMaxOrderQty
@ProductName nvarchar(240), @VendorName nvarchar(240)
AS
select ProductName, VendorName, MinOrderQty, MaxOrderQty from [dbo].[Production.Product] p
join [dbo].[Vendors] ProductVendor pv
on pv.ProductID = p.ProductID
join [dbo].[Vendors] v
on v. = [dbo].[Vendors].VendorID
where ProductName = @ProductName and VendorName = @VendorName;
GO;

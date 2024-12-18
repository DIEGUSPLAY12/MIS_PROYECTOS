/*
1. Retorna un recompte de quants distribuidors (shippers) hi ha.
*/
SELECT COUNT(*) AS TotalShippers FROM Shippers;

/*
2. Calcula quants proveïdors (suppliers) hi ha per ciutat.
*/
SELECT City, COUNT(*) AS SuppliersPerCity 
FROM Suppliers 
GROUP BY City;

/*
3. Calcula quants productes són distribuits pel shipper número 3.
*/
SELECT COUNT(*) AS ProductsByShipper3
FROM Orders o
JOIN [Order Details] od ON o.OrderID = od.OrderID
WHERE o.ShipVia = 3;

/*
4. Crea un informe amb el nom del distribuidor, nom del proveidor, nom de la categoria i el recompte de productes que coincideixen.
*/
SELECT s.CompanyName AS ShipperName, 
       sp.CompanyName AS SupplierName, 
       c.CategoryName, 
       COUNT(p.ProductID) AS ProductCount
FROM Products p
JOIN Categories c ON p.CategoryID = c.CategoryID
JOIN Suppliers sp ON p.SupplierID = sp.SupplierID
JOIN [Order Details] od ON p.ProductID = od.ProductID
JOIN Orders o ON od.OrderID = o.OrderID
JOIN Shippers s ON o.ShipVia = s.ShipperID
GROUP BY s.CompanyName, sp.CompanyName, c.CategoryName;

/*
5. Mostra un informe amb el nom dels clients (customers.companyname) que han rebut més de tres paquets provinents del shipper número 3.
*/
SELECT c.CompanyName, COUNT(o.OrderID) AS ShipmentsFromShipper3
FROM Customers c
JOIN Orders o ON c.CustomerID = o.CustomerID
WHERE o.ShipVia = 3
GROUP BY c.CompanyName
HAVING COUNT(o.OrderID) > 3;

/*
6. Mostra un recompte de les ordres que ha rebut cada customer ordenant pel recompte de forma descendent.
*/
SELECT c.CompanyName, COUNT(o.OrderID) AS TotalOrders
FROM Customers c
JOIN Orders o ON c.CustomerID = o.CustomerID
GROUP BY c.CompanyName
ORDER BY TotalOrders DESC;

/*
7. Mostra un recompte de clients (customers) per codi postal sempre i quant n'hi hagi més d'un al mateix codi postal.
*/
SELECT PostalCode, COUNT(*) AS CustomersPerPostalCode
FROM Customers
GROUP BY PostalCode
HAVING COUNT(*) > 1;

/*
8. Compta quants territoris diferents hi ha per cada regió. Mostra RegionDescription i el recompte.
*/
SELECT r.RegionDescription, COUNT(t.TerritoryID) AS TerritoryCount
FROM Region r
JOIN Territories t ON r.RegionID = t.RegionID
GROUP BY r.RegionDescription;

/*
9. Calcula la mitjana de comandes (orders) servides per cada shipper. 
*/
SELECT s.CompanyName AS ShipperName, 
       AVG(OrderCount) AS AverageOrders
FROM (
    SELECT ShipVia, COUNT(OrderID) AS OrderCount
    FROM Orders
    GROUP BY ShipVia
) o
JOIN Shippers s ON o.ShipVia = s.ShipperID
GROUP BY s.CompanyName;

/*
10. Compta quants empleats hi ha per cada territori. Mostra TerritoryDescription i el recompte.
*/
SELECT t.TerritoryDescription, COUNT(et.EmployeeID) AS EmployeeCount
FROM EmployeeTerritories et
JOIN Territories t ON et.TerritoryID = t.TerritoryID
GROUP BY t.TerritoryDescription;

/*
11. Compta quants empleats hi ha per cada regió. Mostra RegionDescription i el recompte.
*/
SELECT r.RegionDescription, COUNT(DISTINCT e.EmployeeID) AS EmployeeCount
FROM Region r
JOIN Territories t ON r.RegionID = t.RegionID
JOIN EmployeeTerritories et ON t.TerritoryID = et.TerritoryID
JOIN Employees e ON et.EmployeeID = e.EmployeeID
GROUP BY r.RegionDescription;

/*
12. Retorna només el nom de la regió (region.description) que té més empleats.
*/
SELECT r.RegionDescription
FROM Region r
JOIN Territories t ON r.RegionID = t.RegionID
JOIN EmployeeTerritories et ON t.TerritoryID = et.TerritoryID
JOIN Employees e ON et.EmployeeID = e.EmployeeID
GROUP BY r.RegionDescription
ORDER BY COUNT(DISTINCT e.EmployeeID) DESC
LIMIT 1;
/*
13. Retorna el recompte de productes per categoria.
*/
SELECT c.CategoryName, COUNT(p.ProductID) AS ProductCount
FROM Categories c
JOIN Products p ON c.CategoryID = p.CategoryID
GROUP BY c.CategoryName;

/*
14. Calcula quants productes pot servir cada distribuïdor. Mostra el CompanyName i el recompte de productes.
*/
SELECT s.CompanyName, COUNT(DISTINCT p.ProductID) AS ProductCount
FROM Shippers s
JOIN Orders o ON s.ShipperID = o.ShipVia
JOIN [Order Details] od ON o.OrderID = od.OrderID
JOIN Products p ON od.ProductID = p.ProductID
GROUP BY s.CompanyName;

/*
15. Calcula quants empleats hi ha per Ciutat contractats a partir de l'any 1993.
*/
SELECT City, COUNT(*) AS EmployeeCount
FROM Employees
WHERE HireDate >= '1993-01-01'
GROUP BY City;

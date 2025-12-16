# API Testing Script

# Test the Laravel API endpoints

Write-Host "Testing Laravel API endpoints..." -ForegroundColor Green
Write-Host "Backend URL: http://localhost:8000" -ForegroundColor Yellow

# Test GET all products
Write-Host "`nTesting GET /api/products..." -ForegroundColor Cyan
try {
    $response = Invoke-RestMethod -Uri "http://localhost:8000/api/products" -Method GET -ContentType "application/json"
    Write-Host "✓ GET /api/products - Success" -ForegroundColor Green
    Write-Host "Found $($response.data.Count) products" -ForegroundColor White
    
    # Show first product as example
    if ($response.data.Count -gt 0) {
        $firstProduct = $response.data[0]
        Write-Host "Example product:" -ForegroundColor Yellow
        Write-Host "  Name: $($firstProduct.name)" -ForegroundColor White
        Write-Host "  Price: $($firstProduct.price)" -ForegroundColor White
        Write-Host "  Category: $($firstProduct.category)" -ForegroundColor White
        Write-Host "  Discount: $($firstProduct.discount)%" -ForegroundColor White
        Write-Host "  Final Price: $($firstProduct.final_price)" -ForegroundColor White
    }
} catch {
    Write-Host "✗ GET /api/products - Failed" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
}

# Test GET single product
Write-Host "`nTesting GET /api/products/1..." -ForegroundColor Cyan
try {
    $response = Invoke-RestMethod -Uri "http://localhost:8000/api/products/1" -Method GET -ContentType "application/json"
    Write-Host "✓ GET /api/products/1 - Success" -ForegroundColor Green
    Write-Host "Product: $($response.data.name)" -ForegroundColor White
} catch {
    Write-Host "✗ GET /api/products/1 - Failed" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host "`nAPI testing completed!" -ForegroundColor Green
Write-Host "`nFrontend URL: http://localhost:5173" -ForegroundColor Yellow
Write-Host "You can now test the full application in your browser." -ForegroundColor White
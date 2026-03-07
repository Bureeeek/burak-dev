Write-Host "Starting the development server..."

# Install dependencies
Write-Host "Installing dependencies..."
pnpm install

# Start the development server
Write-Host "Starting Next.js development server..."
pnpm dev

# Keep the window open
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown')

Add-Type @"
using System;
using System.Runtime.InteropServices;
public class WinFix {
  [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr hWnd, int nCmdShow);
  [DllImport("user32.dll")] public static extern bool MoveWindow(IntPtr hWnd, int X, int Y, int nWidth, int nHeight, bool bRepaint);
  [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr hWnd);
}
"@

$targets = Get-Process msedge, chrome, firefox, iexplore, opera -ErrorAction SilentlyContinue |
  Where-Object { $_.MainWindowHandle -ne 0 -and $_.MainWindowTitle }

$count = 0
foreach ($p in $targets) {
  $title = $p.MainWindowTitle
  if ($title -match 'TWD|Walking Dead|Online|index\.html|Survival') {
    [WinFix]::ShowWindow($p.MainWindowHandle, 9) | Out-Null            # restore if minimized
    [WinFix]::MoveWindow($p.MainWindowHandle, 60 + $count * 30, 40 + $count * 30, 1280, 820, $true) | Out-Null
    [WinFix]::SetForegroundWindow($p.MainWindowHandle) | Out-Null
    $count++
  }
}

if ($count -gt 0) {
  Write-Host "Fenster zurueck auf dem Bildschirm: $count" -ForegroundColor Green
} else {
  Write-Host "Kein passendes Browser-Fenster gefunden. Starte die Seite zuerst (siehe README)." -ForegroundColor Yellow
}
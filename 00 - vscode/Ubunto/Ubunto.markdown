# Install
1. Microsoft Store -> install ubunto app
2. powershell -> wsl --install
2.1 -> Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
 


 if it get error 
 -> Unable to locate package fonts-powerline #307
 then
 https://github.com/powerline/fonts/issues/307
 sudo apt-get update
 sudo apt-get install fonts-powerline
 
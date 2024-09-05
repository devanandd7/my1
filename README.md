when you find this type of error than do this.

***Open PowerShell as Administrator:
Press Win + X and select Windows PowerShell (Admin).

***Change the Execution Policy
In the PowerShell window, type the following command and press Enter.

cmd - Set-ExecutionPolicy RemoteSigned

You might be prompted to confirm the change. Type Y and press Enter.

***Verify the Change:
You can check the current execution policy by running:
cmd - Get-ExecutionPolicy

Done.

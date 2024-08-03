### Instructions for Using `mixxx-now-playing.exe` with Mixxx SQLite Database

To use the `mixxx-now-playing.exe` application with your Mixxx SQLite database, follow these steps:

#### Prerequisites

- Ensure you have the Mixxx application installed and configured.
- Locate your Mixxx SQLite database file, typically named `mixxxdb.sqlite`.

#### Running the Application

You can provide the path to your Mixxx SQLite database in two ways:

1. **Using an Environment Variable**
2. **Providing the Path as a Command-Line Argument**

### Method 1: Using an Environment Variable

1. **Set the Environment Variable**:
   - On Windows, open Command Prompt or PowerShell and set the `MIXXX_DB_PATH` environment variable to the directory containing your `mixxxdb.sqlite` file:
     ```powershell
     set MIXXX_DB_PATH=C:\Path\To\Your\Database
     ```

2. **Run the Application**:
   - Execute the `mixxx-now-playing.exe`:
     ```powershell
     .\mixxx-now-playing.exe
     ```

### Method 2: Providing the Path as a Command-Line Argument

1. **Run the Application with the Database Path**:
   - Provide the path to the directory containing your `mixxxdb.sqlite` file as a command-line argument:
     ```powershell
     .\mixxx-now-playing.exe C:\Path\To\Your\Database
     ```

### Example

Assuming your Mixxx database is located at `C:\Users\KMK\AppData\Local\Mixxx`, you can run the application as follows:

#### Using Environment Variable

```powershell
set MIXXX_DB_PATH=C:\Users\Username\AppData\Local\Mixxx
.\mixxx-now-playing.exe
```

#### Using Command-Line Argument

```powershell
.\mixxx-now-playing.exe C:\Users\Username\AppData\Local\Mixxx
```

## Notes
If neither the environment variable nor the command-line argument is provided, the application will default to looking for the mixxxdb.sqlite file in the same directory as the executable.
Ensure the path provided points to the directory containing the mixxxdb.sqlite file, not the file itself.
By following these instructions, you can successfully run the mixxx-now-playing.exe application with your Mixxx SQLite database.

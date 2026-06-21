# Instructions for Using `mixxx-now-playing.exe` with Mixxx SQLite Database

To use the `mixxx-now-playing.exe` application with your Mixxx SQLite database, follow these steps:

## Prerequisites

- Ensure you have the Mixxx application installed and configured.
- Locate your Mixxx SQLite database file, typically named `mixxxdb.sqlite`.

## Running the Application

You can provide the path to your Mixxx SQLite database in two ways:

1. **Using an Environment Variable**
2. **Providing the Path as a Command-Line Argument**

### Method 1: Using an Environment Variable

Set the `MIXXX_DB_PATH` environment variable to the directory containing your `mixxxdb.sqlite` file:

```powershell
set MIXXX_DB_PATH=C:\Path\To\Your\Database
```

Run the application:

```powershell
.\mixxx-now-playing.exe
```

Open `http://localhost:3001` in your browser.

### Method 2: Providing the Path as a Command-Line Argument

Run the application and provide the path to the directory containing your `mixxxdb.sqlite` file as a command-line argument:

```powershell
.\mixxx-now-playing.exe C:\Path\To\Your\Database
```

Open `http://localhost:3001` in your browser.

### Example

Assuming your Mixxx database is located at `C:\Users\KMK\AppData\Local\Mixxx`, you can run the application as follows:

### Using Environment Variable

```powershell
set MIXXX_DB_PATH=C:\Users\Username\AppData\Local\Mixxx
.\mixxx-now-playing.exe
```

### Using Command-Line Argument

```powershell
.\mixxx-now-playing.exe C:\Users\Username\AppData\Local\Mixxx
```

## Notes

The application listens on port 3001 by default. You can override it with the `PORT` environment variable if needed.
If neither the environment variable nor the command-line argument is provided, the application will default to looking for the mixxxdb.sqlite file in the same directory as the executable.
Ensure the path provided points to the directory containing the mixxxdb.sqlite file, not the file itself.
By following these instructions, you can successfully run the mixxx-now-playing.exe application with your Mixxx SQLite database.

## Announcement Rotation

The main screen now supports a timed rotation between the track display and a separate announcement page.

- The default cycle is 10 minutes for the now-playing screen and 2 minutes for the announcement screen.
- The rotation is controlled in `index.html` by the `MAIN_VIEW_DURATION_MS` and `ANNOUNCEMENT_VIEW_DURATION_MS` constants.
- Edit `announcement.html` to change the content shown during the announcement window.
- The announcement page is loaded locally from `/announcement.html`, so it is included in the packaged EXE as part of the app assets.
